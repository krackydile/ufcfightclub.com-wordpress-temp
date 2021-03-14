<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'static_strings' => array(
		'title'   => __( 'Static Strings', 'unyson' ),
		'type'    => 'tab',
		'options' => array(
			'general-box' => array(
				'title'   => __( 'Need More Help', 'unyson' ),
				'type'    => 'box',
				'options' => array(
					'more_notice_heading'                      => array(
						'label' => __( 'Heading', 'unyson' ),
						'type'  => 'text',
					),
					
					'more_notice_content'                      => array(
						'label' => __( 'Content', 'unyson' ),
						'type'  => 'wp-editor',
					),
				)
				
			),
			
		)
	)
);