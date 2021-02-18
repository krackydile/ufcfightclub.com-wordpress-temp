<?php 
	$options =  array(
		'label'        => __( 'CTA', 'unyson' ),
		'type'         => 'addable-box',
		'value'        => array(),
		'desc'         => __( 'Cta buttons.', 'unyson' ),
		'box-controls' => array(//'custom' => '<small class="dashicons dashicons-smiley" title="Custom"></small>',
		),
		'box-options'  => array(
			'cta_text'     => array(
				'label' => __( 'Text', 'unyson' ),
				'type'  => 'text',
				'desc'  => __( 'Enter text for the button',
					'unyson' ),
				'help'  => sprintf( "%s \n\n'\"<br/><br/>\n\n <b>%s</b>",
					__( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'unyson' ),
					__( 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
						'unyson' )
				),
			),
			'cta_url'     => array(
				'label' => __( 'Url', 'unyson' ),
				'type'  => 'text',
				'desc'  => __( 'Enter the url for the cta button',
					'unyson' ),
				'help'  => sprintf( "%s \n\n'\"<br/><br/>\n\n <b>%s</b>",
					__( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'unyson' ),
					__( 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
						'unyson' )
				),
			),
			'cta_style' => array(
					'type'    => 'select',
					'label'   => __( 'Button Style', 'unyson' ),
					'choices' => array(
						'btn-cta-primary' => __( 'CTA Primary', 'unyson' ),
						'btn-cta-outline' => __( 'CTA Outline', 'unyson' ),
						'btn-primary' => __( 'Primary Button', 'unyson' ),
				)
			)
			
		),
		'template' => '{{- cta_text }}',
		'limit' => 3,
	);
?>