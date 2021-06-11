<?php
namespace Photonic_Plugin\Admin\Wizard;

abstract class Source {
	protected $default_under, $default_from_settings, $allowed_image_sizes, $column_options, $provider,
		$error_not_found, $error_mandatory;

	protected function __construct() {
		$this->default_under = esc_html__('Default settings can be configured under: %s', 'photonic');
		$this->default_from_settings = esc_html__('Default from settings', 'photonic');
		$this->allowed_image_sizes = [];
		$this->column_options = [
			'desc' => esc_html__('Number of columns in output', 'photonic'),
			'type' => 'select',
			'options' => [
				'' => '',
				'auto' => esc_html__('Automatic (Photonic calculates the columns)', 'photonic'),
				'1' => 1,
				'2' => 2,
				'3' => 3,
				'4' => 4,
				'5' => 5,
				'6' => 6,
				'7' => 7,
				'8' => 8,
				'9' => 9,
				'10' => 10,
			]
		];

		$this->error_not_found = esc_html__('Not found.', 'photonic');
		$this->error_mandatory = esc_html__('Please fill the mandatory fields. Mandatory fields are marked with a red "*".', 'photonic');
	}

	/**
	 * Gets contents of the second screen for a given provider. The second screen contains the type of content to display for a source.
	 * E.g. "Multiple photos", "Photos in an album" etc.
	 *
	 * @return mixed
	 */
	abstract function get_screen_2();

	/**
	 * Gets contents of the third screen for a given provider. This screen contains the photos, albums etc. resultant from Screen 2.
	 *
	 * @return mixed
	 */
	abstract function get_screen_3();

	/**
	 * Shows the layout selection screen.
	 *
	 * @return mixed
	 */
	abstract function get_screen_4();

	/**
	 * Shows layout-specific options for the gallery.
	 *
	 * @return mixed
	 */
	abstract function get_screen_5();

	/**
	 * Add the thumbnail sizes to the screen for the square, circle and slideshow layouts
	 *
	 * @return mixed
	 */
	abstract function get_square_size_options();

	/**
	 * Add the tile sizes to the screen for the random (justified grid), masonry and mosaic layouts
	 *
	 * @return mixed
	 */
	abstract function get_random_size_options();

	/**
	 * Makes a request to a provider to fetch the contents to be displayed within the Wizard.
	 *
	 * @param $display_type
	 * @param $for
	 * @param $flattened_fields
	 * @return mixed
	 */
	abstract function make_request($display_type, $for, $flattened_fields);

	/**
	 * Parses the response from the provider when then wizard tries to get content from it.
	 *
	 * @param $response
	 * @param $display_type
	 * @param null $url
	 * @param array $pagination
	 * @return mixed
	 */
	abstract function process_response($response, $display_type, $url = null, &$pagination = []);

	/**
	 * @param $display_type
	 * @return mixed
	 */
	abstract function construct_shortcode_from_screen_selections($display_type);

	/**
	 * @return mixed
	 */
	abstract function deconstruct_shortcode_to_screen_selections($input);

	private function get_title_position_options() {
		$ret = [
			'' => $this->default_from_settings,
			'regular' => esc_html__('Normal title display using the HTML "title" attribute', 'photonic'),
			'below' => esc_html__('Below the thumbnail', 'photonic'),
			'tooltip' => esc_html__('Using a JavaScript tooltip', 'photonic'),
			'hover-slideup-show' => esc_html__('Slide up from bottom upon hover', 'photonic'),
			'slideup-stick' => esc_html__('Cover the lower portion always', 'photonic'),
			'none' => esc_html__('No title', 'photonic'),
		];

		return [
			'desc' => esc_html__('How do you want the title?', 'photonic'),
			'type' => 'select',
			'options' => $ret,
			'std' => '',
		];
	}

