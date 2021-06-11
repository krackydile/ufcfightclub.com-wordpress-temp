<?php
namespace Photonic_Plugin\Modules;

use Photonic_Plugin\Components\Album_List;
use Photonic_Plugin\Components\Error;
use Photonic_Plugin\Components\Pagination;
use Photonic_Plugin\Components\Photo_List;
use Photonic_Plugin\Core\Photonic;
use Photonic_Plugin\Components\Album;
use Photonic_Plugin\Components\Photo;

require_once('OAuth2.php');
require_once('Level_One_Module.php');
require_once('Level_Two_Module.php');

/**
 * Fetches photos from a user's Google Photos account.
 * Lacks support for dual title / description fields, doesn't provide download URLs, and video support is ambiguous.
 */

class Google_Photos extends OAuth2 implements Level_One_Module {
	var $error_date_format, $refresh_token_valid;
	private static $instance = null;

	protected function __construct() {
		parent::__construct();
		global $photonic_google_client_id, $photonic_google_client_secret, $photonic_google_refresh_token;

//		if (!empty($photonic_google_use_own_keys) || (!empty($photonic_google_client_id) && !empty($photonic_google_client_secret))) {
		if (!empty($photonic_google_client_id) && !empty($photonic_google_client_secret)) {
			$this->client_id = trim($photonic_google_client_id);
			$this->client_secret = trim($photonic_google_client_secret);
		}
/*		else if (empty($photonic_google_use_own_keys)) {
			$this->client_id = '';
			$this->client_secret = '';
		}*/

		$this->provider = 'google';
		$this->oauth_version = '2.0';
		$this->response_type = 'code';
		$this->scope = 'https://www.googleapis.com/auth/photoslibrary.readonly';
		$this->link_lightbox_title = false; //empty($photonic_google_disable_title_link);

		// Documentation
		$this->doc_links = [
			'general' => 'https://aquoid.com/plugins/photonic/google-photos/',
			'photos' => 'https://aquoid.com/plugins/photonic/google-photos/photos/',
			'albums' => 'https://aquoid.com/plugins/photonic/google-photos/albums/',
		];

		$this->error_date_format = esc_html__('Dates must be entered in the format Y/M/D where Y is from 0 to 9999, M is from 0 to 12 and D is from 0 to 31. You entered %s.', 'photonic');
		$this->oauth_done = false;
		$this->authenticate($photonic_google_refresh_token);
	}

	public static function get_instance() {
		if (self::$instance == null) {
			self::$instance = new Google_Photos();
		}
		return self::$instance;
	}

