<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	
	'heading'                      => array(
		'label' => __( 'Heading', 'unyson' ),
		'type'  => 'textarea',
	),
	'subheading'                      => array(
		'label' => __( 'Sub Heading', 'unyson' ),
		'type'  => 'text',
	),
	'banner_right_image'                    => array(
		'label'       => __( 'Banner Right Image', 'unyson' ),
		'desc'        => __( 'Upload image that is seen in the right of the banner',
			'unyson' ),
		'type'        => 'upload',
		'images_only' => true,
	),
	
	'cta_options' => fw()->theme->get_options( 'cta-options' ),

);