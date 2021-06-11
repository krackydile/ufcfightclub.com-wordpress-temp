<?php
/**
 * Template Name: Smug Mug
 */

if ($_GET['smugmug'] === 'albums') {
  $url = 'https://api.smugmug.com/api/v2/folder/user/carrieunderwood/Meet-Greet-Photos!albums';
  $query = array(
    '_expandmethod' => 'inline',
    '_config' => '{"expand":{"HighlightImage":{"expand":{"LargestImage":{}}}}}',
    'count' => 100
  );
} elseif ($_GET['smugmug'] === 'images' && $_GET['albumkey']) {
  $url = 'https://api.smugmug.com/api/v2/album/' . $_GET["albumkey"] . '!images';
  $query = array(
    '_expandmethod' => 'inline',
    '_config' => '{"expand":{"LargestImage":{},"Album":{},"ImageSizes":{}}}',
    'count' => 200
  );
} else {
  wp_send_json(null, 404);
}

// TODO: move these to the database
$consumer_key = 'TODO';
$consumer_secret = 'TODO';
$token = 'TODO';
$token_secret = 'TODO';

// https://stackoverflow.com/questions/52785040/generating-oauth-1-signature-in-php
$timestamp = time();
$nonce = md5(rand());
$version = "1.0";
$signatureMethod = "HMAC-SHA1";
$oauth = array_merge($query, array(
  'oauth_consumer_key' => $consumer_key,
  'oauth_nonce' => $nonce,
  'oauth_signature_method' => $signatureMethod,
  'oauth_timestamp' => $timestamp,
  'oauth_token' => $token,
  'oauth_version' => $version
));
ksort($oauth);
$base = 'GET&' . rawurlencode($url) . '&' . rawurlencode(http_build_query($oauth));
$key = rawurlencode($consumer_secret) . '&' . rawurlencode($token_secret);
$signature = rawurlencode(base64_encode(hash_hmac('sha1', $base, $key, true)));

$args = array(
  'headers' => array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => "OAuth oauth_consumer_key=\"{$consumer_key}\",oauth_nonce=\"{$nonce}\",oauth_signature_method=\"{$signatureMethod}\",oauth_timestamp=\"{$timestamp}\",oauth_token=\"{$token}\",oauth_version=\"{$version}\",oauth_signature=\"{$signature}\""
  )
);

$request = wp_remote_get($url . '?' . http_build_query($query), $args);
if (is_wp_error($request)) throw $request;
$data = json_decode(wp_remote_retrieve_body($request));
if (strcasecmp($data->status, 'error') == 0) throw new \Exception(implode(', ', $data->messages));
wp_send_json($data);

?>
