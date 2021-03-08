<?php if ( ! defined( 'ABSPATH' ) ) { die( 'Direct access forbidden.' ); }
/**
 * Filters and Actions
 */

/**
 * Enqueue Google fonts style to admin screen for custom header display.
 * @internal
 */
function _action_theme_admin_fonts() {
	wp_enqueue_style( 'fw-theme-lato', fw_theme_font_url(), array(), '1.0' );
}

add_action( 'admin_print_scripts-appearance_page_custom-header', '_action_theme_admin_fonts' );

if ( ! function_exists( '_action_theme_setup' ) ) : /**
 * Theme setup.
 *
 * Set up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support post thumbnails.
 * @internal
 */ {
	function _action_theme_setup() {

		/*
		 * Make Theme available for translation.
		 */
		load_theme_textdomain( 'unyson', get_template_directory() . '/languages' );

		// This theme styles the visual editor to resemble the theme style.
		add_editor_style( array( 'css/editor-style.css', fw_theme_font_url() ) );

		// Add RSS feed links to <head> for posts and comments.
		add_theme_support( 'automatic-feed-links' );

		// Enable support for Post Thumbnails, and declare two sizes.
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 811, 372, true );

		add_theme_support( 'custom-logo' );
		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption'
		) );

		/*
		 * Enable support for Post Formats.
		 * See http://codex.wordpress.org/Post_Formats
		 */
		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'audio',
			'quote',
			'link',
			'gallery',
		) );

		// Add support for featured content.
		add_theme_support( 'featured-content', array(
			'featured_content_filter' => 'fw_theme_get_featured_posts',
			'max_posts'               => 6,
		) );

		// This theme uses its own gallery styles.
		add_filter( 'use_default_gallery_style', '__return_false' );
        add_image_size('spartkartSquare', 600, 600, true);
		
	}
}
endif;
add_action( 'init', '_action_theme_setup' );

/**
 * Adjust content_width value for image attachment template.
 * @internal
 */
function _action_theme_content_width() {
	if ( is_attachment() && wp_attachment_is_image() ) {
		$GLOBALS['content_width'] = 810;
	}
}

add_action( 'template_redirect', '_action_theme_content_width' );

/**
 * Extend the default WordPress body classes.
 *
 * Adds body classes to denote:
 * 1. Single or multiple authors.
 * 2. Presence of header image.
 * 3. Index views.
 * 4. Full-width content layout.
 * 5. Presence of footer widgets.
 * 6. Single views.
 * 7. Featured content layout.
 *
 * @param array $classes A list of existing body class values.
 *
 * @return array The filtered body class list.
 * @internal
 */
function _filter_theme_body_classes( $classes ) {
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	if ( get_header_image() ) {
		$classes[] = 'header-image';
	} else {
		$classes[] = 'masthead-fixed';
	}

	if ( is_archive() || is_search() || is_home() ) {
		$classes[] = 'list-view';
	}

	if ( function_exists('fw_ext_sidebars_get_current_position') ) {
		$current_position = fw_ext_sidebars_get_current_position();
		if ( in_array( $current_position, array( 'full', 'left' ) )
		     || empty($current_position)
		     || is_page_template( 'page-templates/full-width.php' )
		     || is_page_template( 'page-templates/contributors.php' )
		     || is_attachment()
		) {
			$classes[] = 'full-width';
		}
	} else {
		$classes[] = 'full-width';
	}

	if ( is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'footer-widgets';
	}

	if ( is_singular() && ! is_front_page() ) {
		$classes[] = 'singular';
		global $post;
		if(fw_get_db_post_option($post->id, 'login_switch') == 'yes'){
			$classes[] = 'protected';

		}
		if(is_protected_post_type()){
			$classes[] = 'protected';

		}

	}

	if ( is_front_page() && 'slider' == get_theme_mod( 'featured_content_layout' ) ) {
		$classes[] = 'slider';
	} elseif ( is_front_page() ) {
		$classes[] = 'grid';
	}

	
	return $classes;
}

add_filter( 'body_class', '_filter_theme_body_classes' );

/**
 * Extend the default WordPress post classes.
 *
 * Adds a post class to denote:
 * Non-password protected page with a post thumbnail.
 *
 * @param array $classes A list of existing post class values.
 *
 * @return array The filtered post class list.
 * @internal
 */
function _filter_theme_post_classes( $classes ) {
	if ( ! post_password_required() && ! is_attachment() && has_post_thumbnail() ) {
		$classes[] = 'has-post-thumbnail';
	}

	return $classes;
}

add_filter( 'post_class', '_filter_theme_post_classes' );

