<?php
namespace Photonic_Plugin\Layouts;

use Photonic_Plugin\Components\Album_List;
use Photonic_Plugin\Components\Pagination;
use Photonic_Plugin\Components\Photo_List;
use Photonic_Plugin\Layouts\Features\Can_Use_Lightbox;
use Photonic_Plugin\Modules\Core;
use Photonic_Plugin\Components\Album;
use Photonic_Plugin\Components\Photo;

require_once('Level_One_Gallery.php');
require_once('Level_Two_Gallery.php');

require_once('Features/Can_Use_Lightbox.php');

/**
 * Class Grid
 * This is the generic Grid layout for Photonic. This handles all grids except for slideshows. The following approaches are used for layouts:
 *  - CSS: Used for square, circle, masonry and justified grids (only when all images have sizes - pretty much every case except Instagram or SmugMug / Zenfolio galleries with missing thumbnails)
 *  - JS: Used for justified grids (only when at least one image is missing a size, e.g. Instagram with all sizes missing, or SmugMug with missing album thumbnails) and Mosaic
 * The Justified Grid CSS approach is based on the solution provided here: https://stackoverflow.com/a/49107319
 *
 * @package Photonic_Plugin\Layouts
 */
class Grid extends Core_Layout implements Level_One_Gallery, Level_Two_Gallery {
	use Can_Use_Lightbox;

