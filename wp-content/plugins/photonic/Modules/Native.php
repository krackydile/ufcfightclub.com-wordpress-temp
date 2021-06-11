<?php
namespace Photonic_Plugin\Modules;

use Photonic_Plugin\Components\Pagination;
use Photonic_Plugin\Components\Photo;
use Photonic_Plugin\Components\Photo_List;

require_once('Core.php');
require_once('Level_One_Module.php');

/**
 * Processor for native WP galleries. This extends the Photonic_Plugin\Modules\Core class and defines methods local to WP.
 *
 */

class Native extends Core implements Level_One_Module {
	private static $instance = null;

	protected function __construct() {
		parent::__construct();
		global $photonic_wp_disable_title_link;
		$this->provider = 'wp';
		$this->link_lightbox_title = empty($photonic_wp_disable_title_link);
		$this->doc_links = [
			'general' => 'https://aquoid.com/plugins/photonic/wp-galleries/',
		];
	}

	public static function get_instance() {
		if (self::$instance == null) {
			self::$instance = new Native();
		}
		return self::$instance;
	}

	/**
	 * Gets all images associated with the gallery. This method is lifted almost verbatim from the gallery short-code function provided by WP.
	 * We will take the gallery images and do some fun stuff with styling them in other methods. We cannot use the WP function because
	 * this code is nested within the gallery_shortcode function and we want to tweak that (there is no hook that executes after
	 * the gallery has been retrieved.)
	 *
	 * @param array $attr
	 * @return string
	 */
	public function get_gallery_images($attr = []) {
		global $post, $photonic_wp_title_caption, $photonic_alternative_shortcode;

		$this->push_to_stack('Get Gallery Images');

		// We're trusting author input, so let's at least make sure it looks like a valid orderby statement
		if (isset($attr['orderby'])) {
			$attr['orderby'] = sanitize_sql_orderby($attr['orderby']);
			if (!$attr['orderby'])
				unset($attr['orderby']);
		}

		if (!empty($attr['ids'])) {
			// 'ids' is explicitly ordered, unless you specify otherwise.
			if (empty($attr['orderby'])) {
				$attr['orderby'] = 'post__in';
			}
			$attr['include'] = $attr['ids'];
		}

		$html5 = current_theme_supports( 'html5', 'gallery' );
		$attr = shortcode_atts([
			'order'      => 'ASC',
			'orderby'    => 'menu_order ID',
			'id'         => $post ? $post->ID : 0,
			'itemtag'    => $html5 ? 'figure'     : 'dl',
			'icontag'    => $html5 ? 'div'        : 'dt',
			'captiontag' => $html5 ? 'figcaption' : 'dd',
//			'columns'    => !in_array($attr['style'], ['square', 'circle', 'random', 'masonry', 'mosaic']) ? 1 : 3,
//			'columns'    => 3,
			'size'       => 'thumbnail',
			'include'    => '',
			'exclude'    => '',
			'link'       => ''
		], $attr, !empty($photonic_alternative_shortcode) ? $photonic_alternative_shortcode: 'gallery' );

		$attr['layout'] = $attr['style'];
		$attr['columns'] = !empty($attr['columns']) && ($attr['layout'] !== 'random' && $attr['layout'] !== 'mosaic') ? $attr['columns'] : 'auto';
		$attr['main_size'] = !empty($attr['main_size']) ? $attr['main_size'] : $attr['slide_size'];
		$attr['caption'] = !empty($attr['caption']) ? $attr['caption'] : $photonic_wp_title_caption;

		$attr = array_map('trim', $attr);
		extract($attr);

		$id = intval($attr['id']);
		if ('RAND' == $attr['order'])
			$attr['orderby'] = 'none';

		// All arguments can be overridden by the standard pre_get_posts filter ...
		$args = ['post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => ['image'], 'order' => $attr['order'], 'orderby' => $attr['orderby'], 'paged' => $attr['page']];

		if (!empty($attr['include'])) {
			$include = preg_replace('/[^0-9,]+/', '', $attr['include']);
			$args['include'] = $include;
			$attr['count'] = -1; // 'include' always ignores the 'posts_per_page'. Having the original value here shows the "More" button even when not required.
			$_attachments = get_posts($args);
			$total_posts = count($_attachments);

			$attachments = [];
			foreach ($_attachments as $key => $val) {
				$attachments[$val->ID] = $_attachments[$key];
			}
		}
		else {
			$args['post_parent'] = $id;
			if (!empty($attr['exclude'])) {
				$exclude = preg_replace('/[^0-9,]+/', '', $attr['exclude']);
				$args['exclude'] = $exclude;
			}
			// First get the total
			$attachments = get_children($args);
			$total_posts = count($attachments);

			$args['posts_per_page'] = $attr['count'];
			$attachments = get_children($args);
		}

		$ret = $this->process_gallery($attachments, $attr);
		$this->pop_from_stack();
		if (empty($ret)) { // This is needed, because if the stack markup is added, it does not display a gallery
			return '';
		}

		if (!empty($this->stack_trace[$this->gallery_index])) {
			$ret[] = $this->stack_trace[$this->gallery_index];
		}
		return $ret;
	}

	function build_level_1_objects($response, array $shortcode, $module_parameters = [], $options = []) {
		$photo_objects = [];
		$thumb_size = $shortcode['thumb_size'];
		$main_size = $shortcode['main_size'];
		$tile_size = !empty($shortcode['tile_size']) ? $shortcode['tile_size'] : $main_size;
		$sources = [];
		$tiles = [];
		$thumbs = [];
		foreach ($response as $id => $attachment ) {
			$wp_details = wp_prepare_attachment_for_js($id);
			$sources[$id] = wp_get_attachment_image_src($id, $main_size, false);
			$tiles[$id] = wp_get_attachment_image_src($id, $tile_size, false);
			$thumbs[$id] = wp_get_attachment_image_src($id, $thumb_size);

			if (isset($attachment->post_title)) {
				$title = wptexturize($attachment->post_title);
			}
			else {
				$title = '';
			}
			$title = apply_filters('photonic_modify_title', $title, $attachment);

			if (is_array($wp_details)) {
				$photo = new Photo();

				$photo->thumbnail = $thumbs[$id][0];
				$photo->thumb_size = [
					'w' => $thumbs[$id][1],
					'h' => $thumbs[$id][2],
				];

				$photo->main_image = $sources[$id][0];
				$photo->main_size = [
					'w' => $sources[$id][1],
					'h' => $sources[$id][2],
				];

				$photo->tile_image = $tiles[$id][0];
				$photo->tile_size = [
					'w' => $tiles[$id][1],
					'h' => $tiles[$id][2],
				];

				$photo->title = esc_attr($title);
				$photo->alt_title = $photo->title;
				$photo->description = esc_attr($wp_details['caption']);
				$photo->main_page = $wp_details['link'];
				$photo->id = $wp_details['id'];

				if ($wp_details['type'] == 'video') {
					$photo->video = $wp_details['url'];
				}

				$photo_objects[] = $photo;
			}
		}
		return $photo_objects;
	}

	/**
	 * Builds the markup for a gallery when you choose to use a specific gallery style. The following styles are allowed:
	 *    1. strip-below: Shows thumbnails for the gallery below a larger image
	 *    2. strip-above: Shows thumbnails for the gallery above a larger image
	 *    3. no-strip: Doesn't show thumbnails. Useful if you are making it behave like an automatic slideshow.
	 *    4. launch: Shows a thumbnail for the gallery, which you can click to launch a slideshow.
	 *    5. random: Shows a random justified gallery.
	 *
	 * @param $attachments
	 * @param $short_code
	 * @return string|array
	 */
	function process_gallery($attachments, $short_code) {
		global $photonic_wp_thumbnail_title_display;
		if ($short_code['style'] == 'default') {
			return '';
		}
		$photos = $this->build_level_1_objects($attachments, $short_code);

		$row_constraints = [
			'constraint-type' => $short_code['columns'] == 'auto' ? 'padding' : 'count',
			'padding' => 0,
			'count' => absint($short_code['columns']) ? absint($short_code['columns']) : 3
		];

		$photo_list = new Photo_List($short_code);
		$photo_list->photos = $photos;
		$photo_list->title_position = $photonic_wp_thumbnail_title_display;
		$photo_list->row_constraints = $row_constraints;
		$photo_list->parent = 'stream';

		// Pagination does not work for native galleries
		$photo_list->pagination = null;

		return [$photo_list];
	}
}
