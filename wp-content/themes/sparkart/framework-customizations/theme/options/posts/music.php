<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'login_protected' => array(
		'title' => 'Additional Details',
		'type' =>'box',
		'options' => array(
			'lyrics'                 => array(
				'label' => __( 'Lyrics', 'unyson' ),
				'type'  => 'wp-editor',
				'reinit' => true,
			),
			'video'                 => array(
				'label' => __( 'Video Code', 'unyson' ),
				'type'  => 'wp-editor',
				'reinit' => true,
			),
			
		)
	)
	
);