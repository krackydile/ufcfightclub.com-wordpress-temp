<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'carousel_images' => array(
		'label' => __( 'Multi Upload (images only)', 'unyson' ),
		'desc'  => __( 'Upload the carousel images (1600 X 703 px).',
							'unyson' ),
		'type'  => 'multi-upload',
		
	)

);