	/**
	 * Generates the HTML for the lowest level gallery, i.e. the photos. This is used for both, in-page and popup displays.
	 * The code for the random layouts is handled in JS, but just the HTML markers for it are provided here.
	 *
	 * @param Photo_List $photo_list
	 * @param $short_code
	 * @param $module Core
	 * @return string
	 */
	function generate_level_1_gallery($photo_list, $short_code, $module) {
		global $photonic_tile_min_height;
		$module->push_to_stack('Generate level 1 gallery');

		$photos = $photo_list->photos;

		$lightbox = self::get_lightbox();

		$layout = $short_code['layout'];
		$columns = !empty($short_code['columns']) && ($layout !== 'random' && $layout !== 'mosaic') ? $short_code['columns'] : 'auto';
		$display = !empty($short_code['display']) ? $short_code['display'] : 'in-page';
		$more = !empty($short_code['more']) ? esc_attr($short_code['more']) : '';
		$more = (empty($more) && !empty($short_code['photo_more'])) ? esc_attr($short_code['photo_more']) : $more;
		$panel = !empty($short_code['panel']) ? $short_code['panel'] : '';

		$title_position = empty($short_code['title_position']) ? $photo_list->title_position : $short_code['title_position'];
		$row_constraints = $photo_list->row_constraints;
		$parent = $photo_list->parent;
		$pagination = $photo_list->pagination;
		$indent = $photo_list->indent;

		list($container_id, $container_end) = $this->get_container_details($short_code, $module);

		$non_standard = $layout == 'random' || $layout == 'masonry' || $layout == 'mosaic';

		if (absint($columns)) {
			$gallery_item_class = 'photonic-gallery-'.$columns.'c';
		}
		else if ($row_constraints['constraint-type'] == 'padding') {
			$gallery_item_class = 'photonic-pad-photos';
		}
		else {
			$gallery_item_class = 'photonic-gallery-'.$row_constraints['count'].'c';
		}
		$gallery_item_class .= ' photonic-level-1 photonic-thumb';

		$link_attributes = $lightbox->get_gallery_attributes($panel, $module);
		$link_attributes_text = $this->get_text_from_link_attributes($link_attributes);

		$effect = $this->get_thumbnail_effect($short_code, $layout, $title_position);

		$ret = '';

		list($pagination_data, $columns_data) = $this->get_gallery_data_attributes($short_code, $module, $pagination, $columns);

		global $photonic_external_links_in_new_tab;
		if (!empty($photonic_external_links_in_new_tab)) {
			$target = " target='_blank' ";
		}
		else {
			$target = '';
		}

		$counter = 0;
		$thumbnail_class = " class='$layout' ";

		$layout_engine = $this->get_layout_engine($module, $short_code);
		$all_sizes_present = strtolower($layout_engine) === 'css';

		/** @var Photo $photo */
		foreach ($photos as $photo) {
			$counter++;

			$img_dim = '';
			$item_dim = '';
			if ($non_standard && $display == 'in-page') {
				$thumb = $photo->tile_image ?: $photo->main_image;
				if (!empty($photo->tile_size)) {
					$inbuilt_sizes = $photo->tile_size;
				}
				else if (!empty($photo->main_size)) {
					$inbuilt_sizes = $photo->main_size;
				}
			}
			else {
				$thumb = $photo->thumbnail;
				if (!empty($photo->thumb_size)) {
					$inbuilt_sizes = $photo->thumb_size;
				}
			}

			if (!empty($inbuilt_sizes)) {
				$img_dim = " width='{$inbuilt_sizes['w']}' height='{$inbuilt_sizes['h']}' ";
				$item_dim = " style='--dw: {$inbuilt_sizes['w']}; --dh: {$inbuilt_sizes['h']}' ";
			}
			else {
				$all_sizes_present = false;
			}

			$element_start = "$indent\t<figure class='$gallery_item_class' $item_dim>\n";

			$ret .= $element_start;
			$deep_value = 'gallery[photonic-' . $module->provider . '-' . $parent . '-' . ($panel ?: $module->gallery_index) . ']/' . ($photo->id ?: $counter) . '/';
			$deep_link = ' data-photonic-deep="' . $deep_value . '" ';
			$buy = '';
			if (!empty($photo->buy_link) && $module->show_buy_link) {
				$buy = ' data-photonic-buy="' . $photo->buy_link . '" ';
			}

			$title = esc_attr($photo->title);
			$description = esc_attr($photo->description);
			$alt = esc_attr($photo->alt_title);

			if (!empty($short_code['caption']) && ($short_code['caption'] == 'desc' || ($short_code['caption'] == 'title-desc' && empty($title)) || ($short_code['caption'] == 'desc-title' && !empty($description)))) {
				$title = $description;
			}
			else if (empty($short_code['caption']) || $short_code['caption'] == 'none') {
				$title = '';
			}

			$title_markup = $lightbox->get_lightbox_title($photo, $module, $title, $alt, $target);

			$shown_title = '';
			if (in_array($title_position, ['below', 'hover-slideup-show', 'hover-slidedown-show', 'slideup-stick']) && !empty($title)) {
				$shown_title = '<figcaption class="photonic-title-info"><div class="photonic-photo-title photonic-title">' . wp_specialchars_decode($title, ENT_QUOTES) . '</div></figcaption>';
			}

			$photo_data = ['title' => $title_markup, 'deep' => $deep_value, 'raw_title' => $title];
			if (!empty($photo->download)) {
				$photo_data['download'] = $photo->download;
			}
			if (!empty($photo->video)) {
				$photo_data['video'] = $photo->video;
			}
			else {
				$photo_data['image'] = $photo->main_image;
			}
			$photo_data['id'] = $photo->id;

			$lb_specific_data = $lightbox->get_photo_attributes($photo_data, $module);

			if (!empty($photo->video)) {
				$video_markup = $lightbox->get_video_markup($photo, $module, $indent);
				$ret .= $video_markup;
			}

			if ($title_position == 'tooltip') {
				$tooltip = 'data-photonic-tooltip="' . esc_attr($title) . '" ';
			}
			else {
				$tooltip = '';
			}

			$ret .= $indent . "\t\t" . '<a ' . $link_attributes_text . ' href="' . $lightbox->get_grid_link($photo, $module) . '" title="' . ($title_position != 'none' ? esc_attr($title) : '') . '" data-title="' . $title_markup . '" ' . $tooltip . ' ' . $lb_specific_data . ' ' . $target . $deep_link . $buy . ">\n";
			$ret .= $indent . "\t\t\t" . '<img alt="' . $alt . '" src="' . $thumb . '" ' . $thumbnail_class . " loading='eager' $img_dim/>\n";
			$ret .= $indent . "\t\t\t" . $shown_title . "\n";
			$ret .= $indent . "\t\t" . "</a>\n";
			$ret .= $indent . "\t" . "</figure>\n";
		}

		$ret = trim($ret);
		if ($ret != '') {
			if (substr($ret, -9) != "</figure>" && $short_code['popup'] == 'show' && !$non_standard) {
				$ret .= "\n$indent</figure><!-- last figure.photonic-pad-photos -->";
			}

			$gallery_class = "class='title-display-$title_position photonic-level-1-container ".($non_standard ? 'photonic-'.$layout.'-layout' : 'photonic-standard-layout')." photonic-thumbnail-effect-$effect ".($all_sizes_present ? 'sizes-present' : 'sizes-missing')."'";
			if ($display == 'popup') {
				$gallery_class = "class='title-display-$title_position photonic-level-1-container modal-gallery'";
			}

			if (!is_numeric($photonic_tile_min_height)) {
				$photonic_tile_min_height = 200;
			}
			$start_with = "$indent<div $container_id $gallery_class $pagination_data $columns_data style='--tile-min-height: {$photonic_tile_min_height}px'>\n";

			$ret = $start_with.$ret;
			$ret .= "\n$indent</div> <!-- ./photonic-level-1-container -->\n";
			$ret .= "<span id='$container_end'></span>";

			if (!empty($pagination) && isset($pagination->end) && isset($pagination->total) && $pagination->total > $pagination->end) {
				$ret .= !empty($more) ? "<a href='#' class='photonic-more-button photonic-more-dynamic'>$more</a>\n" : '';
			}
		}

		$module->pop_from_stack();
		return $ret;
	}

