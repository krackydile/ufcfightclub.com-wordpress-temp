<?php if (!defined('ABSPATH')) {
    die('Direct access forbidden.');
}
define('DISQUS_SLUG', 'carrieunderwood');
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
                echo '<div class="col-lg-4 col-sm-12 col-xs-12">';
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
    <div class="text-center mt-4 mb-5">
        <a href="<?php echo get_bloginfo('wpurl') ?>/events" class="btn btn-outline-light">See More Dates</a>
    </div>
    <?php
}

function event_card($event)
{
    ?>
    <div class="card events-card">
        <div class="card-body">
            <h6 class="card-subtitle mb-3"><?php echo format_date($event->date, 'd F', $event->timezone->tz) ?></h6>
            <div class="card-content">
                <h5 class="card-title mb-3"><a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>"><?php echo $event->venue->name ?></a></h5>
                <h6 class="card-subtitle mb-4 event-venue"><?php echo $event->venue->city ?>
                    , <?php echo $event->venue->state ?></h6>
            </div>
            <?php if ($event->links) { ?>
                <a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>" class="btn btn-primary">Buy Tickets</a>
            <?php } ?>
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
    // Global site tag (gtag.js) - AdWords: 806088113 (The HQ)
    wp_enqueue_script('gatg-js', 'https://www.googletagmanager.com/gtag/js?id=AW-806088113', [], null);
    wp_add_inline_script('gatg-js', "
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-806088113');
  ");
    wp_add_inline_script('gatg-js', "
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-617374-25']);
    _gaq.push(['_setDomainName', '.' + '$host'.replace(/^www\./, '')]);
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
 ");
 ?>
    <!-- Facebook Pixel Code (Sparkart) -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '242074133083433');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=242074133083433&ev=PageView&noscript=1"
    /></noscript>
    <!-- Carrie Underwood (The HQ) Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1822424467809687');
      fbq('track', 'PageView');
      fbq('track', 'ViewContent');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1822424467809687&ev=PageView&noscript=1"
    /></noscript>
    <!-- Twitter Audience Pixel -->
    <script src="//platform.twitter.com/oct.js" type="text/javascript"></script>
    <script type="text/javascript">twttr.conversion.trackPid('ntfiz', { tw_sale_amount: 0, tw_order_quantity: 0 });</script>
    <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=ntfiz&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
    <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=ntfiz&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />
    </noscript>
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
          $url = "https://services.sparkart.net/api/v1/account?key=2366edcf-805b-43bf-b043-9c2f527967d9";
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
