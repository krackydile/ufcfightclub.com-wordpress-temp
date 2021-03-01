<?php if (!defined('FW')) die('Forbidden');

$options = array(
	'heading' => array(
		'label'   => __('Heading', 'dcUnion'),
		'desc'    => __('Write some text', 'dcUnion'),
		'type'    => 'text',
	),
	
	
	
	'addable_columns'	=> array(
		'label'        => __( 'Column Details', 'dcUnion' ),
		'type'         => 'addable-box',
		'value'        => array(),
		'box-options'  => array(
			'title' => array(
			    'type'  => 'text',
			    'label' => __('Column Heading', 'dcUnion')
			),
			
			
			'description' => array(
				'label'   => __('Column Text', 'dcUnion'),
				'desc'    => __('Write some text', 'dcUnion'),
				'type'    => 'textarea'
			),
			'image'                    => array(
				'label'       => __( 'Single Image', 'unyson' ),
				'type'        => 'upload',
				'images_only' => false,
			),
			'orientation' => array(
				'type'    => 'select',
				'label'   => __( 'Image Placement', 'unyson' ),
				'choices' => array(
					'left-image' => __( 'left', 'unyson' ),
					'right-image' => __( 'Right', 'unyson' ),
					
				)
			)
		),
		'template' => '{{- title }}',
	)
	
);