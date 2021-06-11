<?php
namespace Photonic_Plugin\Modules;

use Photonic_Plugin\Components\Stack_Trace;
use WP_Error;

require_once(PHOTONIC_PATH.'/Components/Printable.php');
require_once(PHOTONIC_PATH.'/Components/Stack_Trace.php');
require_once(PHOTONIC_PATH.'/Components/Header.php');
require_once(PHOTONIC_PATH.'/Components/Error.php');

/**
 * Gallery processor class to be extended by individual processors. This class has an abstract method called <code>get_gallery_images</code>
 * that has to be defined by each inheriting processor.
 *
 * This is also where the OAuth support is implemented. The URLs are defined using abstract functions, while a handful of utility functions are defined.
 * Most utility functions have been adapted from the OAuth PHP package distributed here: https://code.google.com/p/oauth-php/.
 *
 */
abstract class Core {
	public $library, $api_key, $api_secret, $provider, $nonce, $oauth_timestamp, $signature_parameters, $link_lightbox_title,
		$oauth_version, $oauth_done, $show_more_link, $is_server_down, $is_more_required, $gallery_index, $bypass_popup, $common_parameters,
		$doc_links, $password_protected, $token, $token_secret, $show_buy_link, $stack_trace;

	protected function __construct() {
		global $photonic_slideshow_library, $photonic_custom_lightbox, $photonic_enable_popup, $photonic_thumbnail_style;
		if ($photonic_slideshow_library != 'custom') {
			$this->library = $photonic_slideshow_library;
		}
		else {
			$this->library = $photonic_custom_lightbox;
		}
		$this->nonce = self::nonce();
		$this->oauth_timestamp = time();
		$this->oauth_version = '1.0';
		$this->show_more_link = false;
		$this->is_server_down = false;
		$this->is_more_required = true;
		$this->gallery_index = 0;
		$this->bypass_popup = empty($photonic_enable_popup) || $photonic_enable_popup == 'off' || $photonic_enable_popup == 'hide';
		$this->common_parameters = [
			'columns'    => 'auto',
			'layout' => !empty($photonic_thumbnail_style) ? $photonic_thumbnail_style : 'square',
			'more' => '',
			'display' => 'in-page',
			'panel' => '',
			'filter' => '',
			'filter_type' => 'include',
			'fx' => 'slide', 	// Splide effects: fade and slide
			'timeout' => 4000, 	// Time between slides in ms
			'speed' => 1000,	// Time for each transition
			'pause' => true,	// Pause on hover
			'strip-style' => 'thumbs',
			'controls' => 'show',
			'popup' => $this->bypass_popup ? 'hide' : $photonic_enable_popup,

			'custom_classes' => '',
			'alignment' => '',
		];
		$this->common_parameters['photo_layout'] = $this->common_parameters['layout'];

		$this->doc_links = [];
		$this->password_protected = esc_html__('This album is password-protected. Please provide a valid password.', 'photonic');
		$this->show_buy_link = false;
		$this->stack_trace = [];
		$this->add_hooks();
	}

	/**
	 * Main function that fetches the images associated with the shortcode. This is implemented by all sub-classes.
	 *
	 * @abstract
	 * @param array $attr
	 */
	abstract public function get_gallery_images($attr = []);

	/**
	 * Generates a nonce for use in signing calls.
	 *
	 * @static
	 * @return string
	 */
	public static function nonce() {
		$mt = microtime();
		$rand = mt_rand();
		return md5($mt . $rand);
	}

	/**
	 * Takes a string of parameters in an HTML encoded string, then returns an array of name-value pairs, with the parameter
	 * name and the associated value.
	 *
	 * @static
	 * @param $input
	 * @return array
	 */
	public static function parse_parameters($input) {
		if (!isset($input) || !$input) return [];

		$pairs = explode('&', $input);

		$parsed_parameters = [];
		foreach ($pairs as $pair) {
			$split = explode('=', $pair, 2);
			$parameter = urldecode($split[0]);
			$value = isset($split[1]) ? urldecode($split[1]) : '';

			if (isset($parsed_parameters[$parameter])) {
				// We have already recieved parameter(s) with this name, so add to the list
				// of parameters with this name
				if (is_scalar($parsed_parameters[$parameter])) {
					// This is the first duplicate, so transform scalar (string) into an array
					// so we can add the duplicates
					$parsed_parameters[$parameter] = [$parsed_parameters[$parameter]];
				}

				$parsed_parameters[$parameter][] = $value;
			}
			else {
				$parsed_parameters[$parameter] = $value;
			}
		}
		return $parsed_parameters;
	}