	/**
	 * Generates the HTML for a group of level-2 items, i.e. Photosets (Albums) and Galleries for Flickr, Albums for Google Photos,
	 * Albums for SmugMug, and Photosets (Galleries and Collections) for Zenfolio. No concept of albums
	 * exists in native WP and Instagram.
	 *
	 * @param Album_List $album_list
	 * @param $short_code
	 * @param $module Core
	 * @return string
	 */
	function generate_level_2_gallery($album_list, $short_code, $module) {
		global $photonic_tile_min_height;

		$module->push_to_stack('Generate Level 2 Gallery');

		$objects = $album_list->albums;

		$row_constraints = $album_list->row_constraints;
		$type = $album_list->type;
		$singular_type = $album_list->singular_type;
		$title_position = empty($short_code['title_position']) ? $album_list->title_position : $short_code['title_position'];
		$level_1_count_display = $album_list->level_1_count_display;
		$indent = $album_list->indent;
		$provider = $module->provider;

		$columns = $short_code['columns'];
		$layout = !isset($short_code['layout']) ? 'square' : $short_code['layout'];
		$popup = ' data-photonic-popup="'.$short_code['popup'].'"';

		$non_standard = $layout == 'random' || $layout == 'masonry' || $layout == 'mosaic';
		$effect = $this->get_thumbnail_effect($short_code, $layout, $title_position);

		list($container_id, $container_end) = $this->get_container_details($short_code, $module);

		$pagination = $album_list->pagination;
		$more = !empty($short_code['more']) ? esc_attr($short_code['more']) : '';

		list($pagination_data, $columns_data) = $this->get_gallery_data_attributes($short_code, $module, $pagination, $columns);

		if ($columns != 'auto') {
			$gallery_item_class = 'photonic-gallery-'.$columns.'c';
		}
		else if ($row_constraints['constraint-type'] == 'padding') {
			$gallery_item_class = 'photonic-pad-'.$type;
		}
		else {
			$gallery_item_class = 'photonic-gallery-'.$row_constraints['count'].'c';
		}

		$gallery_item_class .= ' photonic-level-2 photonic-thumb';

		$counter = 0;

		$layout_engine = $this->get_layout_engine($module, $short_code);
		$all_sizes_present = strtolower($layout_engine) === 'css';

		$ret = '';
		/** @var Album $object */
		foreach ($objects as $object) {
			$data_attributes = $object->data_attributes ?: [];
			$data_attributes['platform'] = $provider;
			$data_attributes['singular'] = $singular_type;

			$data_array = [];
			foreach ($data_attributes as $attr => $value) {
				$data_array[] = 'data-photonic-'.$attr.'="'.$value.'"';
			}
			$data_array = implode(' ', $data_array);

			$id = empty($object->id) ? '' : $object->id.'-';
			$id = $id.$module->gallery_index;
			$title = esc_attr($object->title);

			$img_dim = '';
			$item_dim = '';
			if ($non_standard && !empty($object->tile_image)) {
				$img_src = $object->tile_image;
				$inbuilt_sizes = $object->tile_size ?: [];
			}
			else {
				$img_src = $object->thumbnail;
				$inbuilt_sizes = $object->thumb_size ?: [];
			}

			if (!empty($inbuilt_sizes)) {
				$img_dim = " width='{$inbuilt_sizes['w']}' height='{$inbuilt_sizes['h']}' ";
				$item_dim = " style='--dw: {$inbuilt_sizes['w']}; --dh: {$inbuilt_sizes['h']}' ";
			}
			else {
				$all_sizes_present = false;
			}

			$image = "<img src='$img_src' alt='".$title."' class='$layout' $img_dim loading='eager'/>";
			$additional_classes = !empty($object->classes) ? implode(' ', $object->classes) : '';
			$realm_class = '';
			if (!empty($object->classes)) {
				foreach ($object->classes as $class) {
					if (stripos($class, 'photonic-'.$provider.'-realm') !== FALSE) {
						$realm_class = $class;
					}
				}
			}
			if ($title_position == 'tooltip') {
				$tooltip = "data-photonic-tooltip='".esc_attr($title)."' ";
			}
			else {
				$tooltip = '';
			}

			if (empty($object->gallery_url)) {
				$anchor = "\n{$indent}\t\t<a href='{$object->main_page}' class='photonic-level-2-thumb $additional_classes' id='photonic-{$provider}-$singular_type-thumb-$id' title='".($title_position != 'none' ? esc_attr($title) : '')."' data-title='".$title."' $tooltip $data_array$popup>\n$indent\t\t\t".$image;
			}
			else {
				$anchor = "\n{$indent}\t\t<a href='{$object->gallery_url}' class='photonic-level-2-thumb gallery-page $additional_classes' id='photonic-{$provider}-$singular_type-thumb-$id' title='".($title_position != 'none' ? esc_attr($title) : '')."' data-title='".$title."' $tooltip $data_array$popup>\n$indent\t\t\t".$image;
			}
			$text = '';
			if (in_array($title_position, ['below', 'hover-slideup-show', 'hover-slidedown-show', 'slideup-stick'])) {
				$text = "\n{$indent}\t\t\t<figcaption class='photonic-title-info'>\n{$indent}\t\t\t\t<div class='photonic-$singular_type-title photonic-title'>".$title."";
				if (!$level_1_count_display && !empty($object->counter)) {
					$text .= '<span class="photonic-title-photo-count photonic-'.$singular_type.'-photo-count">'.sprintf(esc_html__('%s photos', 'photonic'), $object->counter).'</span>';
				}
			}
			if ($text != '') {
				$text .= "</div>\n{$indent}\t\t\t</figcaption>";
			}

			$anchor .= $text."\n{$indent}\t\t</a>";
			$password_prompt = '';
			if (!empty($object->passworded)) {
				$prompt_title = esc_attr__('Protected Content', 'photonic');
				$prompt_submit = esc_attr__('Access', 'photonic');
				$prompt_text = esc_attr__('This album is password-protected. Please provide a valid password.', 'photonic');

				$password_prompt = "
							<div class='photonic-password-prompter $realm_class' id='photonic-{$provider}-$singular_type-prompter-$id' title='$prompt_title' data-photonic-prompt='password'>
								<div class='photonic-password-prompter-content'>
									<div class='photonic-prompt-head'>
										<h3>
											<span class='title'>$prompt_title</span>
											<button class='close'>&times;</button>
										</h3>
									</div>
									<div class='photonic-prompt-body'>
										<p>$prompt_text</p>
										<input type='password' name='photonic-{$provider}-password' />
										<button class='photonic-{$provider}-submit photonic-password-submit confirm'>$prompt_submit</button>
									</div>
								</div>
							</div>";
			}

			$ret .= "\n$indent\t<figure class='$gallery_item_class' id='photonic-{$provider}-$singular_type-$id' $item_dim>{$anchor}{$password_prompt}\n$indent\t</figure>";
			$counter++;
		}

		if ($ret != '') {
			$gallery_class = "class='title-display-$title_position photonic-level-2-container ".($non_standard ? 'photonic-'.$layout.'-layout' : 'photonic-standard-layout')." photonic-thumbnail-effect-$effect ".($all_sizes_present ? 'sizes-present' : 'sizes-missing')."'";

			if (!is_numeric($photonic_tile_min_height)) {
				$photonic_tile_min_height = 200;
			}
			$ret = "\n$indent<div $container_id $gallery_class $pagination_data $columns_data style='--tile-min-height: {$photonic_tile_min_height}px'>".
				$ret.
				"\n$indent</div>\n";
		}
		else {
			$ret = '';
		}

		if (!empty($ret)) {
			$ret .= "<span id='$container_end'></span>";
			if (!empty($pagination) && isset($pagination->end) && isset($pagination->total) && $pagination->total > $pagination->end) {
				$ret .= !empty($more) ? "<a href='#' class='photonic-more-button photonic-more-dynamic'>$more</a>\n" : '';
			}
		}

		$module->pop_from_stack();
		return $ret;
	}

