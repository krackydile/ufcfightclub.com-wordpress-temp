<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'notice_heading'                      => array(
		'label' => __( 'Heading', 'unyson' ),
		'type'  => 'text',
	),
	'notice_subtext'                      => array(
		'label' => __( 'Sub Heading', 'unyson' ),
		'type'  => 'textarea',
	),
	'notice_content'                      => array(
		'label' => __( 'Content', 'unyson' ),
		'type'  => 'wp-editor',
	),
	
);