<?php
namespace Photonic_Plugin\Components;

use Photonic_Plugin\Layouts\Core_Layout;
use Photonic_Plugin\Modules\Core;

class Grid_Gallery implements Printable {
	public
		$container_id,
		$standard,
		$layout,
		$level,
		$classes = [],
		$item_classes = [],
		$link_classes = [],

		$contents,
		$short_code,
		$content_type;

	/**
	 * Grid_Gallery constructor.
	 * @param Photo_List|Album_List $contents
	 * @param array $short_code
	 * @param Core $module
	 */
	public function __construct($contents, array $short_code, Core $module) {
		$this->contents = $contents;
		$this->short_code = $short_code;

		if (is_a($contents, 'Photonic_Plugin\Components\Photo_List')) {
			$this->level = 1;
			$this->content_type = 'photos';
		}
		else {
			$this->level = 2;
			$this->content_type = $contents->type;
		}

		$this->layout = $short_code['layout'];
		$this->standard = in_array($this->short_code['layout'], ['square', 'circle']);

		$this->item_classes = $this->get_item_classes();
	}

	function get_item_classes() {
		$css = [
			'photonic-level-'.$this->level,
			'photonic-thumb',
		];

		$columns = !empty($this->short_code['columns']) && ($this->layout !== 'random' && $this->layout !== 'mosaic') ? $this->short_code['columns'] : 'auto';
		$row_constraints = $this->contents->row_constraints;

		if (absint($columns)) {
			$css[] = 'photonic-gallery-'.$columns.'c';
		}
		else if ($row_constraints['constraint-type'] == 'padding') {
			$css[] = 'photonic-pad-'.$this->content_type;
		}
		else {
			$css[] = 'photonic-gallery-'.$row_constraints['count'].'c';
		}
		return $css;
	}

	function html(Core $module, Core_Layout $layout, $print = false) {
		// TODO: Implement html() method.
	}
}