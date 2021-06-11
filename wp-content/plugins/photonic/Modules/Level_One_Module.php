<?php
namespace Photonic_Plugin\Modules;

require_once(PHOTONIC_PATH . '/Components/Photo.php');
require_once(PHOTONIC_PATH . '/Components/Photo_List.php');
require_once(PHOTONIC_PATH . '/Components/Single_Photo.php');

interface Level_One_Module {
	function build_level_1_objects($response, array $shortcode, $module_parameters = [], $options = []);
}
