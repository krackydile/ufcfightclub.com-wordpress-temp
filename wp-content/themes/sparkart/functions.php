<?php if (!defined('ABSPATH')) {
    die('Direct access forbidden.');
}
define('DISQUS_SLUG', 'BLANK');
/**
 * Theme Includes
 */
require_once get_template_directory() . '/inc/init.php';

/**
 * TGM Plugin Activation
 */
{
    require_once dirname(__FILE__) . '/TGM-Plugin-Activation/class-tgm-plugin-activation.php';

    /** @internal */
    function _action_theme_register_required_plugins()
    {
        tgmpa(array(
            array(
                'name' => 'Unyson',
                'slug' => 'unyson',
                'required' => true,
            ),
        ));

    }

    add_action('tgmpa_register', '_action_theme_register_required_plugins');
}

// 2021-05-21, by Joannic Laborde
// Disable Unyson sessions, they interfere with caching
// https://github.com/ThemeFuse/Unyson/issues/4048
if (!function_exists('_disable_fw_use_sessions')) { add_filter('fw_use_sessions','_disable_fw_use_sessions'); function _disable_fw_use_sessions(){ return false; } }

add_action('wp_head', 'sparkart_ajaxurl');
function sparkart_ajaxurl()
{
    ?>
    <script>
        let currentURL = '<?php echo home_url($_SERVER['REQUEST_URI']); ?>';
    </script><?php
}

function yahoo_maps_url($address) {
    $url = 'http://maps.yahoo.com/maps_result?';
    if ($address->address) $url .= 'addr=' . str_replace(' ', '+', $address->address);
    $url .= '&csz=' . $address->city;
    if ($address->state) $url .= '+' . $address->state;
    if ($address->postalcode) $url .= '+' . $address->postalcode;
    $url .= '&country=' . $address->country;
    return $url;
}

function google_maps_url($address) {
    $url = '';
    if ($address->address) $url .= $address->address . ' ';
    $url .= $address->city . ' ';
    if ($address->state) $url .= $address->state . ' ';
    if ($address->postalcode) $url .= $address->postalcode . ', ';
    $url .= $address->country;
    return 'http://www.google.com/maps?hl=en&q=' . str_replace(' ', '+', $url) . '&ie=UTF8&z=16';
}

function map_quest_url($address) {
    $url = 'http://www.mapquest.com/maps/map.adp?';
    $url .= 'country=' . $address->country;
    if ($address->address) $url .= '&address=' . str_replace(' ', '+', $address->address);
    $url .= '&city=' . $address->city;
    if ($address->state) $url .= '&state=' . $address->state;
    if ($address->postalcode) $url .= '&zipcode=' . $address->postalcode;
    return $url;
}

function format_date($date, $format, $timezone = '')
{
    if (is_string($date)) $date = \DateTime::createFromFormat(\DateTime::ISO8601, $date);
    if ($timezone) $date->setTimezone(new \DateTimeZone($timezone));
    return $date->format($format);
}

function homepage_event_cards()
{
    $unique_presales = Universe\fetch_resource('events?scope=upcoming&limit=3', fw_get_db_settings_option('universe_key'));
    if ($unique_presales->events) {
        ?>
        <div class="row">
            <?php
            foreach ($unique_presales->events as $event):
                echo '<div class="col-lg-12 col-sm-12 col-xs-12 events-card__container">';
                event_card($event);
                echo '</div>';
            endforeach;
            ?>
        </div>
        <?php
    } else {
        ?>
        <div class="text-center">
            <p style="color:#fff;">No events have been scheduled at this time.</p>
        </div>
        <?php
    }
    ?>
    <?php
}

function homepage_more_events()
{
        // var_dump(fw_get_db_settings_option('universe_key'));
    ?>
    <div class="heading__cta">
        <a href="<?php echo get_bloginfo('wpurl') ?>/tour" class="arrow-cta">See All Dates</a>
    </div>
    <?php
}

function event_card($event)
{
    ?>
    <div class="card events-card">
        <div class="card-body">
            <h6 class="card__date"><?php echo format_date($event->date, 'd', $event->timezone->tz) ?><span><?php echo format_date($event->date, 'M Y', $event->timezone->tz) ?></span></h6>
            <div class="card-content">
            <div class="card-info">
                <h5 class="card-title"><a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>"><?php echo $event->venue->name ?></a></h5>
                <h6 class="card-subtitle event-venue"><?php echo $event->venue->city ?>
                    , <?php echo $event->venue->state ?></h6>
            </div>
            <?php if ($event->links) { ?>
                <a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>" class="btn btn-primary">Buy Tickets</a>
            <?php } ?>
            </div>
        <?php if ($event->contests) { ?>
            <a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>" class="btn btn-outline-primary">Meet & Greet</a>
    <?php } ?>
    </div>
    </div>
    <?php
}

