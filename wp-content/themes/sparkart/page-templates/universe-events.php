<?php
/**
 * Template Name: Universe Events
 */

if ($_GET['tab'] === 'upcoming-tour-dates') {
  $endpoint = 'events?scope=upcoming&tags=performance&limit=36';
} elseif ($_GET['tab'] === 'fan-club-pre-sale') {
  $endpoint = 'events?scope=upcoming&tags=unique,generic&limit=36';
} elseif ($_GET['tab'] === 'upcoming-appearances') {
  $endpoint = 'events?scope=upcoming&tags=appearance,tv,radio&limit=36';
} elseif ($_GET['tab'] === 'past-events') {
  $endpoint = 'events?scope=past&order=DESC&limit=36';
} else {
  wp_send_json(null, 404);
}

if ($_GET['pg'] > 1) {
  $endpoint = $endpoint . '&page=' . $_GET['pg'];
}

$data = Universe\fetch_resource($endpoint, fw_get_db_settings_option('universe_key'));
if ($data->events) {
  foreach ($data->events as $event) {
    normalize_universe_event_links($event);
  }
}
wp_send_json($data);

?>
