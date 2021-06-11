<?php
namespace Photonic_Plugin\Lightboxes;

require_once('Lightbox.php');

class None extends Lightbox {
	function __construct() {
		$this->library = 'none';
		parent::__construct();
	}

	/**
	 * {@inheritDoc}
	 */
	function get_grid_link($photo, $module) {
		return parent::get_title_link($photo);
	}
}