function event_detail_cards($id)
{
    $event_details = Universe\fetch_resource('events/'.$id, fw_get_db_settings_option('universe_key'));
    if ($event_details->event) {
	normalize_universe_event_links($event_details->event);
  	$event_contests = Universe\fetch_resource('contests?event_id='.$event_details->event->id, fw_get_db_settings_option('universe_key'));
        ?>
        <div class="col-md-7 col-sm-12">
            <h2 class="large-event-date" style="text-transform: uppercase"><?php echo format_date($event_details->event->date, 'F d, Y', $event_details->event->timezone->tz) ?></h2>
            <div class="event-detail" data-tags="<?php foreach ($event_details->event->tags as $tag) { ?><?php echo $tag ?>,<?php } ?>">
                <ul>
                    <li class="event-detail-venue"><strong>Venue: </strong><?php echo $event_details->event->venue->name ?></li>
                    <li><strong>City: </strong><?php echo $event_details->event->venue->city ?><?php if ($event_details->event->venue->state) { ?>, <?php echo $event_details->event->venue->state ?><?php } ?></li>
                    <li><strong>Country: </strong><?php echo $event_details->event->venue->country_name ?></li>
                    <li><strong>Directions: </strong>
                            <a href="<?php echo yahoo_maps_url($event_details->event->venue)?>" target="_blank">Yahoo! Maps</a> /
                            <a href="<?php echo google_maps_url($event_details->event->venue) ?>" target="_blank">Google Maps</a> /
                            <a href="<?php echo map_quest_url($event_details->event->venue) ?>" target="_blank">MapQuest</a>
                        </li>
                </ul>
                <div><?php echo $event_details->event->description ?></div>
                <?php if ($event_details->event->tickets_upcoming) {?>
                    <h4>Upcoming Ticket Sales</h4>
                    <ul>
                    <?php foreach ($event_details->event->links as $link) {?>
                        <?php if ($link->tickets_upcoming) {?>
                            <li><strong><?php echo $link->name?>: </strong><?php echo format_upcoming_sales_time($link->publish_start, 'F j, Y', $event_details->event->timezone->tz)?></li>
                        <?php } ?>
                    <?php } ?>
                    </ul>
                <?php } ?>
                <div class="event-disclaimers">
                    <?php echo fw_get_db_settings_option('event_disclaimer_content'); ?>
                </div>
                <?php foreach ($event_details->event->links as $link) {?>
                    <?php if ($link->tickets_available) {?>
			<a class="btn btn-primary <?php if ($link->exclusive) echo 'event-link-exclusive'?>" data-id="<?php echo $event_details->event->id?>-<?php echo str_replace('"', '', $link->name)?>" href="<?php echo $link->url?>" target="_blank">Buy <?php echo $link->name?></a>
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
        <?php if ($event_contests->contests) {?>
        <div class="col-md-5 col-sm-12">
            <div class="panel-contest">
                <div class="contest-header text-center">
                    <?php if (in_array("fan party", $event_details->event->tags)) { ?>RSVP<?php } else { ?>Contests<?php } ?>
                </div>
            <?php
            foreach ($event_contests->contests as $contest) {
                ?>
                <div class="contest-body">
                    <h4 class="contest-title"><?php echo $contest->name ?></h4>
                    <?php if($contest->ended) { ?>
                        <strong><?php if (in_array("fan party", $event_details->event->tags)) { ?>RSVP<?php } else { ?>Contest<?php } ?> is finished</strong>
                    <?php } else { ?>
                        <?php
                        $isUpcoming = strtotime($contest->starts_at) > time();
                        if($isUpcoming){
                        ?>
                            <p><?php if (in_array("fan party", $event_details->event->tags)) { ?>RSVP<?php } else { ?>Contest<?php } ?> Starts <?php echo format_date($contest->starts_at, 'n/j/y h:ma T', $contest->timezone->tz) ?></p>
                        <?php } else { ?>
                            <p><?php if (in_array("fan party", $event_details->event->tags)) { ?>RSVP<?php } else { ?>Contest<?php } ?> Ends <?php echo format_date($contest->ends_at, 'n/j/y h:ma T', $contest->timezone->tz) ?></p>
                        <?php } ?>
                       <?php if($contest->running || $isUpcoming) { ?>
                        <a href="/contest-details?contest=<?php echo $contest->id ?>&event=<?php echo $event_details->event->id ?>" class="btn btn-outline-secondary">
                            <?php if (in_array("fan party", $event_details->event->tags)) { ?>RSVP<?php } else { ?>Enter<?php } ?> Now
                        </a>
                       <?php } ?>
                    <?php } ?>
                </div>
            <?php } ?>
            </div>
        </div>
        <?php } ?>
        <?php
    } else {
        ?>
        <div class="text-center">
            <p style="color:#fff;">No event found.</p>
        </div>
        <?php
    }
    ?>
    <?php
}

function normalize_universe_event_links($event) {
  if (!$event->links) return;

  $now         = new \DateTime();
  $event_ended = $event->date && $now > \DateTime::createFromFormat(\DateTime::ISO8601, $event->date)->setTime(23, 59, 59, 999999);

  $event->tickets_upcoming = false;
  $event->tickets_available = false;

  foreach ($event->links as $link) {
    $link->started = $link->publish_start ? $now >= \DateTime::createFromFormat(\DateTime::ISO8601, $link->publish_start) : true;
    $link->ended   = $link->publish_end ? $now > \DateTime::createFromFormat(\DateTime::ISO8601, $link->publish_end) : $event_ended;

    if ($link->status === 'Show') {
      $link->tickets_upcoming = false;
      $link->tickets_available = !$link->ended;
    } else if ($link->status === 'Show On Specific Dates Only') {
      $link->tickets_upcoming = !$link->started;
      $link->tickets_available = $link->started && !$link->ended;
    } else {
      $link->tickets_upcoming = false;
      $link->tickets_available = false;
    }

    if ($link->tickets_upcoming) $event->tickets_upcoming = true;
    if ($link->tickets_available) $event->tickets_available = true;
  }
}

function format_upcoming_sales_time($string, $format, $timezone) {
  $date = \DateTime::createFromFormat(\DateTime::ISO8601, $string);
  $result = format_date($date, $format, $timezone);
  if (strpos($string, 'T00:00') === false) {
    $result .= ' at ' . format_date($date, 'g:ia T', $timezone);
  }
  return $result;
};

function get_universe_links()
{
    // global $WPUniverse;
    // var_dump(fw_get_db_settings_option('universe_base'));
    // $WPUniverse->getLinks();
}


add_action('wp_enqueue_scripts', 'sparkart_load_profile_scripts', 20, 2);
function sparkart_load_profile_scripts()
{
    $url = home_url($_SERVER['REQUEST_URI']);
    $url_parts = parse_url($url);
    $host = $url_parts['port'] ? ($url_parts['host'] . ':' .  $url_parts['port']) : $url_parts['host'];

    wp_enqueue_script('underscore');
    wp_enqueue_script('universe', get_template_directory_uri() . '/js/sparkart-universe-bundle.js', [], date("ymd-Gis", filemtime(get_template_directory() . '/js/sparkart-universe-bundle.js')), true);
 ?>

 <?php
}

// remove wp version number from scripts and styles
function remove_css_js_version($src)
{
    if (strpos($src, '?ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}

function checkPHPLogin(){
    // This is where you run the code and display the output
          $curl = curl_init();
          $url = "https://services.sparkart.net/api/v1/account?key=d828a4cb-f8a7-4bf5-a5bb-5a9eed9c27cb";
          curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

          ));
          $response = curl_exec($curl);
          $err = curl_error($curl);
          curl_close($curl);
          if ($err) {
        //Only show errors while testing
        //echo "cURL Error #:" . $err;
        } else {
        //The API returns data in JSON format, so first convert that to an array of data objects
            $responseObj = json_decode($response);
            var_dump($responseObj);
        }
}
// add_action('init', 'checkPHPLogin');
// add_filter( 'style_loader_src', 'remove_css_js_version', 9999 );
// add_filter( 'script_loader_src', 'remove_css_js_version', 9999 );


// Add Mailchimp to footer
function mailchimp() {
    ?>
    <script type="text/javascript">
      if ( undefined !== window.jQuery ) {
            // Fill in your MailChimp popup settings below.
            // These can be found in the original popup script from MailChimp.
            var mailchimpConfig = {
                baseUrl: 'mc.us17.list-manage.com',
                uuid: '1ac480ebd6c74965f0d24306c',
                lid: '7635f918b5'
            };
            
            var chimpPopupLoader = document.createElement("script");
            chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
            chimpPopupLoader.setAttribute('class', 'chimpPopupLoader');
            chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');
            jQuery('body').append(chimpPopupLoader);

            var chimpPopup = document.createElement("script");
            chimpPopup.setAttribute('class', 'chimpPopup');
            chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

            document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            jQuery(".mailing-list-popup").click(function(e) {
            document.cookie.split("; ").forEach(function(c) { if (c.toLowerCase() == "mcpopupclosed=yes") { 
                jQuery('.chimpPopupLoader').remove();
                jQuery('.chimpPopup').remove();
                jQuery('body').append(chimpPopupLoader);
                document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            } });
            jQuery('body').append(chimpPopup);
            });
            // End MailChimp popup settings.

      }
    </script>
    <?php
    }
    add_action( 'wp_footer', 'mailchimp' );
    
    function mc_jquery() {
        wp_enqueue_script( 'jquery' );
    }
    add_action( 'wp_footer' , 'mc_jquery' );