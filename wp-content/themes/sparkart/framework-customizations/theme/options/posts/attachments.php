<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'smugmug_id'                      => array(
				'label' => __( 'Smugmug Identifier', 'unyson' ),
				'type'  => 'text',
				'help' => 'This field will be used to preserve the comments for images',
			),
	
);