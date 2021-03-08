<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'general' => array(
		'title'   => __( 'General', 'unyson' ),
		'type'    => 'tab',
		'options' => array(
			'general-box' => array(
				'title'   => __( 'General Settings', 'unyson' ),
				'type'    => 'box',
				'options' => array(
					
					'footer_logo' => array(
						'label' => __( 'Footer Logo', 'unyson' ),
						'desc'  => __( 'Upload a Footer Logo', 'unyson' ),
						'type'  => 'upload'
					),
					'footer_text'                 => array(
						'label' => __( 'Footer Text', 'unyson' ),
						'type'  => 'wp-editor',
						'value' => 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
						'reinit' => true,
					),
					'media_page'      => array(
						'type'       => 'multi-select',
						'label'      => __( 'Media main page', 'unyson' ),
						'population' => 'posts',
						'source'     => 'page',
						'desc'       => __( 'This is used to manage the breadcrumb.',
							'unyson' ),
						'limit' => 1
					),

				)
			),
			'social-box' => array(
				'title'   => __( 'Social Handles', 'unyson' ),
				'type'    => 'box',
				'options' => array(
					
					'social_handles'             => array(
						'label'         => __( 'Social Handles', 'unyson' ),
						'type'          => 'addable-popup',
						'desc'          => __( 'Choose your Social Handles.',
							'unyson' ),
						'template'      => '{{- social_url }}',
						'popup-options' => array(
							'social_url'                      => array(
								'label' => __( 'Url', 'unyson' ),
								'type'  => 'text',
								'desc'  => __( 'Enter your social profile link', 'unyson' ),
							),
							'social_icon'                      => array(
								'label' => __( 'Icon', 'unyson' ),
								'type'  => 'icon-v2',
								// 'value' => 'fa fa-linux',
								'desc'  => __( 'Select your social handle icon', 'unyson' ),
							),
						),
					),

				)
			),
		)
	)
);