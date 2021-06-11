<?php
namespace Photonic_Plugin\Lightboxes;

require_once('Lightbox.php');

class GLightbox extends Lightbox {
	protected function __construct() {
		$this->library = 'glightbox';
		parent::__construct();
	}

	function get_photo_attributes($photo_data, $module) {
		$out = parent::get_photo_attributes($photo_data, $module);
		if (empty($photo_data['video'])) {
			return $out.' data-type="image"';
		}
		else if (in_array($module->provider, ['google', 'flickr'])) {
			return $out.' data-type="video" data-format="mp4" ';
		}
		else {
			return $out.' data-type="video"';
		}
	}
}