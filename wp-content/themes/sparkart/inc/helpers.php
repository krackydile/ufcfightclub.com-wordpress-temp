<?php if ( ! defined( 'ABSPATH' ) ) { die( 'Direct access forbidden.' ); }
/**
 * Helper functions and classes with static methods for usage in theme
 */

/**
 * Register Lato Google font.
 *
 * @return string
 */
function fw_theme_font_url() {
	$font_url = '';
	/*
	 * Translators: If there are characters in your language that are not supported
	 * by Lato, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Lato font: on or off', 'unyson' ) ) {
		$font_url = add_query_arg( 'family', urlencode( 'Lato:300,400,700,900,300italic,400italic,700italic' ),
			"//fonts.googleapis.com/css" );
	}

	return $font_url;
}

/**
 * Getter function for Featured Content Plugin.
 *
 * @return array An array of WP_Post objects.
 */
function fw_theme_get_featured_posts() {
	/**
	 * @param array|bool $posts Array of featured posts, otherwise false.
	 */
	return apply_filters( 'fw_theme_get_featured_posts', array() );
}

/**
 * A helper conditional function that returns a boolean value.
 *
 * @return bool Whether there are featured posts.
 */
function fw_theme_has_featured_posts() {
	return ! is_paged() && (bool) fw_theme_get_featured_posts();
}

if ( ! function_exists( 'fw_theme_the_attached_image' ) ) : /**
 * Print the attached image with a link to the next attached image.
 */ {
	function fw_theme_the_attached_image() {
		$post = get_post();
		/**
		 * Filter the default attachment size.
		 *
		 * @param array $dimensions {
		 *     An array of height and width dimensions.
		 *
		 * @type int $height Height of the image in pixels. Default 810.
		 * @type int $width Width of the image in pixels. Default 810.
		 * }
		 */
		$attachment_size     = apply_filters( 'fw_theme_attachment_size', array( 810, 810 ) );
		$next_attachment_url = wp_get_attachment_url();

		/*
		 * Grab the IDs of all the image attachments in a gallery so we can get the URL
		 * of the next adjacent image in a gallery, or the first image (if we're
		 * looking at the last image in a gallery), or, in a gallery of one, just the
		 * link to that image file.
		 */
		$attachment_ids = get_posts( array(
			'post_parent'    => $post->post_parent,
			'fields'         => 'ids',
			'numberposts'    => - 1,
			'post_status'    => 'inherit',
			'post_type'      => 'attachment',
			'post_mime_type' => 'image',
			'order'          => 'ASC',
			'orderby'        => 'menu_order ID',
		) );

		// If there is more than 1 attachment in a gallery...
		if ( count( $attachment_ids ) > 1 ) {
			foreach ( $attachment_ids as $attachment_id ) {
				if ( $attachment_id == $post->ID ) {
					$next_id = current( $attachment_ids );
					break;
				}
			}

			// get the URL of the next image attachment...
			if ( $next_id ) {
				$next_attachment_url = get_attachment_link( $next_id );
			} // or get the URL of the first image attachment.
			else {
				$next_attachment_url = get_attachment_link( array_shift( $attachment_ids ) );
			}
		}

		printf( '<a href="%1$s" rel="attachment">%2$s</a>',
			esc_url( $next_attachment_url ),
			wp_get_attachment_image( $post->ID, $attachment_size )
		);
	}
}
endif;

if ( ! function_exists( 'fw_theme_list_authors' ) ) : /**
 * Print a list of all site contributors who published at least one post.
 */ {
	function fw_theme_list_authors() {
		$contributor_ids = get_users( array(
			'fields'  => 'ID',
			'orderby' => 'post_count',
			'order'   => 'DESC',
			'who'     => 'authors',
		) );

		foreach ( $contributor_ids as $contributor_id ) :
			$post_count = count_user_posts( $contributor_id );

			// Move on if user has not published a post (yet).
			if ( ! $post_count ) {
				continue;
			}
			?>

			<div class="contributor">
				<div class="contributor-info">
					<div class="contributor-avatar"><?php echo get_avatar( $contributor_id, 132 ); ?></div>
					<div class="contributor-summary">
						<h2 class="contributor-name"><?php echo get_the_author_meta( 'display_name',
								$contributor_id ); ?></h2>

						<p class="contributor-bio">
							<?php echo get_the_author_meta( 'description', $contributor_id ); ?>
						</p>
						<a class="button contributor-posts-link"
						   href="<?php echo esc_url( get_author_posts_url( $contributor_id ) ); ?>">
							<?php printf( _n( '%d Article', '%d Articles', $post_count, 'unyson' ), $post_count ); ?>
						</a>
					</div>
					<!-- .contributor-summary -->
				</div>
				<!-- .contributor-info -->
			</div><!-- .contributor -->

		<?php
		endforeach;
	}
}
endif;

/**
 * Custom template tags
 */
{
	if ( ! function_exists( 'fw_theme_paging_nav' ) ) : /**
	 * Display navigation to next/previous set of posts when applicable.
	 */ {
		function fw_theme_paging_nav( $wp_query = null ) {

			if ( ! $wp_query ) {
				$wp_query = $GLOBALS['wp_query'];
			}

			// Don't print empty markup if there's only one page.

			if ( $wp_query->max_num_pages < 2 ) {
				return;
			}

			$paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
			$pagenum_link = html_entity_decode( get_pagenum_link() );
			$query_args   = array();
			$url_parts    = explode( '?', $pagenum_link );

			if ( isset( $url_parts[1] ) ) {
				wp_parse_str( $url_parts[1], $query_args );
			}

			$pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
			$pagenum_link = trailingslashit( $pagenum_link ) . '%_%';

			$format = $GLOBALS['wp_rewrite']->using_index_permalinks() && ! strpos( $pagenum_link,
				'index.php' ) ? 'index.php/' : '';
			$format .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit( 'page/%#%',
				'paged' ) : '?paged=%#%';

			// Set up paginated links.
			$links = paginate_links( array(
				'base'      => $pagenum_link,
				'format'    => $format,
				'total'     => $wp_query->max_num_pages,
				'current'   => $paged,
				'mid_size'  => 1,
				'add_args'  => array_map( 'urlencode', $query_args ),
				'prev_text' => __( '&larr; Previous', 'unyson' ),
				'next_text' => __( 'Next &rarr;', 'unyson' ),
			) );

			if ( $links ) :

				?>
				<nav class="navigation paging-navigation" role="navigation">
					<h1 class="screen-reader-text"><?php _e( 'Posts navigation', 'unyson' ); ?></h1>

					<div class="pagination loop-pagination">
						<?php echo $links; ?>
					</div>
					<!-- .pagination -->
				</nav><!-- .navigation -->
			<?php
			endif;
		}
	}
	endif;

	if ( ! function_exists( 'fw_theme_post_nav' ) ) : /**
	 * Display navigation to next/previous post when applicable.
	 */ {
		function fw_theme_post_nav() {
			// Don't print empty markup if there's nowhere to navigate.
			$previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '',
				true );
			$next     = get_adjacent_post( false, '', false );

			if ( ! $next && ! $previous ) {
				return;
			}

			?>
			<nav class="navigation post-navigation" role="navigation">
				<h1 class="screen-reader-text"><?php _e( 'Post navigation', 'unyson' ); ?></h1>

				<div class="nav-links">
					<?php
					if ( is_attachment() ) :
						previous_post_link( '%link',
							__( '<span class="meta-nav">Published In</span>%title', 'unyson' ) );
					else :
						previous_post_link( '%link',
							__( '<span class="meta-nav">Previous Post</span>%title', 'unyson' ) );
						next_post_link( '%link', __( '<span class="meta-nav">Next Post</span>%title', 'unyson' ) );
					endif;
					?>
				</div>
				<!-- .nav-links -->
			</nav><!-- .navigation -->
		<?php
		}
	}
	endif;

	if ( ! function_exists( 'fw_theme_posted_on' ) ) : /**
	 * Print HTML with meta information for the current post-date/time and author.
	 */ {
		function fw_theme_posted_on() {
			if ( is_sticky() && is_home() && ! is_paged() ) {
				echo '<span class="featured-post">' . __( 'Sticky', 'unyson' ) . '</span>';
			}

			// Set up and print post meta information.
			printf( '<span class="entry-date"><a href="%1$s" rel="bookmark"><time class="entry-date" datetime="%2$s">%3$s</time></a></span> <span class="byline"><span class="author vcard"><a class="url fn n" href="%4$s" rel="author">%5$s</a></span></span>',
				esc_url( get_permalink() ),
				esc_attr( get_the_date( 'c' ) ),
				esc_html( get_the_date() ),
				esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
				get_the_author()
			);
		}
	}
	endif;

	/**
	 * Find out if blog has more than one category.
	 *
	 * @return boolean true if blog has more than 1 category
	 */
	function fw_theme_categorized_blog() {
		if ( false === ( $all_the_cool_cats = get_transient( 'fw_theme_category_count' ) ) ) {
			// Create an array of all the categories that are attached to posts
			$all_the_cool_cats = get_categories( array(
				'hide_empty' => 1,
			) );

			// Count the number of categories that are attached to the posts
			$all_the_cool_cats = count( $all_the_cool_cats );

			set_transient( 'fw_theme_category_count', $all_the_cool_cats );
		}

		if ( 1 !== (int) $all_the_cool_cats ) {
			// This blog has more than 1 category so fw_theme_categorized_blog should return true
			return true;
		} else {
			// This blog has only 1 category so fw_theme_categorized_blog should return false
			return false;
		}
	}

	/**
	 * Display an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index
	 * views, or a div element when on single views.
	 */
	function fw_theme_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		$current_position = false;
		if (function_exists('fw_ext_sidebars_get_current_position')) {
			$current_position = fw_ext_sidebars_get_current_position();
		}



		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php
				if ( ( in_array( $current_position,
						array( 'full', 'left' ) ) || is_page_template( 'page-templates/full-width.php' )
					|| empty($current_position)
				)
				) {
					the_post_thumbnail( 'fw-theme-full-width' );
				} else {
					the_post_thumbnail();
				}
				?>
			</div>

		<?php else : ?>

			<a class="post-thumbnail" href="<?php the_permalink(); ?>">
				<?php
				if ( ( in_array( $current_position,
						array( 'full', 'left' ) ) || is_page_template( 'page-templates/full-width.php' ) )
						|| empty($current_position)
				) {
					the_post_thumbnail( 'fw-theme-full-width' );
				} else {
					the_post_thumbnail();
				}
				?>
			</a>

		<?php endif; // End is_singular()
	}
}

