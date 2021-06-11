<?php
namespace Photonic_Plugin\Lightboxes;

require_once('Lightbox.php');

class Lightgallery extends Lightbox {
	protected function __construct() {
		$this->library = 'lightgallery';
		parent::__construct();
	}

	function get_photo_attributes($photo_data, $module) {
		$out = parent::get_photo_attributes($photo_data, $module);
		$download = !empty($photo_data['download']) ? 'data-download-url="'.$photo_data['download'].'" ' : '';
		$video = !empty($photo_data['video']) ? ' data-html="#photonic-video-'.$module->provider.'-'.$module->gallery_index.'-'.$photo_data['id'].'" ' : '';
		return $out.' data-sub-html="'.$photo_data['title'].'" '.$video.$download;
	}

	/**
	 * {@inheritDoc}
	 */
	function get_video_markup($photo, $module, $indent) {
		$ret = '';
		$video_id = $module->provider.'-'.$module->gallery_index.'-'.$photo->id;
		$ret .= $indent."\t\t".'<div style="display:none;" id="photonic-video-'.$video_id.'">'."\n";
		$ret .= $indent."\t\t\t".'<video class="lg-video-object lg-html5 photonic" controls preload="none">'."\n";
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
			return '';
		}
		return parent::get_grid_link($photo, $module);
	}
}