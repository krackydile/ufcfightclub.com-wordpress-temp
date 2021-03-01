<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'official_photo_gallery' => array(
		'title' => 'Gallery Images',
		'type' =>'box',
		'options' => array(
			'photo_gallery'              => array(
				'label'       => __( 'Multi Upload', 'unyson' ),
				'type'        => 'multi-upload',
				'images_only' => true,
				
			),
		)
	)
	
);