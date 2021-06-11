<?php
namespace Photonic_Plugin\Components;

use Photonic_Plugin\Layouts\Core_Layout;
use Photonic_Plugin\Modules\Core;

/**
 * Class Single_Photo
 * Represents a standalone photo in Photonic. This can be displayed currently by Flickr, Instagram and Zenfolio. The photo shows up
 * as a full-width image and caption, along with a header if available. The photo can be linked to the source.
 * This is a "Printable" element - it may be returned in the <code>get_gallery_images</code> for the corresponding platform.
 *
 * @package Photonic_Plugin\Components
 */
class Single_Photo implements Printable {
	var $src = '',
		$href = '',
		$title = '',
		$caption = '';

	/**
	 * Single_Photo constructor.
	 * @param string $src
	 * @param string $href
	 * @param string $title
	 * @param string $caption
	 */
	public function __construct($src, $href, $title, $caption) {
		$this->src = $src;
		$this->href = $href;
		$this->title = $title;
		$this->caption = $caption;
	}

	function html(Core $module, Core_Layout $layout = null, $print = false) {
		$ret = $layout->generate_single_photo_markup($this, $module);
		if ($print) {
			echo $ret;
		}
		return $ret;
	}
}