	/**
	 * Main function that fetches the images associated with the shortcode.
	 *
	 * @param array $attr
	 * @return string|array
	 */
	public function get_gallery_images($attr = []) {
		global $photonic_google_refresh_token, $photonic_google_media, $photonic_google_title_caption;
		$this->push_to_stack('Get Gallery Images');

		$attr = array_merge(
			$this->common_parameters,
			[
				'caption' => $photonic_google_title_caption,
				'thumb_size' => '150',
				'main_size' => '1600',
				'tile_size' => '1600',
				'crop_thumb' => 'crop',

				// Google ...
				'count' => 100,
				'media' => $photonic_google_media,
				'video_size' => 'dv',
				'date_filters' => '',
				'content_filters' => '',
				'access' => 'all',
			],
			$attr);
		$attr = array_map('trim', $attr);

		$attr['overlay_size'] = empty($attr['overlay_size']) ? $attr['thumb_size'] : $attr['overlay_size'];
		$attr['overlay_video_size'] = empty($attr['overlay_video_size']) ? $attr['video_size'] : $attr['overlay_video_size'];
		$attr['overlay_crop'] = empty($attr['overlay_crop']) ? $attr['crop_thumb'] : $attr['overlay_crop'];

		if (empty($this->client_id)) {
			$this->pop_from_stack();
			return [new Error(esc_html__('Google Photos Client ID not defined.', 'photonic').Photonic::doc_link($this->doc_links['general']))];
		}
		if (empty($this->client_secret)) {
			$this->pop_from_stack();
			return [new Error(esc_html__('Google Photos Client Secret not defined.', 'photonic').Photonic::doc_link($this->doc_links['general']))];
		}
		if (empty($photonic_google_refresh_token)) {
			$this->pop_from_stack();
			return [new Error(sprintf(esc_html__('Google Photos Refresh Token not defined. Please authenticate from %s.', 'photonic'), '<em>Photonic &rarr; Authentication</em>').Photonic::doc_link($this->doc_links['general']))];
		}
		if (!$this->refresh_token_valid) {
			$this->pop_from_stack();
			$error = sprintf(esc_html__('Google Photos Refresh Token invalid. Please authenticate from %s.', 'photonic'), '<em>Photonic &rarr; Authentication</em>');
			if (!empty($this->auth_error)) {
				$error .= '<br/>'.sprintf(esc_html__('Error encountered during authentication: %s', 'photonic'), '<br/><pre>'.$this->auth_error.'</pre>');
			}
			return [new Error($error.Photonic::doc_link($this->doc_links['general']))];
		}

		if (empty($attr['view'])) {
			$this->pop_from_stack();
			return [new Error(sprintf(esc_html__('The %s parameter is mandatory for the shortcode.', 'photonic'), '<code>view</code>'))];
		}

		$query_urls = [];
		if ($attr['view'] == 'albums') {
			$additional = [];
			if (!empty($attr['count'])) {
				$additional['pageSize'] = intval($attr['count']) > 50 ? 50 : intval($attr['count']);
			}

			if (!empty($attr['next_token'])) {
				$additional['pageToken'] = $attr['next_token'];
			}

			$access = $this->access_all_or_shared($attr);
			if ($access['shared']) {
				$query_urls['https://photoslibrary.googleapis.com/v1/sharedAlbums'] = ['GET' => $additional];
			}
			if ($access['self']) {
				$query_urls['https://photoslibrary.googleapis.com/v1/albums'] = ['GET' => $additional];
			}
		}
		else if ($attr['view'] == 'photos' || $attr['view'] == 'shared-photos') {
			$additional = [];
			if (!empty($attr['album_id'])) {
				$additional['albumId'] = $attr['album_id'];
			}
			else {
				$filters = [];

				$date_parameter = [];
				$range_parameter = [];
				if (!empty($attr['date_filters'])) {
					/*
					 * Structure of $attr['date_filters']: comma-separated list of dates or date ranges.
					 * Each date is represented by Y/M/D, where 0 <= Y <= 9999, 0 <= M <= 12, 0 <= D < 31
					 * Each range is represented as Y/M/D-Y/M/D
					 */
					$date_filters = explode(',', trim($attr['date_filters']));
					foreach($date_filters as $date_filter) {
						$dates = explode('-', trim($date_filter));
						if (count($dates) > 2) {
							$dates = array_slice($dates, 0, 2);
						}
						$range = [];
						foreach ($dates as $idx => $date) {
							$date_parts = explode('/', trim($date));
							if (count($date_parts) != 3) {
								$this->pop_from_stack();
								return [new Error(sprintf($this->error_date_format, $date))];
							}

							if (!is_numeric($date_parts[0]) || $date_parts[0] > 9999 || $date_parts[0] < 0 ||
								!is_numeric($date_parts[1]) || $date_parts[1] > 12 || $date_parts[1] < 0 ||
								!is_numeric($date_parts[2]) || $date_parts[2] > 31 || $date_parts[2] < 0) {
								$this->pop_from_stack();
								return [new Error(sprintf($this->error_date_format, $date))];
							}

							$date_object = [
								'year' => intval($date_parts[0]),
								'month' => intval($date_parts[1]),
								'day' => intval($date_parts[2]),
							];

							if (count($dates) == 1) {
								$date_parameter[] = $date_object;
							}
							else if ($idx == 0) {
								$range['startDate'] = $date_object;
							}
							else {
								$range['endDate'] = $date_object;
							}
						}
						if (!empty($range)) {
							$range_parameter[] = $range;
						}
					}

					$date_filter_parameter = [];
					if (!empty($date_parameter)) {
						$date_filter_parameter['dates'] = $date_parameter;
					}
					if (!empty($range_parameter)) {
						$date_filter_parameter['ranges'] = $range_parameter;
					}
					if (!empty($date_filter_parameter)) {
						$filters['dateFilter'] = $date_filter_parameter;
					}
				}

				if (!empty($attr['content_filters'])) {
					$valid_filters = [
						'NONE' => 'Default content category. This category is ignored if any other category is also listed.',
						'LANDSCAPES' => 'Media items containing landscapes.',
						'RECEIPTS' => 'Media items containing receipts.',
						'CITYSCAPES' =>'Media items containing cityscapes.',
						'LANDMARKS' => 'Media items containing landmarks.',
						'SELFIES' => 'Media items that are selfies.',
						'PEOPLE' => 'Media items containing people.',
						'PETS' => 'Media items containing pets.',
						'WEDDINGS' => 'Media items from weddings.',
						'BIRTHDAYS' => 'Media items from birthdays.',
						'DOCUMENTS' => 'Media items containing documents.',
						'TRAVEL' => 'Media items taken during travel.',
						'ANIMALS' => 'Media items containing animals.',
						'FOOD' => 'Media items containing food.',
						'SPORT' => 'Media items from sporting events.',
						'NIGHT' => 'Media items taken at night.',
						'PERFORMANCES' => 'Media items from performances.',
						'WHITEBOARDS' => 'Media items containing whiteboards.',
						'SCREENSHOTS' => 'Media items that are screenshots.',
						'UTILITY' => 'Media items that are considered to be utility. These include, but are not limited to documents, screenshots, whiteboards etc.',
					];

					/*
					 * Structure of content_filters: C1,C2,-C3,C4,-C5.
					 * The filters are specified as a comma-separated list.
					 * A "-" before the filter's name indicates that the filter should be excluded rather than included.
					 */
					$content_filters = explode(',', $attr['content_filters']);
					$include = $exclude = [];
					foreach ($content_filters as $content_filter) {
						$content_filter = strtoupper($content_filter);
						if (stripos($content_filter, '-') == 0 && array_key_exists(substr($content_filter, 1), $valid_filters)) {
							$exclude[] = substr($content_filter, 1);
						}
						else if (array_key_exists($content_filter, $valid_filters)){
							$include[] = $content_filter;
						}
					}

					$content_filter_parameter = [];
					if (!empty($include)) {
						$content_filter_parameter['includedContentCategories'] = $include;
					}
					if (!empty($exclude)) {
						$content_filter_parameter['excludedContentCategories'] = $exclude;
					}
					if (!empty($content_filter_parameter)) {
						$filters['contentFilter'] = $content_filter_parameter;
					}
				}

				$media_filters = explode(',', $attr['media']);
				$media_filter_parameter = [];
				if (in_array('all', $media_filters)) {
					$media_filter_parameter[] = 'ALL_MEDIA';
				}
				else if (in_array('photos', $media_filters)) {
					$media_filter_parameter[] = 'PHOTO';
				}
				else if (in_array('videos', $media_filters)) {
					$media_filter_parameter[] = 'VIDEO';
				}

				if (!empty($media_filter_parameter)) {
					$filters['mediaTypeFilter'] = ['mediaTypes' => $media_filter_parameter];
				}

				if (!empty($filters)) {
					$additional['filters'] = $filters;
				}
			}

			if (!empty($attr['count']) || !empty($attr['photo_count'])) {
				$additional['pageSize'] = !empty($attr['photo_count']) ? $attr['photo_count'] : $attr['count'];
				$additional['pageSize'] = intval($additional['pageSize']) > 100 ? 100 : intval($additional['pageSize']);
			}
			if (!empty($attr['next_token'])) {
				$additional['pageToken'] = $attr['next_token'];
			}

			$query_urls['https://photoslibrary.googleapis.com/v1/mediaItems:search'] = ['POST' => $additional];
		}

		$out = $this->make_call($query_urls, $attr);
		$this->pop_from_stack();

		if (!empty($this->stack_trace[$this->gallery_index])) {
			$out[] = $this->stack_trace[$this->gallery_index];
		}

		return $out;
	}