	function get_slideshow_options() {
		global $photonic_thumbnail_style;
		return [
			'slideshow-style' => [
				'desc' => esc_html__('Slideshow display style', 'photonic'),
				'type' => 'image-select',
				'options' => [
					'strip-below' => esc_html__('Thumbnail strip or buttons below slideshow', 'photonic'),
					'strip-above' => esc_html__('Thumbnail strip above slideshow', 'photonic'),
					'strip-right' => esc_html__('OBSOLETE - Thumbnail strip to the right of slideshow - will now default to a strip below the slides', 'photonic'),
					'no-strip' => esc_html__('No thumbnails or buttons for the slideshow', 'photonic'),
				],
				'std' => $photonic_thumbnail_style,
			],
			'strip-style' => [
				'desc' => esc_html__('Thumbnails or buttons for the strip?', 'photonic'),
				'type' => 'image-select',
				'options' => [
					'thumbs' => esc_html__('Thumbnails', 'photonic'),
					'button' => esc_html__('Buttons', 'photonic'),
				],
				'hint' => esc_html__('If you choose "Buttons" those are only shown below the slideshow.', 'photonic'),
				'std' => 'thumbs',
			],
			'controls' => [
				'desc' => esc_html__('Slideshow Controls', 'photonic'),
				'type' => 'select',
				'options' => [
					'hide' => esc_html__('Hide', 'photonic'),
					'show' => esc_html__('Show', 'photonic'),
				],
				'std' => 'show',
				'hint' => esc_html__('Shows Previous and Next buttons on the slideshow.', 'photonic'),
			],
			'fx' => [
				'desc' => esc_html__('Slideshow Effects', 'photonic'),
				'type' => 'select',
				'options' => [
					'fade' => esc_html__('Fade', 'photonic'),
					'slide' => esc_html__('Slide', 'photonic'),
				],
				'hint' => esc_html__('Determines if a photo in a slideshow should fade in or slide in.', 'photonic')
			],
			'timeout' => [
				'desc' => esc_html__('Time between slides in ms', 'photonic'),
				'type' => 'text',
				'std' => '',
				'hint' => esc_html__('Please enter numbers only', 'photonic')
			],
			'speed' => [
				'desc' => esc_html__('Time for each transition in ms', 'photonic'),
				'type' => 'text',
				'std' => '',
				'hint' => esc_html__('How fast do you want the fade or slide effect to happen?', 'photonic')
			],
			'pause' => [
				'desc' => esc_html__('Pause upon hover?', 'photonic'),
				'type' => 'select',
				'options' => [
					'0' => esc_html__('No', 'photonic'),
					'1' => esc_html__('Yes', 'photonic'),
				],
				'std' => '1',
				'hint' => esc_html__('Should the slideshow pause when you hover over it?', 'photonic')
			],
			'columns' => [
				'desc' => esc_html__('Number of columns in slideshow', 'photonic'),
				'type' => 'select',
				'options' => [
					'' => '',
					'1' => 1,
					'2' => 2,
					'3' => 3,
					'4' => 4,
					'5' => 5,
					'6' => 6,
					'7' => 7,
					'8' => 8,
					'9' => 9,
					'10' => 10,
				],
				'hint' => esc_html__('Pick > 1 for a carousel', 'photonic'),
			],
			'title_position' => $this->get_title_position_options(),
		];
	}

	function get_square_layout_options() {
		return [
			'columns' => $this->column_options,
			$this->provider => $this->get_square_size_options(),
			'title_position' => $this->get_title_position_options(),
			'load_mode' => $this->get_load_mode_options(),
		];
	}

	function get_random_layout_options() {
		return [
			$this->provider => $this->get_random_size_options(),
			'title_position' => $this->get_title_position_options(),
			'load_mode' => $this->get_load_mode_options(),
			'layout_engine' => [
				'desc' => esc_html__('Gallery layout processing mode', 'photonic'),
				'type' => 'select',
				'options' => [
					'' => $this->default_from_settings,
					'css' => esc_attr__('Use CSS to render the gallery unless unavoidable.', 'photonic'),
					'js' => esc_attr__('Use JS to render the gallery.', 'photonic'),
				],
				'hint' => sprintf($this->default_under, '<em>Photonic &rarr; Settings &rarr; &lt;Platform&gt; &rarr; &lt;Platform&gt; Settings &rarr; Layout Processing Mode</em>'),
			],
		];
	}

	function get_column_options() {
		return $this->column_options;
	}

	/**
	 * @return array
	 */
	private function get_load_mode_options() {
		global $photonic_load_mode;
		return [
			'desc' => esc_html__('Gallery loading mode', 'photonic'),
			'type' => 'select',
			'options' => [
				'' => $this->default_from_settings . ' - ' . $photonic_load_mode,
				'php' => esc_attr__('PHP Mode – Gallery markup is generated by your server before your page is sent to the browser.', 'photonic'),
				'js' => esc_attr__('JavaScript Mode – Gallery markup is generated by your server after your page is sent to the browser.', 'photonic'),
			],
			'hint' => esc_html__('You can configure Photonic to generate the galleries as a part of your page generation (PHP mode), or after your page has generated and rendered on the site user\'s browser (JS mode). The PHP mode makes your galleries crawlable by search engines, and the JS mode helps your page load faster (the gallery shows up once it is ready). The JS mode helps if you want to use caching plugins with Google Photos setups.', 'photonic'),
		];
	}
}