	/**
	 * @param $short_code
	 * @param $module
	 * @return array
	 */
	private function get_container_details($short_code, $module) {
		if ($short_code['display'] != 'popup') {
			$container_id = "id='photonic-{$module->provider}-stream-{$module->gallery_index}-container'";
			$container_end = "photonic-{$module->provider}-stream-{$module->gallery_index}-container-end";
		} else {
			$container_id = "id='photonic-{$module->provider}-panel-" . $short_code['panel'] . "-container'";
			$container_end = "photonic-{$module->provider}-panel-{$short_code['panel']}-container-end";
		}
		return [$container_id, $container_end];
	}

	/**
	 * @param array $link_attributes
	 * @return string
	 */
	private function get_text_from_link_attributes($link_attributes) {
		$class = '';
		$rel = '';
		$specific = '';
		if (!empty($link_attributes['class'])) {
			$class = " class='".implode(' ', array_values($link_attributes['class']))."' ";
		}

		if (!empty($link_attributes['rel'])) {
			$rel = " rel='".implode(' ', $link_attributes['rel'])."' ";
		}

		if (!empty($link_attributes['specific'])) {
			foreach ($link_attributes['specific'] as $key => $val) {
				$specific .= $key.'="'.implode(' ', $val).'" ';
			}
		}
		return $class.$rel.$specific;
	}

