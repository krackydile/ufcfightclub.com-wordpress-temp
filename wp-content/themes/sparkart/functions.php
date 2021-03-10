<?php if (!defined('ABSPATH')) {
    die('Direct access forbidden.');
}

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
    $unique_presales = Universe\fetch_resource('events?scope=upcoming&limit=3', '3af65919-3f76-46c8-b905-0f952ffcbd47');
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
                <h5 class="card-title mb-3"><?php echo $event->venue->name ?></h5>
                <h6 class="card-subtitle mb-4 event-venue"><?php echo $event->venue->city ?>
                    , <?php echo $event->venue->state ?></h6>
            </div>
            <?php if ($event->links) { ?>
<!--                <a href="--><?php //echo $event->links[0]->url ?><!--" class="btn btn-primary">Buy Tickets</a>-->
                <a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>" class="btn btn-primary">Buy Tickets</a>
            <?php } ?>
            <a href="<?php echo fw_get_events_detail_page() ?><?php echo add_query_arg( 'event', $event->id ); ?>" class="btn btn-outline-primary">Meet & Greet</a>
        </div>
    </div>
    <?php
}

function event_detail_cards($id)
{
    $event_details = Universe\fetch_resource('events/'.$id, '3af65919-3f76-46c8-b905-0f952ffcbd47');
    if ($event_details->event) {
        ?>
        <div class="col-md-7 col-sm-12">
            <h2 class="large-event-date" style="text-transform: uppercase"><?php echo format_date($event_details->event->date, 'F d, Y', $event_details->event->timezone->tz) ?></h2>
            <div class="event-detail">
                <ul>
                    <li><strong>Venue: </strong><?php echo $event_details->event->venue->name ?></li>
                    <li><strong>City: </strong><?php echo $event_details->event->venue->city ?>, <?php echo $event_details->event->venue->state ?></li>
                    <li><strong>Country: </strong><?php echo $event_details->event->venue->country_name ?></li>
                    <li><strong>Directions: </strong>
                            <a href="<?php echo yahoo_maps_url($event_details->event->venue)?>" target="_blank">Yahoo! Maps</a> /
                            <a href="<?php echo google_maps_url($event_details->event->venue) ?>" target="_blank">Google Maps</a> /
                            <a href="<?php echo map_quest_url($event_details->event->venue) ?>" target="_blank">MapQuest</a>
                        </li>
                </ul>
                <?php foreach ($event_details->event->links as $link) {?>
                <a class="btn btn-primary" href="<?php echo $link->url?>">Buy Tickets</a>
            <?php } ?>
            </div>
        </div>
        <?php  if ($event_details->contests) {?>
        <div class="col-md-5 col-sm-12">
            <div class="panel-contest">
                <div class="contest-header text-center">
                    Contests
                </div>
            <?php foreach ($event_details->contests as $contest) {?>
                <div class="contest-body">
                    <h4 class="contest-title"><?php echo $contest->name?></h4>
                    <p>Contest Ends <?php echo $contest->ends_at?></p>
                    <a class="btn btn-outline-secondary">Enter Now</a>
                </div>
            <?php } ?>
            </div>
        </div>
        <?php } ?>
        <?php
    } else {
        ?>
        <div class="text-center">
            <p style="color:#fff;">No events found.</p>
        </div>
        <?php
    }
    ?>
    <?php
}

function get_universe_links()
{
    // global $WPUniverse;
    // var_dump(fw_get_db_settings_option('universe_base'));
    // $WPUniverse->getLinks();
}


add_action('wp_enqueue_scripts', 'sparkart__load_profile_scripts', 20, 2);
function sparkart__load_profile_scripts()
{
    $url = home_url($_SERVER['REQUEST_URI']);
    $url_parts = parse_url($url);
    $host = $url_parts['port'] ? ($url_parts['host'] . ':' .  $url_parts['port']) : $url_parts['host'];

    wp_enqueue_script('underscore');
    wp_enqueue_script('universe', get_template_directory_uri() . '/js/sparkart-universe-bundle.js', [], '1.0', true);
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
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js' ?>';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
 ");
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
          $url = "https://services.sparkart.net/api/v1/account?key=3af65919-3f76-46c8-b905-0f952ffcbd47";
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