function fw_print_custom_logo(){
	$custom_logo_id = get_theme_mod( 'custom_logo' );
	$custom_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );
	echo '<img src="' . esc_url( $custom_logo_url ) . '" alt="" class="custom-logo">';
}
function fw_get_navigation(){
	if(is_front_page()){
		echo 'return frontpage menu';
	}else{
		echo 'return nbormal menu';
	}
}
function fw_get_option_image_url($option_id){
	$image = fw_get_db_settings_option($option_id);
	if(is_array($image)){
		return $image['url'];
	}
	return null;
	
}
function fw_get_social_list($args = []){
	// Set default Class for
	// ul(parent_class) and li(item_class)
	$defaults = [
		'parent_class' => 'list-group list-group-horizontal list-social-handles',
		'item_class' => 'list-group-item'
	];
	// merge default with the provided attributes
	$args = array_merge($defaults, $args);
	// set template for li
	$list_template = '<li class="'.$args['item_class'].'"><a href="%s" ><i class="%s"></i></a></li>';
	// declare empty html 
	$list = '';
	// find the social handles from the general settings
	$options = fw_get_db_settings_option('social_handles');
	if(!empty($options)){
		foreach($options as $handle){
			$icon_class = '';
			if(!empty($handle['social_icon'])){

				$icon_class = $handle['social_icon']['icon-class'];
			}
			$list .= sprintf($list_template, $handle['social_url'], $icon_class);
		}
	}
	return '<ul class="'.$args['parent_class'].'">'.$list.'</ul>';
	
}
function fw_print_cta_buttons($options){
	$template = '<a href="%s" class="btn %s ">
								<span>
									
									%s
								</span>
							</a>';
	if(is_array($options)){
		echo '<div class="cta-buttons">';
		foreach($options as $option){
			echo sprintf($template, $option['cta_url'], $option['cta_style'], $option['cta_text']);
		}
		echo '</div>';
	}
	

							
		
}
/**
 * Generate a pill id for news categories
 * @param  [type] $category [description]
 * @return [type]           [description]
 */
