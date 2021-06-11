<?php
namespace Photonic_Plugin\Lightboxes\Features;

trait Show_Videos_Inline {
	function get_video_id($photo, $module) {
		return $module->provider.'-'.$module->gallery_index.'-'.$photo->id;
	}

	/**
	 * {@inheritDoc}
	 */
	public function get_video_markup($photo, $module, $indent) {
		$ret = '';
		$video_id = $this->get_video_id($photo, $module);
		$ret .= $indent."\t\t".'<div class="photonic-html5-external" id="photonic-video-'.$video_id.'">'."\n";
		$ret .= $indent."\t\t\t".'<video class="photonic" controls preload="none">'."\n";
		$ret .= $indent."\t\t\t\t".'<source src="'.$photo->video.'" type="'.($photo->mime ?: 'video/mp4').'">'."\n";
		$ret .=	$indent."\t\t\t\t".esc_html__('Your browser does not support HTML5 videos.', 'photonic')."\n";
		$ret .= $indent."\t\t\t".'</video>'."\n";
		$ret .= $indent."\t\t".'</div>'."\n";
		return $ret;
	}

	/**
	 * {@inheritDoc}
	 */
	function get_grid_link($photo, $module) {
		if (!empty($photo->video)) {
			return '#photonic-video-' . $this->get_video_id($photo, $module);
		}
		else {
			return $photo->main_image;
		}
	}
}