/**
 * Create a nicely formatted and more specific title element text for output
 * in head of document, based on current view.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 *
 * @return string The filtered title.
 * @internal
 */
function _filter_theme_wp_title( $title, $sep ) {
	global $paged, $page;

	if ( is_feed() ) {
		return $title;
	}

	// Add the site name.
	$title .= get_bloginfo( 'name', 'display' );

	// Add the site description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title = "$title $sep $site_description";
	}

	// Add a page number if necessary.
	if ( $paged >= 2 || $page >= 2 ) {
		$title = "$title $sep " . sprintf( __( 'Page %s', 'unyson' ), max( $paged, $page ) );
	}

	return $title;
}

add_filter( 'wp_title', '_filter_theme_wp_title', 10, 2 );


/**
 * Flush out the transients used in fw_theme_categorized_blog.
 * @internal
 */
function _action_theme_category_transient_flusher() {
	// Like, beat it. Dig?
	delete_transient( 'fw_theme_category_count' );
}

add_action( 'edit_category', '_action_theme_category_transient_flusher' );
add_action( 'save_post', '_action_theme_category_transient_flusher' );

/**
 * Theme Customizer support
 */
{
	/**
	 * Implement Theme Customizer additions and adjustments.
	 *
	 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @internal
	 */
	function _action_theme_customize_register( $wp_customize ) {
		// Add custom description to Colors and Background sections.
		$wp_customize->get_section( 'colors' )->description           = __( 'Background may only be visible on wide screens.',
			'unyson' );
		$wp_customize->get_section( 'background_image' )->description = __( 'Background may only be visible on wide screens.',
			'unyson' );

		// Add postMessage support for site title and description.
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

		// Rename the label to "Site Title Color" because this only affects the site title in this theme.
		$wp_customize->get_control( 'header_textcolor' )->label = __( 'Site Title Color', 'unyson' );

		// Rename the label to "Display Site Title & Tagline" in order to make this option extra clear.
		$wp_customize->get_control( 'display_header_text' )->label = __( 'Display Site Title &amp; Tagline', 'unyson' );

		// Add the featured content section in case it's not already there.
		$wp_customize->add_section( 'featured_content', array(
			'title'       => __( 'Featured Content', 'unyson' ),
			'description' => sprintf( __( 'Use a <a href="%1$s">tag</a> to feature your posts. If no posts match the tag, <a href="%2$s">sticky posts</a> will be displayed instead.',
					'unyson' ),
				esc_url( add_query_arg( 'tag', _x( 'featured', 'featured content default tag slug', 'unyson' ),
						admin_url( 'edit.php' ) ) ),
				admin_url( 'edit.php?show_sticky=1' )
			),
			'priority'    => 130,
		) );

		// Add the featured content layout setting and control.
		$wp_customize->add_setting( 'featured_content_layout', array(
			'default'           => 'grid',
			'sanitize_callback' => '_fw_theme_sanitize_layout',
		) );

		$wp_customize->add_control( 'featured_content_layout', array(
			'label'   => __( 'Layout', 'unyson' ),
			'section' => 'featured_content',
			'type'    => 'select',
			'choices' => array(
				'grid'   => __( 'Grid', 'unyson' ),
				'slider' => __( 'Slider', 'unyson' ),
			),
		) );
	}

	add_action( 'customize_register', '_action_theme_customize_register' );

	/**
	 * Sanitize the Featured Content layout value.
	 *
	 * @param string $layout Layout type.
	 *
	 * @return string Filtered layout type (grid|slider).
	 * @internal
	 */
	function _fw_theme_sanitize_layout( $layout ) {
		if ( ! in_array( $layout, array( 'grid', 'slider' ) ) ) {
			$layout = 'grid';
		}

		return $layout;
	}

	/**
	 * Bind JS handlers to make Theme Customizer preview reload changes asynchronously.
	 * @internal
	 */
	function _action_theme_customize_preview_js() {
		wp_enqueue_script(
			'fw-theme-customizer',
			get_template_directory_uri() . '/js/customizer.js',
			array( 'customize-preview' ),
			'1.0',
			true
		);
	}

	add_action( 'customize_preview_init', '_action_theme_customize_preview_js' );
}

/**
 * Register widget areas.
 * @internal
 */
function _action_theme_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer Widget Area', 'unyson' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Appears in the footer section of the site.', 'unyson' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}

add_action( 'widgets_init', '_action_theme_widgets_init' );

