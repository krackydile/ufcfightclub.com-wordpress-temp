<?php
namespace Photonic_Plugin\Components;

use Photonic_Plugin\Layouts\Core_Layout;
use Photonic_Plugin\Modules\Core;

require_once('Header.php');
require_once('Pagination.php');

class Photo_List implements Printable {
	public $photos = [],

		$title_position,
		$row_constraints = [],
		$parent = 'stream',
		$indent = "\t",
		$short_code = [];

	/**
	 * @var Pagination $pagination
	 */
	public $pagination;

	public function __construct(array $short_code) {
		$this->short_code = $short_code;
	}

	function html(Core $module, Core_Layout $layout, $print = false) {
		if (is_a($layout, 'Photonic_Plugin\Layouts\Level_One_Gallery')) {
			return $layout->generate_level_1_gallery($this, $this->short_code, $module);
		}
		return '';
	}
}