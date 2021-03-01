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
    ?>
    <div class="row">
        <?php
        for ($i = 0; $i <= 2; $i++):
            echo '<div class="col-lg-4 col-sm-12 col-xs-12">';
            event_card();
            echo '</div>';
        endfor;
        ?>
    </div>
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

function event_card()
{
    ?>
    <div class="card events-card">
        <div class="card-body">
            <h6 class="card-subtitle mb-3">November 17, 2020</h6>
            <h5 class="card-title mb-3">My Gift: A Cristmas Special From Carrie Underwood to Debut December 3 on HBO
                Max</h5>
            <h6 class="card-subtitle mb-4 event-venue">Allentown, PA</h6>
            <a href="#" class="btn btn-primary">Buy Tickets</a>
            <a href="#" class="btn btn-outline-primary">Meet & Greet</a>
        </div>
    </div>
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
    wp_enqueue_script('underscore');
    wp_enqueue_script('universe', get_template_directory_uri() . '/js/sparkart-universe-bundle.js', [], '1.0', true);

}

// remove wp version number from scripts and styles
function remove_css_js_version( $src ) {
    if( strpos( $src, '?ver=' ) )
        $src = remove_query_arg( 'ver', $src );
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