if ( defined( 'FW' ) ):
	/**
	 * Display current submitted FW_Form errors
	 * @return array
	 */
	if ( ! function_exists( '_action_theme_display_form_errors' ) ):
		function _action_theme_display_form_errors() {
			$form = FW_Form::get_submitted();

			if ( ! $form || $form->is_valid() ) {
				return;
			}

			wp_enqueue_script(
				'fw-theme-show-form-errors',
				get_template_directory_uri() . '/js/form-errors.js',
				array( 'jquery' ),
				'1.0',
				true
			);

			wp_localize_script( 'fw-theme-show-form-errors', '_localized_form_errors', array(
				'errors'  => $form->get_errors(),
				'form_id' => $form->get_id()
			) );
		}
	endif;
	add_action('wp_enqueue_scripts', '_action_theme_display_form_errors');
endif;

// https://rudrastyh.com/wordpress/load-more-posts-ajax.html
// Load more section

function sparkart_load_more_scripts() {
 
	global $wp_query; 
 
	// var_dump('i am here');
	// die();
	echo '<script>' .'const sparkart_loadmore_params = ' . json_encode( array(
		'current_url' => get_permalink(),
	    'ajaxUrl' => admin_url( 'admin-ajax.php' ),
	    'posts' => json_encode( $wp_query->query_vars ), // everything about your loop is here
		'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
		'max_page' => $wp_query->max_num_pages,
		'pageSize' => get_option('posts_per_page')
	) );
	echo '</script>';	
	// $handle = wp_add_inline_script( 'sparkart-main-js', , 'before' );
	// var_dump($handle);
	// die();
 
 	// wp_enqueue_script( 'sparkart-main-js' );
}

 
add_action( 'wp_head', 'sparkart_load_more_scripts' );


add_action('wp_footer', 'add_load_more_script');
/**
 * Custom page loader script
 * https://ihatetomatoes.net/create-custom-preloading-screen/
 */
function add_load_more_script(){
	$join_page_id = fw_get_db_settings_option('protection_page');
	if(!empty($join_page_id)){
		$join_page = get_post($join_page_id[0]);
		$join_page_link = get_permalink($join_page);
	}
	// var_dump($join_page_link);
	// die();
	// var_dump(fw_get_s)
	if ( is_singular() && ! is_front_page() ) {
		$classes[] = 'singular';
		global $post;
		if(fw_get_db_post_option($post->id, 'login_switch') == 'yes' || is_protected_post_type()){
			?>
			<div id="loader-wrapper" data-join="<?php echo $join_page_link ?>">
			    <div id="loader"></div>
			 
			    <div class="loader-section section-left"></div>
			    <div class="loader-section section-right"></div>
			 
			</div>
			<?php

		}

	}
}
function _action_load_more_items(){
	// this is used create stuff here hai
}
/**
 * template used for the load more in the media main page.
 * @return [type] [description]
 */
function template_albums(){
	$template =  '<div class="col-md-3 col-xs-12 col-sm-12">
							<div class="media-display">
								<div class="media-thumbnail">
									<a href="'.get_the_permalink().'">
										
										<img src="'.get_the_post_thumbnail_url(get_the_ID(), 'spartkartSquare').'" class="img-responsive">
									</a>
								</div>
								<div class="media-simple mt-3" style="">
									<div class="album-details text-center">
										<h6>

											'.get_the_title().'
												
										</h6>
										<p>'.fw_count_photo_album(get_post()).' Photo</p>
									</div>
								</div>
							</div>
						</div>';
	return $template;
}
/**
 * Get the template for videos that will be used in the pagination page.
 * @return [type] [description]
 */
function template_videos(){
	$template = '<div class="col-md-3 col-xs-12 col-sm-12">
								<div class="media-display">
									<div class="media-thumbnail">
										<a href="'.get_the_permalink().'">
											
											<img src="'.get_the_post_thumbnail_url(get_the_ID(), 'spartkartSquare').'" class="img-responsive">
										</a>
									</div>
									<div class="media-simple mt-3" style="">
										<div class="album-details text-center">
											<h6>
	
												'.get_the_title().'
													
											</h6>
										</div>
									</div>
								</div>
							</div>';
	return $template;
}
function sparkart_loadPhotoThumbnails_ajax_handler(){
	$album_id = (int) $_GET['album'];
	$album = get_post($album_id);
	if($album != null){

		$photos = fw_get_db_post_option($album_id, 'photo_gallery');
		// var_dump($photos);
		echo json_encode($photos);
	}

	die();
}
add_action('wp_ajax_loadPhotoThumbnails', 'sparkart_loadPhotoThumbnails_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadPhotoThumbnails', 'sparkart_loadPhotoThumbnails_ajax_handler'); // wp_ajax_nopriv_{action}

