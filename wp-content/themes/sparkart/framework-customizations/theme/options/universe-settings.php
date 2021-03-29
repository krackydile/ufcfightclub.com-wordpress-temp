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
					'protection_page'      => array(
						'type'       => 'multi-select',
						'label'      => __( 'Protection Page', 'unyson' ),
						'population' => 'posts',
						'source'     => 'page',
						'desc'       => __( 'This is the page that will block users from viewing content if they are not logged in.',
							'unyson' ),
						'limit' => 1
					),
					'protected_post_types'      => array(
						'type'       => 'multi-select',
						'label'      => __( 'Protect Post types', 'unyson' ),
						'population' => 'array',
						'choices'    => fw_get_registered_post_types(),
						'desc'       => __( 'This is the page that will block users from viewing content if they are not logged in.',
							'unyson' ),
						// 'limit' => 1
					),
					'events_detail_page'      => array(
						'type'       => 'multi-select',
						'label'      => __( 'Detailed Events Page', 'unyson' ),
						'population' => 'posts',
						'source'     => 'page',
						'desc'       => __( 'This page is used to show the detailed events',
							'unyson' ),
						'limit' => 1
					),
				)
				
			),
			
		)
	)
);