	/**
	 * @param $short_code
	 * @param $module
	 * @param Pagination $pagination
	 * @param $columns
	 * @return array
	 */
	private function get_gallery_data_attributes($short_code, $module, $pagination, $columns) {
		$pagination_data = ' data-photonic-platform="' . $module->provider . '"';

		$to_be_glued = '';

		if (!empty($short_code)) {
			$to_be_glued = [];
			foreach ($short_code as $name => $value) {
				if (is_scalar($value)) {
					if ($name != 'next_token') {
						$to_be_glued[] = $name . '=' . $value;
					}
				}
			}

			if (!empty($pagination->next_token)) {
				$to_be_glued[] = 'next_token=' . $pagination->next_token;
			}

			$to_be_glued = implode('&', $to_be_glued);
			$to_be_glued = esc_attr($to_be_glued);
		}

		$pagination_data .= ' data-photonic-query="' . $to_be_glued . '"';
		$columns_data = ' data-photonic-gallery-columns="' . $columns . '"';
		return [$pagination_data, $columns_data];
	}

	/**
	 * Returns the thumbnail effect that should be used for a gallery. Not all effects can be used by all types of layouts.
	 *
	 * @param $short_code
	 * @param $layout
	 * @param $title_position
	 * @return string
	 */
	private function get_thumbnail_effect($short_code, $layout, $title_position) {
		if (!empty($short_code['thumbnail_effect'])) {
			$effect = $short_code['thumbnail_effect'];
		}
		else {
			global $photonic_standard_thumbnail_effect, $photonic_justified_thumbnail_effect, $photonic_mosaic_thumbnail_effect, $photonic_masonry_thumbnail_effect;
			$effect = $layout == 'mosaic' ? $photonic_mosaic_thumbnail_effect :
				($layout == 'masonry' ? $photonic_masonry_thumbnail_effect :
					($layout == 'random' ? $photonic_justified_thumbnail_effect :
						$photonic_standard_thumbnail_effect));
		}

		if ($layout == 'circle' && $effect != 'opacity') { // "Zoom" doesn't work for circle
			$thumbnail_effect = 'none';
		}
		else if (($layout == 'square' || $layout == 'launch' || $layout == 'masonry') && $title_position == 'below') { // For these combinations, Zoom doesn't work
			$thumbnail_effect = 'none';
		}
		else {
			$thumbnail_effect = $effect;
		}
		return apply_filters('photonic_thumbnail_effect', $thumbnail_effect, $short_code, $layout, $title_position);
	}

	/**
	 * @param Core $module
	 * @param $short_code
	 * @return string
	 */
	private function get_layout_engine(Core $module, $short_code) {
		$layout_engine = 'photonic_' . $module->provider . '_layout_engine';
		global ${$layout_engine};
		$layout_using = empty($short_code['layout_engine']) ? ${$layout_engine} : $short_code['layout_engine'];
		return $layout_using;
	}
}