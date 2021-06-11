<?php
namespace Photonic_Plugin\Components;

use Photonic_Plugin\Layouts\Core_Layout;
use Photonic_Plugin\Modules\Core;

class Error implements Printable {
	var $message;

	/**
	 * Error constructor.
	 * @param String $message
	 */
	public function __construct($message) {
		$this->message = $message;
	}

	/**
	 * {@inheritDoc} - an Error
	 */
	public function html(Core $module, Core_Layout $layout = null, $print = false) {
		$ret = "
<div class='photonic-error photonic-{$module->provider}-error' id='photonic-{$module->provider}-error-{$module->gallery_index}'>
	<span class='photonic-error-icon photonic-icon'>&nbsp;</span>
	<div class='photonic-message'>
		{$this->message}
	</div>
</div>\n";
		if ($print) {
			echo $ret;
		}

		return $ret;
	}
}