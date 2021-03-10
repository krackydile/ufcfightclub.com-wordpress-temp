<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'official_photo_gallery' => array(
		'title' => 'Gallery Images',
		'type' =>'box',
		'options' => array(
			'smugmug_id'                      => array(
				'label' => __( 'Smugmug Identifier', 'unyson' ),
				'type'  => 'text',
				'value' => 'This field will be used to preserve the comments for images',
			),
			'photo_gallery'              => array(
				'label'       => __( 'Multi Upload', 'unyson' ),
				'type'        => 'multi-upload',
				'images_only' => true,
				
			),
		)
	)
	
);