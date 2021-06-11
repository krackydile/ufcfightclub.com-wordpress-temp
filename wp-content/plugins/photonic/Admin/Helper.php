<?php
namespace Photonic_Plugin\Admin;

use Photonic_Plugin\Core\Photonic;
use Photonic_Plugin\Modules\Google_Photos;
use Photonic_Plugin\Modules\SmugMug;
use WP_Error;

require_once('Admin_Page.php');

class Helper extends Admin_Page {
	function render_content() {
		?>
		<form method="post" id="photonic-helper-form">
			<table class="photonic-helper">
				<thead>
				<tr>
					<th class="photonic-helper-header" colspan="2">Flickr</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th class="photonic-helper-row-header" scope="row"><?php esc_html_e('Find your User ID', 'photonic'); ?></th>
					<td class="photonic-helper-area"><?php $this->display_flickr_id_helper(); ?></td>
				</tr>
				<tr>
					<th class="photonic-helper-row-header" scope="row"><?php esc_html_e('Find your Group ID', 'photonic'); ?></th>
					<td class="photonic-helper-area"><?php $this->display_flickr_group_helper(); ?></td>
				</tr>
				</tbody>
			</table>

			<table class="photonic-helper">
				<thead>
				<tr>
					<th class="photonic-helper-header" colspan="2">Google Photos</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th class="photonic-helper-row-header" scope="row"><?php esc_html_e('Find your Album IDs', 'photonic'); ?></th>
					<td class="photonic-helper-area"><?php $this->display_google_photos_album_helper(); ?></td>
				</tr>
				</tbody>
			</table>

			<table class="photonic-helper">
				<thead>
				<tr>
					<th class="photonic-helper-header" colspan="2">SmugMug</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th class="photonic-helper-row-header" scope="row"><?php esc_html_e('Find your Album and Folder IDs', 'photonic'); ?></th>
					<td class="photonic-helper-area"><?php $this->display_smugmug_album_id_helper(); ?></td>
				</tr>
				</tbody>
			</table>

			<table class="photonic-helper">
				<thead>
				<tr>
					<th class="photonic-helper-header" colspan="2">Zenfolio</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th class="photonic-helper-row-header" scope="row"><?php esc_html_e('Categories', 'photonic'); ?></th>
					<td class="photonic-helper-area"><?php $this->display_zenfolio_category_helper(); ?></td>
				</tr>
				</tbody>
			</table>
		</form>
		<?php
	}

	function display_flickr_id_helper() {
		global $photonic_flickr_api_key;
		if (empty($photonic_flickr_api_key)) {
			echo sprintf(esc_html__('Please set up your Flickr API Key under %s', 'photonic'), '<em>Photonic &rarr; Settings &rarr; Flickr &rarr; Flickr Settings</em>');
		}
		else {
			echo '<label>'.esc_html__('Enter your Flickr photostream URL and click "Find"', 'photonic');
			echo '<input type="text" value="https://www.flickr.com/photos/username/" id="photonic-flickr-user" name="photonic-flickr-user"/>';
			echo '</label>';
			echo '<input type="button" value="'.esc_attr__('Find', 'photonic').'" id="photonic-flickr-user-find" class="button button-primary"/>';
			echo '<div class="result">&nbsp;</div>';
		}
	}

	function display_flickr_group_helper() {
		global $photonic_flickr_api_key;
		if (empty($photonic_flickr_api_key)) {
			echo sprintf(esc_html__('Please set up your Flickr API Key under %s', 'photonic'), '<em>Photonic &rarr; Settings &rarr; Flickr &rarr; Flickr Settings</em>');
		}
		else {
			echo '<label>'.esc_html__('Enter your Flickr group URL and click "Find"', 'photonic');
			echo '<input type="text" value="https://www.flickr.com/groups/groupname/" id="photonic-flickr-group" name="photonic-flickr-group"/>';
			echo '</label>';
			echo '<input type="button" value="'.esc_attr__('Find', 'photonic').'" id="photonic-flickr-group-find" class="button button-primary"/>';
			echo '<div class="result">&nbsp;</div>';
		}
	}

