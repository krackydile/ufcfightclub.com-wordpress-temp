<?php if ( ! defined( 'ABSPATH' ) ) { die( 'Direct access forbidden.' ); }
/**
 * Define custom posts and taxonomies
 */

/**
 * Register a book post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */

/*$labels = array(
	'name'               => __( 'Books', 'unyson' ),
	'singular_name'      => __( 'Book', 'unyson' ),
	'menu_name'          => __( 'Books', 'unyson' ),
	'name_admin_bar'     => __( 'Book', 'unyson' ),
	'add_new'            => __( 'Add New', 'unyson' ),
	'add_new_item'       => __( 'Add New Book', 'unyson' ),
	'new_item'           => __( 'New Book', 'unyson' ),
	'edit_item'          => __( 'Edit Book', 'unyson' ),
	'view_item'          => __( 'View Book', 'unyson' ),
	'all_items'          => __( 'All Books', 'unyson' ),
	'search_items'       => __( 'Search Books', 'unyson' ),
	'parent_item_colon'  => __( 'Parent Books:', 'unyson' ),
	'not_found'          => __( 'No books found.', 'unyson' ),
	'not_found_in_trash' => __( 'No books found in Trash.', 'unyson' )
);

$args = array(
	'labels'             => $labels,
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'book' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);

register_post_type( 'book', $args );*/

/**
 * Register a genre taxonomy.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_taxonomy
 */

/*$labels = array(
	'name'              => __( 'Genres', 'unyson' ),
	'singular_name'     => __( 'Genre', 'unyson' ),
	'search_items'      => __( 'Search Genres', 'unyson' ),
	'all_items'         => __( 'All Genres', 'unyson' ),
	'parent_item'       => __( 'Parent Genre', 'unyson' ),
	'parent_item_colon' => __( 'Parent Genre', 'unyson' ) . ':',
	'edit_item'         => __( 'Edit Genre', 'unyson' ),
	'update_item'       => __( 'Update Genre', 'unyson' ),
	'add_new_item'      => __( 'Add New Genre', 'unyson' ),
	'new_item_name'     => __( 'New Genre Name', 'unyson' ),
	'menu_name'         => __( 'Genre', 'unyson' ),
);

$args = array(
	'hierarchical'      => true,
	'labels'            => $labels,
	'show_ui'           => true,
	'show_admin_column' => true,
	'query_var'         => true,
	'rewrite'           => array( 'slug' => 'genre' ),
);

register_taxonomy( 'genre', array( 'book' ), $args );*/

$labels = array(
	'name'               => __( 'Albums', 'unyson' ),
	'singular_name'      => __( 'Albums', 'unyson' ),
	'menu_name'          => __( 'Discography', 'unyson' ),
	'name_admin_bar'     => __( 'Album', 'unyson' ),
	'add_new'            => __( 'Add New', 'unyson' ),
	'add_new_item'       => __( 'Add New Album', 'unyson' ),
	'new_item'           => __( 'New Album', 'unyson' ),
	'edit_item'          => __( 'Edit Album', 'unyson' ),
	'view_item'          => __( 'View Album', 'unyson' ),
	'all_items'          => __( 'All Albums', 'unyson' ),
	'search_items'       => __( 'Search Albums', 'unyson' ),
	'parent_item_colon'  => __( 'Parent Albums:', 'unyson' ),
	'not_found'          => __( 'No albums found.', 'unyson' ),
	'not_found_in_trash' => __( 'No albums found in Trash.', 'unyson' )
);

$args = array(
	'labels'             => $labels,
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'music/all' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'supports'           => array( 'title', 'page-attributes', 'thumbnail', 'comments' )
);

register_post_type( 'music', $args );

$labels = array(
	'name'              => __( 'Albums', 'unyson' ),
	'singular_name'     => __( 'Album', 'unyson' ),
	'search_items'      => __( 'Search Albums', 'unyson' ),
	'all_items'         => __( 'All Albums', 'unyson' ),
	'parent_item'       => __( 'Parent Album', 'unyson' ),
	'parent_item_colon' => __( 'Parent Album', 'unyson' ) . ':',
	'edit_item'         => __( 'Edit Album', 'unyson' ),
	'update_item'       => __( 'Update Album', 'unyson' ),
	'add_new_item'      => __( 'Add New Album', 'unyson' ),
	'new_item_name'     => __( 'New Album Name', 'unyson' ),
	'menu_name'         => __( 'Albums', 'unyson' ),
);

$args = array(
	'hierarchical'      => true,
	'labels'            => $labels,
	'show_ui'           => true,
	'show_admin_column' => true,
	'query_var'         => true,
	'rewrite'           => array( 'slug' => 'music/all' ),
	'public'             => true,
	'publicly_queryable' => true,
);

// register_taxonomy( 'albums', array( 'music' ), $args );
// 
$labels = array(
	'name'               => __( 'Photo Albums', 'unyson' ),
	'singular_name'      => __( 'Photo Albums', 'unyson' ),
	'menu_name'          => __( 'Photos', 'unyson' ),
	'name_admin_bar'     => __( 'Photo Album', 'unyson' ),
	'add_new'            => __( 'Add New', 'unyson' ),
	'add_new_item'       => __( 'Add New Photo Album', 'unyson' ),
	'new_item'           => __( 'New Photo Album', 'unyson' ),
	'edit_item'          => __( 'Edit Photo Album', 'unyson' ),
	'view_item'          => __( 'View Photo Album', 'unyson' ),
	'all_items'          => __( 'All Photo Album', 'unyson' ),
	'search_items'       => __( 'Search Photo Album', 'unyson' ),
	'parent_item_colon'  => __( 'Parent Photo Album:', 'unyson' ),
	'not_found'          => __( 'No albums found.', 'unyson' ),
	'not_found_in_trash' => __( 'No albums found in Trash.', 'unyson' )
);

$args = array(
	'labels'             => $labels,
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'photoalbum' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'supports'           => array( 'title', 'thumbnail','comments' )
);

register_post_type( 'photoalbums', $args );

$labels = array(
	'name'               => __( 'Videos', 'unyson' ),
	'singular_name'      => __( 'Videos', 'unyson' ),
	'menu_name'          => __( 'Videos', 'unyson' ),
	'name_admin_bar'     => __( 'Videos', 'unyson' ),
	'add_new'            => __( 'Add New', 'unyson' ),
	'add_new_item'       => __( 'Add New Videos', 'unyson' ),
	'new_item'           => __( 'New Videos', 'unyson' ),
	'edit_item'          => __( 'Edit Videos', 'unyson' ),
	'view_item'          => __( 'View Videos', 'unyson' ),
	'all_items'          => __( 'All Videos', 'unyson' ),
	'search_items'       => __( 'Search Videos', 'unyson' ),
	'parent_item_colon'  => __( 'Parent Videos:', 'unyson' ),
	'not_found'          => __( 'No albums found.', 'unyson' ),
	'not_found_in_trash' => __( 'No albums found in Trash.', 'unyson' )
);

$args = array(
	'labels'             => $labels,
	'public'             => true,
	'publicly_queryable' => true,
	'show_ui'            => true,
	'show_in_menu'       => true,
	'query_var'          => true,
	'rewrite'            => array( 'slug' => 'videos' ),
	'capability_type'    => 'post',
	'has_archive'        => true,
	'hierarchical'       => false,
	'menu_position'      => null,
	'supports'           => array( 'title', 'thumbnail' ,'comments')
);

register_post_type( 'videos', $args );