<?php
namespace Photonic_Plugin\Lightboxes;

require_once('Lightbox.php');

class Simple_Lightbox_DB extends Lightbox {
	protected function __construct() {
		$this->library = 'simplelightboxdb';
		parent::__construct();
	}

	function get_photo_attributes($photo_data, $module) {
		$out = parent::get_photo_attributes($photo_data, $module);
		return $out.(!empty($photo_data['video']) ? ' data-html5-href="'.$photo_data['video'].'" data-content-type="video"': ' data-content-type="image"');
	}
}