	function display_google_photos_album_helper() {
		global $photonic_google_client_id, $photonic_google_client_secret, $photonic_google_refresh_token;
		//global $photonic_google_use_own_keys;
//		if (!empty($photonic_google_use_own_keys) && (empty($photonic_google_client_id) || empty($photonic_google_client_secret))) {
		if (empty($photonic_google_client_id) || empty($photonic_google_client_secret)) {
			echo sprintf(esc_html__('Please set up your Google Client ID and Client Secret under %s', 'photonic'),
				'<em>Photonic &rarr; Settings &rarr; Google Photos &rarr; Google Photos Settings</em>');
		}
		else if (empty($photonic_google_refresh_token)) {
			echo sprintf(esc_html__('Please obtain your Refresh Token and save it under %s', 'photonic'),
				'<em>Photonic &rarr; Settings &rarr; Google Photos &rarr; Google Photos Settings</em>');
		}
		else {
			echo esc_html__("Clicking on the button below will show all albums for the authenticated user.", 'photonic').'<br/>';
			echo '<input type="button" value="'.esc_attr__('Find my albums', 'photonic').'" id="photonic-google-album-find" class="button button-primary"/>';
			echo '<div class="result">&nbsp;</div>';
		}
	}

	function display_smugmug_album_id_helper() {
		global $photonic_smug_api_key;
		if (empty($photonic_smug_api_key)) {
			echo sprintf(esc_html__('Please set up your SmugMug API Key under %s', 'photonic'), '<em>Photonic &rarr; Settings &rarr; SmugMug &rarr; SmugMug Settings</em>');
		}
		else {
			echo '<label>'.esc_html__('Enter your SmugMug username and click "Find"', 'photonic');
			echo '<input type="text" value="username" id="photonic-smugmug-user" name="photonic-smugmug-user"/>';
			echo '</label>';
			echo '<input type="button" value="'.esc_attr__('Find', 'photonic').'" id="photonic-smugmug-user-tree" class="button button-primary"/>';
			echo '<div class="result">&nbsp;</div>';
		}
	}

	function display_zenfolio_category_helper() {
		echo esc_html__('Click "List" to find all available Zenfolio categories.', 'photonic').'<br/>';
		echo '<input type="button" value="'.esc_attr__('List', 'photonic').'" id="photonic-zenfolio-categories-find" class="button button-primary"/>';
		echo '<div class="result">&nbsp;</div>';
	}

	function invoke_helper() {
		if (isset($_POST['helper']) && !empty($_POST['helper'])) {
			$helper = sanitize_text_field($_POST['helper']);
			$photonic_options = get_option('photonic_options');
			switch ($helper) {
				case 'photonic-flickr-user-find':
					$flickr_api_key = $photonic_options['flickr_api_key'];
					$user = isset($_POST['photonic-flickr-user']) ? sanitize_text_field($_POST['photonic-flickr-user']) : '';
					$url = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key='.$flickr_api_key.'&method=flickr.urls.lookupUser&url='.$user;
					$this->execute_query('flickr', $url, 'flickr.urls.lookupUser');
					break;

				case 'photonic-flickr-group-find':
					$flickr_api_key = $photonic_options['flickr_api_key'];
					$group = isset($_POST['photonic-flickr-group']) ? sanitize_text_field($_POST['photonic-flickr-group']) : '';
					$url = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key='.$flickr_api_key.'&method=flickr.urls.lookupGroup&url='.$group;
					$this->execute_query('flickr', $url, 'flickr.urls.lookupGroup');
					break;

				case 'photonic-smugmug-user-tree':
					$smugmug_api_key = $photonic_options['smug_api_key'];
					$user = isset($_POST['photonic-smugmug-user']) ? sanitize_text_field($_POST['photonic-smugmug-user']) : '';
					if (!empty($user)) {
						require_once(PHOTONIC_PATH.'/Modules/SmugMug.php');
						$module = SmugMug::get_instance();

						$config = $module->get_config_object(100);
						$config['expand']['Node'] = [];

						//$api_call = 'https://api.smugmug.com/api/v2/user/' . $user . '?_expand=Node.ChildNodes.ChildNodes.ChildNodes.ChildNodes.ChildNodes';
						$api_call = 'https://api.smugmug.com/api/v2/user/' . $user;
						$args = [
							'APIKey' => $smugmug_api_key,
							'_accept' => 'application/json',
							'_verbosity' => 1,
							'_expandmethod' => 'inline',
							'count' => 20
						];

						$response = Photonic::http($api_call, 'GET', $args);
						if (!is_wp_error($response)) {
							$body = $response['body'];
							$body = json_decode($body);
							if ($body->Code === 200) {
								$body = $body->Response;
								if (isset($body->User) && isset($body->User->Uris) && isset($body->User->Uris->Node)) {
									$node = $body->User->Uris->Node->Uri;
									$node = explode('/', $node);
									$node = array_pop($node);
									$api_call = 'https://api.smugmug.com/api/v2/node/' . $node . '?_config='.json_encode($config);

									if ($module->oauth_done) {
										$args = $module->sign_call($api_call, 'GET', $args);
									}
									else {
										echo sprintf(esc_html__("If you have protected albums, you will have to %1sauthenticate%2s to see the protected albums.", 'photonic'), "<a href='".admin_url('admin.php?page=photonic-auth')."'>", "</a>");
									}
									$response = Photonic::http($api_call, 'GET', $args);
									if (!is_wp_error($response)) {
										$this->process_smugmug_response($response);
									}
									else {
										echo $this->get_wp_errors($response);
									}
								}
							}
						}
						else {
							echo $this->get_wp_errors($response);
						}

					}
					break;

				case 'photonic-google-album-find':
				case 'photonic-google-album-more':
					$url = 'https://photoslibrary.googleapis.com/v1/albums';

					global $photonic_google_refresh_token;
					require_once(PHOTONIC_PATH.'/Modules/Google_Photos.php');
					$module = Google_Photos::get_instance();
					$module->authenticate($photonic_google_refresh_token);
					if (!empty($module->access_token)) {
						$query_args = [
							'access_token' => $module->access_token,
							'pageSize' => 50,
						];
						if (!empty($_POST['nextPageToken'])) {
							$query_args['pageToken'] = $_POST['nextPageToken'];
						}

						$url = add_query_arg(
							$query_args,
							$url);
					}

					$response = wp_remote_request($url, ['sslverify' => PHOTONIC_SSL_VERIFY]);
					if (!is_wp_error($response) && $response['response']['code'] == 200) {
						$response = $response['body'];
						$this->process_google_response($response, !empty($_POST['nextPageToken']));
					}
					else {
						echo esc_html__("Encountered error: ")."<br/>";
						echo $this->get_wp_errors($response);
					}

					break;

				case 'photonic-zenfolio-categories-find':
					$url = 'https://api.zenfolio.com/api/1.8/zfapi.asmx/GetCategories';
					$this->execute_query('zenfolio', $url, 'GetCategories');
					break;
			}
		}
		die();
	}

