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
            <h6 class="card-subtitle mb-3"><?php echo format_date($event->date, 'F d, Y', $event->timezone->tz) ?></h6>
            <h5 class="card-title mb-3"><?php echo $event->venue->name ?></h5>
            <h6 class="card-subtitle mb-4 event-venue"><?php echo $event->venue->city ?>
                , <?php echo $event->venue->state ?></h6>
            <?php if ($event->links) { ?>
                <a href="<?php echo $event->links[0]->url ?>" class="btn btn-primary">Buy Tickets</a>
            <?php } ?>
            <a href="#" class="btn btn-outline-primary">Meet & Greet</a>
        </div>
    </div>
    <?php
}

function format_date($date, $format, $timezone = '')
{
    if (is_string($date)) $date = \DateTime::createFromFormat(\DateTime::ISO8601, $date);
    if ($timezone) $date->setTimezone(new \DateTimeZone($timezone));
    return $date->format($format);
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
    wp_enqueue_script('underscore');
    wp_enqueue_script('universe', get_template_directory_uri() . '/js/sparkart-universe-bundle.js', [], '1.0', true);

}

// remove wp version number from scripts and styles
function remove_css_js_version($src)
{
    if (strpos($src, '?ver='))
        $src = remove_query_arg('ver', $src);
    return $src;
}
// add_filter( 'style_loader_src', 'remove_css_js_version', 9999 );
// add_filter( 'script_loader_src', 'remove_css_js_version', 9999 );
