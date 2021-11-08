<?php if (!defined('FW')) die('Forbidden');

$options = array(
	'three_columns_heading' => array(
		'label'   => __('Heading', 'dcUnion'),
		'desc'    => __('Write some text', 'dcUnion'),
		'type'    => 'text',
	),
	'addable_columns'	=> array(
		'label'        => __( 'Column Details', 'dcUnion' ),
		'type'         => 'addable-box',
		'value'        => array(),
		'box-options'  => array(
			'column_heading' => array(
			    'type'  => 'text',
			    'label' => __('Heading', 'dcUnion')
			),
			'column_pricing' => array(
			    'type'  => 'text',
			    'label' => __('Pricing', 'dcUnion')
			),
			'column_duration' => array(
				'type'  => 'text',
				'label' => __('Duration', 'dcUnion')
			),
			'column_button_text' => array(
				'type'  => 'text',
				'label' => __('Button Text', 'dcUnion')
			),
			'column_button_link' => array(
				'type'  => 'text',
				'label' => __('Button Link', 'dcUnion')
			),
			'column_image' => array(
				'label'       => __( 'Image', 'unyson' ),
				'desc'        => __( 'Upload image to accompany card',
					'unyson' ),
				'type'        => 'upload',
				'images_only' => true,
			),
			'column_list_heading' => array(
				'type'  => 'text',
				'label' => __('List Heading', 'dcUnion')
			),
			'column_list_items' => array(
				'type'  => 'text',
				'label' => __('List Items', 'dcUnion')
			),
			'column_list_heading_2' => array(
				'type'  => 'text',
				'label' => __('List Heading', 'dcUnion')
			),
			'column_list_items_2' => array(
				'type'  => 'text',
				'label' => __('List Items', 'dcUnion')
			),
		),
		'template' => '{{- column_heading }}',
		'limit' => 3,
	)
	
);