<?php
namespace Photonic_Plugin\Lightboxes;

use Photonic_Plugin\Modules\Core;

abstract class Lightbox {
	/** @var array */
	var $class;

	var $supports_video;

	var $library;
	var $default_lightbox_text;

	/**
	 * Lightbox constructor.
	 */
	protected function __construct() {
		require_once(PHOTONIC_PATH.'/Modules/Core.php');
		$this->class = ['photonic-launch-gallery', 'launch-gallery-'.$this->library, $this->library];
		$this->default_lightbox_text = apply_filters('photonic_default_lightbox_text', esc_attr__('View', 'photonic'));
	}

	final public static function get_instance() {
		static $instances = array();
		$called_class = get_called_class();

		if (!isset($instances[$called_class])) {
			$instances[$called_class] = new $called_class();
		}
		return $instances[$called_class];
	}

	/**
	 * @param $rel_id
	 * @param Core $module
	 * @return array
	 */
	function get_gallery_attributes($rel_id, $module) {
		return [
			'class' => $this->class,
			'rel' => ['lightbox-photonic-'.$module->provider.'-stream-'.(empty($rel_id) ? $module->gallery_index : $rel_id)],
			'specific' => [],
		];
	}

	/**
	 * Some lightboxes require some additional attributes for individual photos. E.g. LightGallery requires something to show the title etc.
	 * This method returns such additional information. Not to be confused with <code>get_lightbox_attributes</code>, which
	 * returns information for the gallery as a whole.
	 *
	 * @param $photo_data
	 * @param Core $module
	 * @return string
	 */
	function get_photo_attributes($photo_data, $module) {
		if (!empty($photo_data['video'])) {
			return ' data-photonic-media-type="video" ';
		}
		else {
			return ' data-photonic-media-type="image" ';
		}
	}

	/**
	 * Used to generate markup for video elements in a grid so that they may be processed in a lightbox. If a lightbox handles videos
	 * without any special handling, the default method suffices. But in some cases the lightbox may need to display video as an inline
	 * element, in which case the respective lightbox file overrides this (typically via the Show_Videos_Inline trait).
	 *
	 * @param $photo
	 * @param $module
	 * @param $indent
	 * @return string
	 */
	function get_video_markup($photo, $module, $indent) {
		return '';
	}

	function get_lightbox_title($photo, $module, $title, $alt_title, $target) {
		$url = $this->get_title_link($photo);
		if (empty($title)) {
			$shown_title = $module->link_lightbox_title ? $this->default_lightbox_text : $alt_title;
		}
		else {
			$shown_title = $title;
		}

		if (!empty($shown_title)) {
			if ($module->link_lightbox_title && !empty($url)) {
				$title_markup = esc_attr("<a href='$url' $target>").esc_attr($shown_title).esc_attr("</a>");

				if ($module->show_buy_link && !empty($photo->buy_link)) {
					$title_markup .= esc_attr('<a class="photonic-buy-link" href="' . $photo->buy_link . '" target="_blank" title="' . __('Buy', 'photonic') . '"><div class="icon-buy"></div></a>');
				}
			}
			else {
				$title_markup = esc_attr($shown_title);
			}
		}
		else {
			$title_markup = '';
		}
		return apply_filters('photonic_lightbox_title_markup', $title_markup);
	}

	/**
	 * @param $photo
	 * @param $module
	 * @return mixed
	 */
	function get_grid_link($photo, $module) {
		return $photo->video ?: $photo->main_image;
	}

	/**
	 * @param $photo
	 * @return mixed|string
	 */
	function get_title_link($photo) {
		return $photo->main_page ?: '';
	}
}