	function execute_query($where, $url, $method) {
		$response = wp_remote_request($url, ['sslverify' => PHOTONIC_SSL_VERIFY]);
		if (!is_wp_error($response)) {
			if (isset($response['response']) && isset($response['response']['code'])) {
				if ($response['response']['code'] == 200) {
					if (isset($response['body'])) {
						if ($where == 'flickr') {
							$this->execute_flickr_query($response['body'], $method);
						}
						else if ($where == 'zenfolio') {
							$this->execute_zenfolio_query($response['body'], $method);
						}
					}
					else {
						echo '<span class="found-id-text">'.esc_html__('No response from server!', 'photonic').'</span>';
					}
				}
				else {
					echo '<span class="found-id-text">'.$response['response']['message'].'</span>';
				}
			}
			else {
				echo '<span class="found-id-text">'.esc_html__('No response from server!', 'photonic').'</span>';
			}
		}
		else {
			echo $this->get_wp_errors($response);
		}
	}

	function execute_flickr_query($body, $method) {
		$body = json_decode($body);
		if (isset($body->stat) && $body->stat == 'fail') {
			echo '<span class="found-id-text">'.$body->message.'</span>';
		}
		else {
			if ($method == 'flickr.urls.lookupUser') {
				if (isset($body->user)) {
					echo '<span class="found-id-text">'.esc_html__('User ID:', 'photonic').'</span> <span class="found-id"><code>'.$body->user->id.'</code></span>';
				}
			}
			else if ($method == 'flickr.urls.lookupGroup') {
				if (isset($body->group)) {
					echo '<span class="found-id-text">'.esc_html__('Group ID:', 'photonic').'</span> <span class="found-id"><code>'.$body->group->id.'</code></span>';
				}
			}
		}
	}

	function process_smugmug_response($response) {
		$body = $response['body'];
		$body = json_decode($body);

		if ($body->Code === 200) {
			$body = $body->Response;
			if (isset($body->Node)) {
				$node = $body->Node;
				if ($node->Type == 'Folder') {
					$ret = $this->process_smugmug_node($node);
					if (!empty($ret)) {
						$ret = "<table class='photonic-helper-table'>\n".
							"\t<tr>\n".
							"\t<th>Name</th>\n".
							"\t<th>Type</th>\n".
							"\t<th>Thumbnail</th>\n".
							"\t<th>Album Key</th>\n".
							"\t<th>Security Level</th>\n".
							"\t</tr>\n".
							$ret.
							"</table>\n";
						echo $ret;
					}
				}
			}
		}
	}

