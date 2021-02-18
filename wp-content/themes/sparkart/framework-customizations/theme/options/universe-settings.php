<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'universe' => array(
		'title'   => __( 'Universe', 'unyson' ),
		'type'    => 'tab',
		'options' => array(
			'general-box' => array(
				'title'   => __( 'Universe Settings', 'unyson' ),
				'type'    => 'box',
				'options' => array(
					'universe_base'                      => array(
						'label' => __( 'API URL', 'unyson' ),
						'type'  => 'text',
						'desc'  => __( 'Enter api url',
							'unyson' ),
					),

					'universe_key'                      => array(
						'label' => __( 'Universe Key', 'unyson' ),
						'type'  => 'text',
						'desc'  => __( 'Enter you universe key',
							'unyson' ),
					),

				)
				
			),
			
		)
	)
);