function pill_id($category){
	return $category->slug.'-pill';
}
/**
 * Generate the target id href for tab news container
 * @param  [type] $category [description]
 * @return [type]           [description]
 */
function target_id($category){
	return $category->slug.'-'.$category->taxonomy;
}
function is_active_pill($index){
	return '';
	return ($index === 0) ? 'active' : '';
}
function fw_get_pills_template($type){
	if($type == 'pills'){
		return '<li class="nav-item"><a class="nav-link %s" id="%s" data-toggle="pill" href="#%s" role="tab" aria-controls="pills-home" aria-selected="true">%s</a></li>';
	}
	return '<li class="nav-item"><a class="nav-link %s" id="%s" href="%s">%s</a></li>';
}
/**
 * Print all the selected categories as tabs
 * @param  [type] $categories [description]
 * @return [type]             [description]
 */
function fw_get_selected_categories_pills($categories = null, $type = 'pills'){
	// set template
	$template = fw_get_pills_template($type);
	
	// $template = '<li class="nav-item"><a class="nav-link %s" id="%s" data-toggle="pill" href="#%s" role="tab" aria-controls="pills-home" aria-selected="true">%s</a></li>';
	
	// find if the categories attribute is null and return
	
	if(!is_array($categories) || $categories == null) return ;
	// loop over the categories attribute
	foreach($categories as $key => $category_id){
		// find the category 
		$category = get_category($category_id);
		// print html with replaced values
		echo sprintf($template, 
						is_active_pill($key),
						pill_id($category),
						target_id($category),
						$category->name

					);
	}
	
}
function fw_pane_more_link($category = null){
	return '<div class="text-center mt-4 mb-5">
								<a href="'.get_category_link($category).'" class="btn btn-outline-primary">VIEW ALL POSTS</a>
							</div>';
}
function fw_get_selected_category_news($categories, $limit = 6){
	if(!is_array($categories) || $categories == null) return ;
	foreach($categories as $key => $category_id){
		// find category object
		$category = get_category($category_id);
		// fetch posts by category
		$posts = get_posts([
						'category' => $category_id,
						'numberposts' => $limit,
						'orderby' => 'date',
						'order' => 'desc'
					]);
		// echo enclosing tab pane
		echo '<div class="tab-pane fade" id="'.target_id($category).'" role="tabpanel" aria-labelledby="'.target_id($category).'">';
		// loop over all the posts
		foreach($posts as $post){
			echo fw_print_news_card($post);
		}
		echo fw_pane_more_link($category);
		// end loop over posts
		echo '</div>';
		// end enclosing tab pane
	}
}
function fw_print_news_card($post){
	$template = '<div class="card">
							    <div class="card-body">
								    <h6 class="card-subtitle mb-2">%s</h6>
								    <h5 class="card-title">%s</h5>
								    <p class="card-text">%s</p>
								    <a href="%s" class="btn btn-primary">Read More</a>
								</div>
							</div> ';
	return sprintf($template, get_the_date('F j,Y', $post), get_the_title($post), get_the_excerpt($post), get_permalink($post));

}
function fw_get_latest_posts($limit = 6){
	$posts = get_posts([
		'numberposts' => $limit,
		'orderby' => 'date',
		'order' => 'desc'
	]);
	foreach($posts as $post){
		echo fw_print_news_card($post);
	}
}
function fw_get_inner_category_tabs($cat_id = null){
	$categories = get_categories();
	?>
	<ul class="nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">
		<li class="nav-item">
			<a class="nav-link <?php if($cat_id == null){ echo 'active'; } ?>" id="pills-home-tab" href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
		</li>
		<?php 
			foreach($categories as $category):
		?>
		<li class="nav-item">
			<a class="nav-link <?php if($cat_id != null && $cat_id == $category->cat_ID){ echo 'active'; } ?>" id="pills-profile-tab" href="<?php echo get_category_link($category); ?>" role="tab" aria-controls="pills-profile" aria-selected="false"><?php echo $category->name; ?></a>
		</li>
		<?php 
			endforeach;
		?>
		<li class="nav-item">
			<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contests</a>
		</li>
	</ul>	
	<?php
}