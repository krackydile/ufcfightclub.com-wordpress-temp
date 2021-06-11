<?php
namespace Photonic_Plugin\Layouts;

require_once('Level_One_Gallery.php');

/**
 * Generates the slideshow layout for level 1 objects. Level 2 cannot be displayed as slideshows.
 */
class Slideshow extends Core_Layout implements Level_One_Gallery {
	function generate_level_1_gallery($photo_list, $short_code, $module) {
		global $photonic_wp_slide_adjustment;
		$photos = $photo_list->photos;
		if (!is_array($photos) || empty($photos)) {
			return '';
		}

		$data_attr = '';
		foreach ($short_code as $key => $value) {
			if (in_array($key, ['speed', 'timeout', 'fx', 'pause', 'layout', 'strip-style', 'controls', 'columns'])) {
				$data_attr .= 'data-photonic-'.$key.'="'.esc_attr($value).'" ';
			}
		}

		$style = empty($short_code['style']) ? (empty($short_code['layout']) ? '' : $short_code['layout']) : $short_code['style'];
		$title_position = empty($short_code['title_position']) ? $photo_list->title_position : $short_code['title_position'];

		global $photonic_slideshow_prevent_autostart;
		if ($module->provider == 'wp') {
			$pager_position = !empty($short_code['style']) ? $short_code['style'] : $short_code['layout'];
		}
		else {
			$pager_position = $short_code['layout'];
		}

		$perPage = (empty($short_code['columns']) || $short_code['columns'] == 'auto' || !is_numeric($short_code['columns'])) ? 1 : $short_code['columns'];
		$splide_options = [
			'type' => (!empty($short_code['fx']) && $short_code['fx'] == 'fade') ? 'fade' : 'loop',
			'perPage' => $perPage,
			'autoplay' => !(isset($photonic_slideshow_prevent_autostart) && $photonic_slideshow_prevent_autostart == 'on'),
			'speed' => (empty($short_code['speed']) || !is_numeric($short_code['speed'])) ? 1000 : $short_code['speed'],
			'drag' => true,
			'pauseOnHover' => !($short_code['pause'] === 0 || $short_code['pause'] == '0'),
			'pagination' => ($pager_position == 'strip-below' || $pager_position == 'strip-right') && $short_code['strip-style'] == 'button',
			'slideFocus' => false,
//			'updateOnMove' => true,
			'arrows' => empty($short_code['controls']) || $short_code['controls'] != 'hide',
//			'cover' => $photonic_wp_slide_adjustment !== 'side-white' && $photonic_wp_slide_adjustment !== 'adapt-height',
//			'heightRatio' => ($photonic_wp_slide_adjustment !== 'side-white' && $photonic_wp_slide_adjustment !== 'adapt-height') ? 0.5 : 0,
			'direction' => 'ltr',
			'breakpoints' => [
				480 => [
					'perPage' => 1,
				]
			],
		];
		$splide_options = json_encode($splide_options);
		$ret = '';
		if ($pager_position == 'strip-above' && $short_code['strip-style'] == 'thumbs') {
//			$ret .= $this->get_thumbnails($photos, $module);
			$ret .= $this->get_secondary_slider($photos, $module);
		}

		$ret .= "<div id='photonic-slideshow-{$module->gallery_index}' class='photonic-slideshow {$style} title-display-{$title_position} photonic-slideshow-$photonic_wp_slide_adjustment' data-splide='$splide_options'>\n";

		$ret .="\t<div class='splide__track'>\n";
		$ret .= "\t\t<ul class='photonic-slideshow-content splide__list' $data_attr>\n";

		foreach ($photos as $photo) {
//			$ret .= "\t\t\t<li class='photonic-slideshow-img splide__slide' data-thumb='{$photo->thumbnail}'>\n";
			$ret .= "\t\t\t<li class='photonic-slideshow-img splide__slide'>\n";
			$title = esc_attr($photo->title);
			$description = esc_attr($photo->description);
			if ($short_code['caption'] == 'desc' || ($short_code['caption'] == 'title-desc' && empty($title)) || ($short_code['caption'] == 'desc-title' && !empty($description))) {
				$title = $description;
			}
			else if (($short_code['caption'] == 'desc-title' && empty($title)) || $short_code['caption'] == 'none') {
				$title = '';
			}

			$ret .= "\t\t\t\t<div class='splide__slide__container'>\n";
			if (!isset($photo->video)) {
				if ($title_position == 'tooltip') {
					$tooltip = 'data-photonic-tooltip="'.esc_attr($title).'" ';
				}
				else {
					$tooltip = '';
				}
				$ret .= "\t\t\t\t<img src='".$photo->main_image."' alt='{$title}' title='".(($title_position == 'regular' || $title_position == 'tooltip') ? $title : '')."' $tooltip id='photonic-slideshow-{$module->gallery_index}-{$photo->id}' />\n";
			}
			else {
				$ret .="\t\t\t\t<video controls loop><source src='{$photo->video}' type='video/mp4'><img src='{$photo->main_image}' alt=''></video>";
			}

			$shown_title = '';
			if (in_array($title_position, ['below', 'hover-slideup-show', 'hover-slidedown-show', 'slideup-stick']) && !empty($title)) {
				$shown_title = "\t\t\t\t".'<div class="photonic-title-info">'."\n\t\t\t\t".'<div class="photonic-photo-title photonic-title">'.wp_specialchars_decode($title, ENT_QUOTES).'</div>'."\n\t\t\t".'</div>'."\n";
			}

			if (!empty($title)) {
				$ret .= $shown_title;
			}

			$ret .= "\t\t\t\t</div>\n"; // .splide__slide__container
			$ret .= "\t\t\t</li>\n"; // .splide__slide
		}
		$ret .= "\t\t</ul>\n"; // .splide__list
		$ret .= "\t</div><!-- splide__track -->\n";

		$ret .= "</div><!-- .photonic-slideshow-->\n";

		if (($pager_position == 'strip-below' || $pager_position == 'strip-right') && $short_code['strip-style'] == 'thumbs') {
			$ret .= $this->get_secondary_slider($photos, $module);
		}
		return $ret;
	}

	private function get_secondary_slider($photos, $module) {
		$thumb_options = [
			'fixedWidth' => 100,
			'height' => 60,
			'gap' => 10,
			'cover' => true,
			'isNavigation' => true,
			'pagination' => false,
			'arrows' => false,
//			'focus' => 'center',
			'breakpoints' => [
				'600' => [
					'fixedWidth' => 66,
					'height' => 40,
				],
			],
		];
		$thumb_options = json_encode($thumb_options);

		$ret = "<div id='photonic-slideshow-{$module->gallery_index}-thumbs' class='photonic-slideshow-thumbs thumbnails js-thumbnails' data-splide='$thumb_options'>\n";
		$ret .="\t<div class='splide__track'>\n";
		$ret .= "\t<ul class='splide__list'>\n";
		foreach ($photos as $photo) {
			$ret .= "\t\t<li class='splide__slide' tabindex='0'>\n";
			$ret .= "\t\t\t<img src='{$photo->thumbnail}' alt=''>\n";
			$ret .= "\t\t</li>\n";
		}
		$ret .= "\t</ul>\n";
		$ret .= "\t</div><!-- photonic-slideshow-thumbs -->\n";
		$ret .= "</div>\n";
		return $ret;
	}
}
