<?php
namespace Photonic_Plugin\Components;

use Photonic_Plugin\Layouts\Core_Layout;
use Photonic_Plugin\Modules\Core;

/**
 * Class Header
 * @package Photonic_Plugin\Components
 */
class Header implements Printable {
	var $id,							// Used primarily for Flickr collections, to facilitate expansion
		$title,							// All headers have a title
		$description,					// Some headers have a description
		$thumb_url,						// The URL for the thumbnail to be shown in the header. Exists if the platform provides an album thumbnail
		$page_url,						// The URL for the level 2 or level 3 object represented by the header

		$header_for,					// String - Indicates what type of object is being displayed like gallery / photoset / album etc. This is added to the CSS class.
		$hidden_elements = [],			// Contains the elements that should be hidden from the header display.
		$counters = [],					// Contains counts of the object that the header represents. In most cases this has just one value. Zenfolio objects have multiple values.
		$enable_link,					// Should clicking on the thumbnail / title take you anywhere?
		$display_location = 'in-page',	// Is this header in-page or in the modal?

		$iterate_level_3 = true,		// If this is a level 3 header, this field indicates whether an expansion icon should be shown. This is to improve performance for Flickr collections.
		$layout;						// What layout is this a header for? Also used by Flickr, when the "+" is clicked for a collection

	/**
	 * {@inheritDoc} - a Header
	 */
	function html(Core $module, Core_Layout $layout = null, $print = false) {
		$ret = $layout->generate_header_markup($this, $module);
		if ($print) {
			echo $ret;
		}
		return $ret;
	}
}