function sparkart_loadmoremedia_ajax_handler(){
	$args = json_decode( stripslashes( $_GET['query'] ), true );
	$args['paged'] = $_GET['page'] + 1; // we need next page to be loaded
	$args['post_status'] = 'publish';
	$args['post_type'] = stripcslashes($_GET['query']);
	query_posts( $args );
	if( have_posts() ) :
		// run the loop
		while( have_posts() ): the_post();
 			if($args['post_type'] == 'photoalbums'){
 				echo template_albums();
 			}else{
 				echo template_videos();
 			}
 
		endwhile;
 
	endif;
	die; // here we exit the script and even no wp_reset_query() required!
	// var_dump($args);
}
/**
 * Lazy load handler for photo and video albums landing page
 */
add_action('wp_ajax_loadmoremedia', 'sparkart_loadmoremedia_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmoremedia', 'sparkart_loadmoremedia_ajax_handler'); // wp_ajax_nopriv_{action}

function sparkart_loadmore_ajax_handler(){
 
	// prepare our arguments for the query
	$args = json_decode( stripslashes( $_GET['query'] ), true );
	$args['paged'] = $_GET['page'] + 1; // we need next page to be loaded
	$args['post_status'] = 'publish';
 	// var_dump($args);
 	// die();
	// it is always better to use WP_Query but not here
	query_posts( $args );
 
	if( have_posts() ) :
 
		// run the loop
		while( have_posts() ): the_post();
 		?>

 		<?php
			// look into your theme code how the posts are inserted, but you can use your own HTML of course
			// do you remember? - my example is adapted for Twenty Seventeen theme
			get_template_part( 'template-parts/post/content', get_post_format() );
			// for the test purposes comment the line above and uncomment the below one
			// the_title();
 
 
		endwhile;
 
	endif;
	die; // here we exit the script and even no wp_reset_query() required!
}
 
 
 /**
  * Lazy load handler for blog posts
  */
add_action('wp_ajax_loadmore', 'sparkart_loadmore_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'sparkart_loadmore_ajax_handler'); // wp_ajax_nopriv_{action}
function active_image_query_vars( $qvars ) {
    $qvars[] = 'active';
    return $qvars;
}
add_filter( 'query_vars', 'active_image_query_vars' );

/**
 * Add class to nav item when the type is media
 */
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
	if(!empty(fw_get_db_settings_option('media_page'))){
		if(is_protected_post_type() && fw_get_db_settings_option('media_page')[0] ===  $item->object_id){
	        $classes[] = 'active ';
		}
	}
    return $classes;
}
/**
 * Part of the original migration added by the previous dev
 * nochanges required
 */
add_action('init', 'carrieunderwood_fm_add_custom_urls');
function carrieunderwood_fm_add_custom_urls() {
  $dps = '([^/]+)'; // Dynamic path segment ({tag}, {topic})

  // /news => page-news.php (default)
  add_rewrite_rule("^news/$dps/?$", 'index.php?category_name=$matches[2]'); // category.php
  add_rewrite_rule("^news/$dps/$dps/?$", 'index.php?name=$matches[2]', 'top'); // single.php, 'top' prevents redirect to /news/{parent category}/{category}/{post}

  // /events => page-events.php (default)
  // add_rewrite_rule("^(event|contest)s/$dps/$dps/?$", 'index.php?pagename=$matches[1]'); // page-event.php, page-contest.php

  // (no browse page)
  // add_rewrite_rule("^music/$dps/$dps/?$", 'index.php?post_type=release&name=$matches[2]'); // single-release.php

  // /help => page-help.php (default)
  // add_rewrite_rule("^help/$dps/?$", 'index.php?category_name=support'); // category-support.php
  // add_rewrite_rule("^help/$dps/$dps/?$", 'index.php?name=$matches[2]'); // single-category-support.php (see single_template action below)

  // Uncomment the following line when developing the rewrite rules
  // flush_rewrite_rules(); // DO NOT COMMIT THIS LINE
}
/**
 * Apply the following hook to add extra "news" to maintain legacy
 * url consistancy
 */
add_filter('post_link' , 'special_default_blog_slug' , 10 , 3);
function special_default_blog_slug($permalink, $post, $leavename){
	if($post->post_type = 'post'){
		return str_replace(get_bloginfo('wpurl').'/', get_bloginfo('wpurl').'/news/', $permalink);
	}
	return $permalink;
}


add_action( 'pre_get_posts','_filter_mod_main_query' );
function _filter_mod_main_query( $query ) {
	if($query->is_main_query() && $query->get('post_type') == 'music'){
		$query->set('orderby', 'menu_order');
		$query->set('order', 'ASC');
		// $query->query_vars['order'] = 'ASC';

	}
}