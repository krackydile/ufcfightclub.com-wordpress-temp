<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'album_thumbnail'                  => array(
		'label'       => __( 'Featured Image', 'unyson' ),
		'desc'        => __( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'unyson' ),
		'type'        => 'upload',
		'images_only' => true,
	),
	'release_date'                    => array(
		'label' => __( 'Release Date', 'unyson' ),
		'type'  => 'text',
	
	),
	'format'                    => array(
		'label' => __( 'Format', 'unyson' ),
		'type'  => 'text',
	
	),
	'store_link'                    => array(
		'label' => __( 'Store Link', 'unyson' ),
		'type'  => 'text',
	),
	'itunes_link'                    => array(
		'label' => __( 'iTUNES', 'unyson' ),
		'type'  => 'text',
	),
	'amazon_music'                    => array(
		'label' => __( 'Amazon Music', 'unyson' ),
		'type'  => 'text',
	),
);