<?php 
class WPUniverse{
	public function __construct(){
		// $this->options = fw()->theme->get_options('universe-settings');
		// $this->base = fw_get_db_settings_option('universe_base');
		// $this->api = fw_get_db_settings_option('universe_key');
	}
	public function getLinks(){
		var_dump(fw());
		// var_dump($this->base);
		// var_dump($this->api);
	}
}
$WPUniverse = new WPUniverse();
?>