	function process_smugmug_node($node) {
		$ret = '';
		if ($node->Type == 'Folder') {
			$albums = [];
			$folders = [];
			if (isset($node->Uris->ChildNodes->Node)) {
				$child_nodes = $node->Uris->ChildNodes->Node;
				foreach ($child_nodes as $child) {
					if ($child->Type == 'Album') {
						$albums[] = $child;
					}
					else if ($child->Type == 'Folder') {
						$folders[] = $child;
					}
				}

				foreach ($albums as $album) {
					$ret .= "\t<tr>\n";
					$ret .= "\t\t<td>{$album->Name}</td>\n";
					$ret .= "\t\t<td>Album</td>\n";
					$thumb = isset($album->Uris->NodeCoverImage->Image->ThumbnailUrl) ? $album->Uris->NodeCoverImage->Image->ThumbnailUrl : '';
					$ret .= "\t\t<td>".(empty($thumb) ? '' : "<img src='$thumb' alt='Album thumbnail'/>")."</td>\n";
					$album_key = isset($album->Uris->Album) ? $album->Uris->Album->Uri : '';
					$album_key = explode('/', $album_key);
					$album_key = $album_key[count($album_key) - 1];
					$ret .= "\t\t<td>$album_key</td>\n";
					$ret .= "\t\t<td>{$album->SecurityType}</td>\n";
					$ret .= "\t</tr>\n";
				}

				foreach ($folders as $folder) {
					$ret .= "\t<tr>\n";
					$ret .= "\t\t<td>{$folder->Name}</td>\n";
					$ret .= "\t\t<td>Folder</td>\n";
					$thumb = isset($folder->Uris->NodeCoverImage->Image->ThumbnailUrl) ? $folder->Uris->NodeCoverImage->Image->ThumbnailUrl : '';
					$ret .= "\t\t<td>".(empty($thumb) ? '' : "<img src='$thumb' alt='Folder thumbnail'/>")."</td>\n";
					$ret .= "\t\t<td>{$folder->NodeID}</td>\n";
					$ret .= "\t\t<td>{$folder->SecurityType}</td>\n";
					$ret .= "\t</tr>\n";

					$ret .= $this->process_smugmug_node($folder);
				}
			}
		}
		return $ret;
	}

	function process_google_response($response, $more = false) {
		$response = json_decode($response);
		if (!empty($response->albums) && is_array($response->albums)) {
			$albums = $response->albums;
			if (!$more) {
				echo "<table class='photonic-helper-table'>\n";
				echo "\t<tr>\n";
				echo "\t\t<th>Album Title</th>\n";
				echo "\t\t<th>Thumbnail</th>\n";
				echo "\t\t<th>Album ID</th>\n";
				echo "\t\t<th>Media Count</th>\n";
				echo "\t</tr>\n";
			}

			foreach ($albums as $album) {
				echo "\t<tr>\n";
				echo "\t\t<td>".(empty($album->title)? '' : esc_attr($album->title))."</td>\n";
				echo "\t\t<td><img src='{$album->coverPhotoBaseUrl}=w75-h75-c'  alt='Album thumbnail'/></td>\n";
				echo "\t\t<td>{$album->id}</td>\n";
				echo "\t\t<td>{$album->mediaItemsCount}</td>\n";
				echo "\t</tr>\n";
			}

			if (!empty($response->nextPageToken)) {
				echo "\t<tr>\n";
				echo "\t\t<td colspan='4'>\n";
				echo '<input type="button" value="'.esc_attr__('Load More', 'photonic').'" id="photonic-google-album-more" class="button button-primary" data-photonic-token="'.$response->nextPageToken.'"/>';
				echo "\t\t</td>\n";
				echo "\t</tr>\n";
			}

			if (!$more) {
				echo "</table>\n";
			}
		}
		else {
			esc_html_e("No albums found", 'photonic');
		}
	}

	function execute_zenfolio_query($body, $method) {
		if ($method == 'GetCategories') {
			$response = simplexml_load_string($body);
			if (!empty($response->Category)) {
				$categories = $response->Category;
				echo "<ul class='photonic-scroll-panel'>\n";
				foreach ($categories as $category) {
					echo "<li>{$category->DisplayName} &ndash; {$category->Code}</li>\n";
				}
				echo "</ul>\n";
			}
		}
	}

	/**
	 * @param $response WP_Error
	 * @return string
	 */
	private function get_wp_errors($response) {
		$err = '';
		if (is_wp_error($response)) {
			$messages = $response->get_error_messages();
			$err = '<br/><strong>'.esc_html(sprintf(_n('%s Message:', '%s Messages:', count($messages), 'photonic'),
					count($messages)))."</strong><br/>\n";
			foreach ($messages as $message) {
				$err .= $message . "<br>\n";
			}
		}
		return $err;
	}
}