	/**
	 * Makes calls to Google with the shortcode parameters.
	 *
	 * @param $query_urls - The URLs to be queried
	 * @param $attr - The shortcode attributes
	 * @return string|array
	 */
	private function make_call($query_urls, $attr) {
		global $photonic_google_refresh_token;
		$this->push_to_stack('Making calls');

		$incremented = false;
		$components = [];
		$access = $this->access_all_or_shared($attr);

		$all_ids = [];
		foreach ($query_urls as $query_url => $method_and_args) {
			$this->push_to_stack("Query $query_url");
			if ($access['self'] && $query_url == 'https://photoslibrary.googleapis.com/v1/sharedAlbums') {
				$defer = true;
			}
			else {
				$defer = false;
			}

			if (!empty($photonic_google_refresh_token) && !empty($this->access_token)) {
				$query_url = add_query_arg('access_token', $this->access_token, $query_url);
			}

			foreach ($method_and_args as $method => $args) {
				$this->push_to_stack('Sending request');
				if (empty($args['filters'])) {
					$call_args = [];
					$call_args['method'] = $method;
					$call_args['body'] = $args;
					$call_args['sslverify'] = PHOTONIC_SSL_VERIFY;
					$response = wp_remote_request($query_url, $call_args);
				}
				else {
					$headers = [];
					$headers[] = 'Accept: application/json';
					$headers[] = 'Content-Type: application/json';

					// This doesn't work for some reason while using 'filters'. Google always responds with an invalid JSON format error.
					// Various options have been tried, including sending 'body' without a json_encode, enclosing the json_encode in '[]' etc.
					// Falling back on cURL for cases where $args have 'filters'
					/*					$response = wp_remote_request($query_url, [
											'method' => 'POST',
											'headers' => $headers,
											'httpversion' => '1.0',
											'body' => json_encode($args),
										]);
					*/

					$ch = curl_init($query_url);
					curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, PHOTONIC_SSL_VERIFY);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // If not set, this prints the output
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					curl_setopt($ch, CURLOPT_HEADER, false);
					curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($args));

					$curl_response = curl_exec($ch);
					curl_close($ch);
					// The following mimics a structure that can be handled by is_wp_error and wp_remote_retrieve_body
					$response = [];
					$response['body'] = $curl_response;
				}
				$this->pop_from_stack();

				if (!is_wp_error($response)) {
					$this->push_to_stack('Processing Response');
					$body = wp_remote_retrieve_body($response);

					if (!$incremented) {
						$incremented = true;
					}

					$output = $this->process_response($body, $attr, $defer, $all_ids);

					if (!is_null($output)) {
						if ($defer && is_array($output)) {
							foreach ($output as $object) {
								$all_ids[] = $object->id;
							}
						}
						else {
							$components[] = $output;
						}
					}

					$this->pop_from_stack();
				}
				else {
					$this->pop_from_stack(); // "Query $query_url"
					$this->pop_from_stack(); // 'Making calls'
					return [new Error($response->get_error_message())];
				}
			}
			$this->pop_from_stack();
		}

		$this->pop_from_stack();
		return $components;
	}

	/**
	 * @param $body
	 * @param $short_code
	 * @param bool|false $deferred
	 * @param array $remove
	 * @return mixed
	 */
	private function process_response($body, $short_code, $deferred = false, $remove = []) {
		global $photonic_google_photo_title_display, $photonic_google_photos_per_row_constraint, $photonic_google_photos_constrain_by_padding,
		       $photonic_google_photos_constrain_by_count, $photonic_google_photo_pop_title_display, $photonic_google_hide_album_photo_count_display;

		if (!empty($body)) {
			$body = json_decode($body);
			$row_constraints = ['constraint-type' => $photonic_google_photos_per_row_constraint, 'padding' => $photonic_google_photos_constrain_by_padding, 'count' => $photonic_google_photos_constrain_by_count];
			$display = $short_code['display'];
			if (isset($body->albums) || isset($body->sharedAlbums)) {
				$albums = isset($body->albums) ? $body->albums : $body->sharedAlbums;

				$pagination = $this->get_pagination($body, $short_code);
				$albums = $this->build_level_2_objects($albums, $short_code, $remove, $pagination);
				if ($deferred) {
					return $albums;
				}

				$album_list = new Album_List($short_code);

				$album_list->albums = $albums;
				$album_list->row_constraints = $row_constraints;
				$album_list->type = 'albums';
				$album_list->singular_type = 'album';
				$album_list->title_position = $photonic_google_photo_title_display;
				$album_list->level_1_count_display = !empty($photonic_google_hide_album_photo_count_display);
				$album_list->pagination = $pagination;

				return $album_list;
			}
			else if (isset($body->mediaItems)){
				if ($display == 'in-page') {
					$title_position = $photonic_google_photo_title_display;
				}
				else {
					$row_constraints = ['constraint-type' => 'padding'];
					$title_position = $photonic_google_photo_pop_title_display;
				}

				$pagination = $this->get_pagination($body, $short_code);

				$photos = $body->mediaItems;
				$photos = $this->build_level_1_objects($photos, $short_code);

				$photo_list = new Photo_List($short_code);
				$photo_list->photos = $photos;
				$photo_list->title_position = $title_position;
				$photo_list->row_constraints = $row_constraints;
				$photo_list->parent = 'album';
				$photo_list->pagination = $pagination;

				return $photo_list;
			}
			else if (isset($body->error)) {
				$err = esc_html__('Failed to get data. Error:', 'photonic')."<br/><code>\n";
				$err .= $body->error->message;
				$err .= "</code><br/>\n";

				return new Error($err);
			}
		}
		else {
			$err = esc_html__('Failed to get data. Error:', 'photonic')."<br/><code>\n";
			$err .= $body;
			$err .= "</code><br/>\n";

			return new Error($err);
		}

		return null;
	}

	function build_level_1_objects($response, array $shortcode, $module_parameters = [], $options = []) {
		$objects = [];
		$sizes = [
			'thumb_size' => [
				'size' => $shortcode['thumb_size'],
				'crop' => $shortcode['crop_thumb'],
			],
			'tile_size' => [
				'size' => $shortcode['tile_size'],
			],
			'main_size' => [
				'size' => $shortcode['main_size'],
			]
		];

		foreach ($response as $photo) {
			$photonic_photo = new Photo();

			$is_video = false;
			if (!empty($photo->mediaMetadata) && !empty($photo->mediaMetadata->video)) {
				$is_video = true;
			}

			$photonic_photo->thumb_size = $photonic_photo->tile_size = $photonic_photo->main_size = [];

			$media = explode(',', $shortcode['media']);
			$videos_ok = in_array('videos', $media) || in_array('all', $media);
			$photos_ok = in_array('photos', $media) || in_array('all', $media);
			if (($is_video && !$videos_ok) || (!$is_video && !$photos_ok)) {
				continue;
			}

			$photonic_photo->id = $photo->id;
			$photonic_photo->thumbnail = $photo->baseUrl . "=w{$shortcode['thumb_size']}-h{$shortcode['thumb_size']}" . ($shortcode['crop_thumb'] == 'crop' ? '-c' : '');
			$photonic_photo->tile_image = $photo->baseUrl . "=w{$shortcode['tile_size']}-h{$shortcode['tile_size']}";
			$photonic_photo->main_image = $photo->baseUrl . "=w{$shortcode['main_size']}-h{$shortcode['main_size']}";

			$this->calculate_sizes($photo, $photonic_photo, $sizes);

			if ($is_video) {
				$photonic_photo->video = $photo->baseUrl."={$shortcode['video_size']}";
				$photonic_photo->mime = $photo->mimeType ?: 'video/mp4';
			}
			else {
				$photonic_photo->download = $photonic_photo->main_image.'-d';
			}

			if (!isset($photo->productUrl)) {
				$photonic_photo->main_page = $photonic_photo->main_image;
			}
			else {
				$photonic_photo->main_page = $photo->productUrl;
			}

			if (!empty($photo->description)) {
				$photonic_photo->title = $photo->description;
			}
			else {
				$photonic_photo->title = '';
			}

			$photonic_photo->alt_title = $photonic_photo->title;
			$photonic_photo->description = $photonic_photo->title;

			$objects[] = $photonic_photo;
		}

		return $objects;
	}

	/**
	 * @param $albums
	 * @param $short_code
	 * @param $remove
	 * @param Pagination $pagination
	 * @return array
	 */
	private function build_level_2_objects($albums, $short_code, $remove, &$pagination) {
		$filter = $short_code['filter'];
		$filters = empty($filter) ? [] : explode(',', $filter);
		$processed = [];

		$objects = [];
		foreach ($albums as $album) {
			if (!empty($filters) && ((!in_array($album->id, $filters) && strtolower($short_code['filter_type']) !== 'exclude') ||
					(in_array($album->id, $filters) && strtolower($short_code['filter_type']) === 'exclude'))) {
				continue;
			}

			if (in_array($album->id, $remove)) {
				continue;
			}

			$object = $this->process_album($album, $short_code);
			if (!empty($object)) {
				$objects[] = $object;
				$processed[] = $album->id;
			}
		}

		global $photonic_google_chain_queries;
		if (!empty($pagination->next_token) && strtolower($short_code['filter_type']) !== 'exclude' && !empty($filters) && count($processed) < count($filters) && !empty($photonic_google_chain_queries)) {
			$additional = [];
			if (!empty($short_code['count'])) {
				$additional['pageSize'] = intval($short_code['count']) > 50 ? 50 : intval($short_code['count']);
			}

			$additional['pageToken'] = $pagination->next_token;

			$access = $this->access_all_or_shared($short_code);
			if ($access['shared']) {
				$query_url = 'https://photoslibrary.googleapis.com/v1/sharedAlbums';
			}
			if ($access['self']) {
				$query_url = 'https://photoslibrary.googleapis.com/v1/albums';
			}

			if (!empty($query_url)) {
				global $photonic_google_refresh_token;
				if (!empty($photonic_google_refresh_token) && !empty($this->access_token)) {
					$query_url = add_query_arg('access_token', $this->access_token, $query_url);
				}

				$call_args = [];
				$call_args['method'] = 'GET';
				$call_args['body'] = $additional;
				$call_args['sslverify'] = PHOTONIC_SSL_VERIFY;
				$response = wp_remote_request($query_url, $call_args);
				if (!is_wp_error($response)) {
					$body = wp_remote_retrieve_body($response);
					$body = json_decode($body);
					$inner_albums = isset($body->albums) ? $body->albums : $body->sharedAlbums;
					if (!empty($body->nextPageToken)) {
						$pagination->next_token = $body->nextPageToken;
					}
					else {
						$pagination = new Pagination();
					}

					$remaining = array_diff($filters, $processed);
					$remaining = implode(',', $remaining);
					$inner_code = $short_code;
					$inner_code['filter'] = $remaining;
					$inner = $this->build_level_2_objects($inner_albums, $inner_code, $remove, $pagination);
					$objects = array_merge($objects, $inner);
				}
			}
		}

		return $objects;
	}

	private function calculate_sizes($photo, &$object, $sizes) {
		if (!empty($photo->mediaMetadata->width) && !empty($photo->mediaMetadata->height)) {
			$original_width = $photo->mediaMetadata->width;
			$original_height = $photo->mediaMetadata->height;
			$aspect_ratio =  $original_width / $original_height;

			foreach ($sizes as $size => $size_value) {
				if (is_numeric($size_value['size']) && max($original_width, $original_height) >= $size_value['size'] && $aspect_ratio > 0) {
					if (!empty($size_value['crop'])) {
						$object->{$size} = [
							'w' => $size_value['size'],
							'h' => $size_value['size'],
						];
					}
					else {
						$object->{$size} = [
							'w' => ($aspect_ratio > 1) ? $size_value['size'] : ($size_value['size'] * $aspect_ratio),
							'h' => ($aspect_ratio < 1) ? $size_value['size'] : ($size_value['size'] / $aspect_ratio),
						];
					}
				}
			}
		}
	}

	/**
	 * @param $album
	 * @param $short_code
	 * @return Album
	 */
	private function process_album($album, $short_code) {
		if (empty($album->coverPhotoBaseUrl)) {
			return null;
		}

		$sizes = [
			'thumb_size' => [
				'size' => $short_code['thumb_size'],
				'crop' => $short_code['crop_thumb'],
			],
			'tile_size' => [
				'size' => $short_code['tile_size'],
			],
		];

		$photonic_album = new Album();

		$internal_short_code = $short_code;
		$internal_short_code['layout'] = empty($short_code['photo_layout']) ? $short_code['layout'] : $short_code['photo_layout'];
		unset($internal_short_code['filter']);
		unset($internal_short_code['filter_type']);
		$internal_short_code['view'] = 'photos';
		$internal_short_code['album_id'] = $album->id;

		$photonic_album->id = "{$album->id}";

		$photonic_album->thumbnail = $album->coverPhotoBaseUrl . "=w{$short_code['thumb_size']}-h{$short_code['thumb_size']}" . ($short_code['crop_thumb'] == 'crop' ? '-c' : '');
		$photonic_album->tile_image = $album->coverPhotoBaseUrl . "=w{$short_code['tile_size']}-h{$short_code['tile_size']}";

		$this->calculate_sizes($album, $photonic_album, $sizes);

		$photonic_album->main_page = '';

		$photonic_album->title = esc_attr($album->title);
		$photonic_album->counter = empty($album->totalMediaItems) ? $album->mediaItemsCount : $album->totalMediaItems;

		$photonic_album->data_attributes = [
			'thumb-size' => $short_code['thumb_size'],
			'photo-count' => empty($short_code['photo_count']) ? $short_code['count'] : $short_code['photo_count'],
			'photo-more' => empty($short_code['photo_more']) ? '' : $short_code['photo_more'],
			'overlay-size' => $short_code['overlay_size'],
			'overlay-crop' => $short_code['overlay_crop'],
			'overlay-video-size' => $short_code['overlay_video_size'],
		];

		global $photonic_gallery_template_page;
		if ($short_code['popup'] == 'page' && !empty($photonic_gallery_template_page) && is_string(get_post_status($photonic_gallery_template_page))) {
			$photonic_album->gallery_url = $this->get_gallery_url($internal_short_code, [
				'title' => $photonic_album->title,
			]);
		}

		return $photonic_album;
	}

	private function access_all_or_shared($short_code) {
		$all_or_shared = [];
		$access = explode(',', $short_code['access']);
		if (empty($access) || (in_array('shared', $access) && in_array('not-shared', $access)) || in_array('all', $access)) {
			$all_or_shared['self'] = true;
			$all_or_shared['shared'] = false;
		}
		else if (count($access) == 1 && in_array('not-shared', $access)) {
			$all_or_shared['self'] = true;
			$all_or_shared['shared'] = true;
		}
		else if (count($access) == 1 && in_array('shared', $access)) {
			$all_or_shared['self'] = false;
			$all_or_shared['shared'] = true;
		}
		return $all_or_shared;
	}

	public function authentication_url() {
		return 'https://accounts.google.com/o/oauth2/auth';
	}

	public function access_token_url() {
		return 'https://accounts.google.com/o/oauth2/token';
	}

	protected function set_token_validity($validity) {
		$this->refresh_token_valid = $validity;
	}

	function execute_helper($args) {
		if (empty($args['album_type']) || !in_array($args['album_type'], ['self', 'shared'])) {
			$album_type = 'self';
		}
		else {
			$album_type = $args['album_type'];
		}
		$query_url = ($album_type == 'self')
			? 'https://photoslibrary.googleapis.com/v1/albums'
			: 'https://photoslibrary.googleapis.com/v1/sharedAlbums';
		$parameters = [
			'access_token' => $this->access_token,
			'pageSize' => 50,
		];
		if (!empty($args['nextPageToken'])) {
			$parameters['pageToken'] = sanitize_text_field($args['nextPageToken']);
		}

		$call_args = [];
		$call_args['method'] = 'GET';
		$call_args['body'] = $parameters;
		$call_args['sslverify'] = PHOTONIC_SSL_VERIFY;
		$response = wp_remote_request($query_url, $call_args);

		if (!is_wp_error($response)) {
			if (isset($response['response']) && isset($response['response']['code'])) {
				if ($response['response']['code'] == 200) {
					$body = json_decode(wp_remote_retrieve_body($response));
					if ((isset($body->albums) && !empty($body->albums) && is_array($body->albums)) ||
						(isset($body->sharedAlbums) && !empty($body->sharedAlbums) && is_array($body->sharedAlbums))) {
						$albums = !empty($body->albums) ? $body->albums : $body->sharedAlbums;

						$ret = "<table>\n";
						$ret .= "\t<tr>\n";
						$ret .= "\t\t<th>Album Title</th>\n";
						$ret .= "\t\t<th>Thumbnail</th>\n";
						$ret .= "\t\t<th>Album ID</th>\n";
						$ret .= "\t\t<th>Media Count</th>\n";
						$ret .= "\t</tr>\n";

						foreach ($albums as $album) {
							$ret .= "\t<tr>\n";
							$ret .= "\t\t<td>{$album->title}</td>\n";
							$ret .= "\t\t<td><img alt='thumbnail' src='{$album->coverPhotoBaseUrl}=w75-h75-c' /></td>\n";
							$ret .= "\t\t<td>{$album->id}</td>\n";
							$ret .= "\t\t<td>{$album->mediaItemsCount}</td>\n";
							$ret .= "\t</tr>\n";
						}

						if (!empty($body->nextPageToken)) {
							$ret .= "\t<tr>\n";
							$ret .= "\t\t<td colspan='4'>\n";
							$ret .= '<input type="button" value="'.esc_attr__('Load More', 'photonic').'" name="photonic-google-album-more" class="photonic-helper-more" data-photonic-token="'.$body->nextPageToken.'" data-photonic-platform="google" data-photonic-access="'.$album_type.'"/>';
							$ret .= "\t\t</td>\n";
							$ret .= "\t</tr>\n";
						}

						$ret .= "</table>\n";

						return '<div class="photonic-helper">'.$ret.'</div>';
					}
					else {
						return '<div class="photonic-helper">'.esc_html__('No albums found', 'photonic').'</div>';
					}
				}
				else {
					Photonic::log($response['response']);
					return '<div class="photonic-helper">'.sprintf(esc_html__('No data returned. Error code %s', 'photonic'), $response['response']['code']).'</div>';
				}
			}
			else {
				Photonic::log($response);
				return '<div class="photonic-helper">'.esc_html__('No data returned. Empty response, or empty error code.', 'photonic').'</div>';
			}
		}
		else {
			return '<div class="photonic-helper">'.$response->get_error_message().'</div>';
		}
	}

	function renew_token($refresh_token, $save) {
		$token = [];
		$error = '';
		$response = Photonic::http($this->access_token_url(), 'POST', [
			'client_id' => $this->client_id,
			'client_secret' => $this->client_secret,
			'refresh_token' => $refresh_token,
			'grant_type' => 'refresh_token'
		]);

		if (!is_wp_error($response)) {
			$token = $this->parse_token($response);
			if (!empty($token)) {
				$token['client_id'] = $this->client_id;
			}
			if ($save) {
				$this->save_token($token);
			}
			if (empty($token)) {
				$error = print_r(wp_remote_retrieve_body($response), true);
			}
		}
		else {
			$error = $response->get_error_message();
		}

		return [$token, $error];
	}

	/**
	 * Not applicable for Google. We make this always return 0.
	 *
	 * @param int $soon_limit
	 * @return int|null
	 */
	function is_token_expiring_soon($soon_limit) {
		return 0;
	}

	/**
	 * @param $body
	 * @param $short_code
	 * @return Pagination
	 */
	private function get_pagination($body, $short_code) {
		$pagination = new Pagination();
		if (!empty($body->nextPageToken)) {
			$pagination->total = 10;
			$pagination->start = 0;
			$pagination->end = 1;
			$pagination->per_page = $short_code;
			$pagination->next_token = $body->nextPageToken;
		}
		return $pagination;
	}
}