	function get_header_display($args) {
		if (!isset($args['headers'])) {
			return [
				'thumbnail' => 'inherit',
				'title' => 'inherit',
				'counter' => 'inherit',
			];
		}
		else if (empty($args['headers'])) {
			return [
				'thumbnail' => 'none',
				'title' => 'none',
				'counter' => 'none',
			];
		}
		else {
			$header_array = explode(',', $args['headers']);
			return [
				'thumbnail' => in_array('thumbnail', $header_array) ? 'show' : 'none',
				'title' => in_array('title', $header_array) ? 'show' : 'none',
				'counter' => in_array('counter', $header_array) ? 'show' : 'none',
			];
		}
	}

	function get_hidden_headers($arg_headers, $setting_headers) {
		return [
			'thumbnail' => $arg_headers['thumbnail'] === 'inherit' ? $setting_headers['thumbnail'] : ($arg_headers['thumbnail'] === 'none' ? true : false),
			'title' => $arg_headers['title'] === 'inherit' ? $setting_headers['title'] : ($arg_headers['title'] === 'none' ? true : false),
			'counter' => $arg_headers['counter'] === 'inherit' ? $setting_headers['counter'] : ($arg_headers['counter'] === 'none' ? true : false),
		];
	}

	/**
	 * Wraps an error message in appropriately-styled markup for display in the front-end
	 *
	 * @param $message
	 * @return string
	 */
	function error($message) {
		return "<div class='photonic-error photonic-{$this->provider}-error' id='photonic-{$this->provider}-error-{$this->gallery_index}'>\n\t<span class='photonic-error-icon photonic-icon'>&nbsp;</span>\n\t<div class='photonic-message'>\n\t\t$message\n\t</div>\n</div>\n";
	}

	/**
	 * Retrieves the error messages from a WP_Response object and formats them in a display-ready markup.
	 *
	 * @param WP_Error $response
	 * @param bool $server_msg
	 * @return string
	 */
	function wp_error_message($response, $server_msg = true) {
		$ret = '';
		if ($server_msg) {
			$ret = $this->get_server_error()."<br/>\n";
		}
		if (is_wp_error($response)) {
			$messages = $response->get_error_messages();
			$ret .= '<strong>'.esc_html(sprintf(_n('%s Message:', '%s Messages:', count($messages), 'photonic'), count($messages)))."</strong><br/>\n";
			foreach ($messages as $message) {
				$ret .= $message."<br>\n";
			}
		}
		return $ret;
	}

	function push_to_stack($event) {
		global $photonic_performance_logging;
		if (empty($photonic_performance_logging)) {
			return;
		}

		if (!isset($this->stack_trace[$this->gallery_index])) {
			$stack_trace = new Stack_Trace();
		}
		else {
			$stack_trace = $this->stack_trace[$this->gallery_index];
		}

		$stack_trace->add_to_first_open_event($event);
		$this->stack_trace[$this->gallery_index] = $stack_trace;
	}

	function pop_from_stack() {
		global $photonic_performance_logging;
		if (empty($photonic_performance_logging)) {
			return;
		}

		if (!isset($this->stack_trace[$this->gallery_index])) {
			return;
		}
		else {
			/** @var Stack_Trace $stack_trace */
			$stack_trace = $this->stack_trace[$this->gallery_index];
			$stack_trace->pop_from_first_open_event();
			$this->stack_trace[$this->gallery_index] = $stack_trace;
		}
	}

	protected function get_gallery_url($short_code, $meta) {
		global $photonic_alternative_shortcode, $photonic_gallery_template_page;

		$shortcode_tag = $photonic_alternative_shortcode ?: 'gallery';
		$shortcode_parts = [];
		foreach ($short_code as $attr => $value) {
			if (is_array($value)) {
				continue;
			}
			$shortcode_parts[] = $attr.'="'.esc_attr($value).'"';
		}
		$raw_shortcode = '['.$shortcode_tag.' '.implode(' ', $shortcode_parts).']';

		$gallery_url = add_query_arg([
			'photonic_gallery' => base64_encode($raw_shortcode),
			'photonic_gallery_title' => $meta['title'],
		], get_page_link($photonic_gallery_template_page));
		return $gallery_url;
	}

	function ssl_verify_peer(&$handle) {
		curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, false);
	}

	function get_server_error() {
		return sprintf(esc_html__('There was an error connecting to %s. Please try again later.', 'photonic'), $this->provider);
	}

	/**
	 * Helper execution, implemented by child classes
	 *
	 * @param $args
	 * @return string
	 */
	function execute_helper($args) {
		// Blank method, to be overridden by child classes
		return '';
	}

	function add_hooks() {
		// Blank method, implemented by child classes, if required
	}

	function increment_gallery_index() {
		$this->gallery_index++;
	}
}
