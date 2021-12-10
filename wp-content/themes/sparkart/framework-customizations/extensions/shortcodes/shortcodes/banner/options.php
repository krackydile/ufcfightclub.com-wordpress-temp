<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'banner_left_image'                    => array(
		'label'       => __( 'Banner Left Image', 'unyson' ),
		'desc'        => __( 'Upload image that is seen in the left of the banner',
			'unyson' ),
		'type'        => 'upload',
		'images_only' => true,
		
	),
	'banner_right_image'                    => array(
		'label'       => __( 'Banner Right Image', 'unyson' ),
		'desc'        => __( 'Upload image that is seen in the right of the banner',
			'unyson' ),
		'type'        => 'upload',
		'images_only' => true,
	),
	'social_switch'                    => array(
		'label'        => __( 'Social Links', 'unyson' ),
		'type'         => 'switch',
		'right-choice' => array(
			'value' => 'yes',
			'label' => __( 'Yes', 'unyson' )
		),
		'left-choice'  => array(
			'value' => 'no',
			'label' => __( 'No', 'unyson' )
		),
		'value'        => 'yes',
		'desc'         => __( 'Do you want to show the social links?',
			'unyson' ),
	),
	'cta_options' => fw()->theme->get_options( 'cta-options' )

);