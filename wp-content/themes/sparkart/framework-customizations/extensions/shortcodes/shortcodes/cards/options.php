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
			    'label' => __('Column Heading', 'dcUnion')
			),
			'column_sub_heading' => array(
			    'type'  => 'text',
			    'label' => __('Column subhead', 'dcUnion')
			),
			
			'column_text' => array(
				'label'   => __('Column Text', 'dcUnion'),
				'desc'    => __('Write some text', 'dcUnion'),
				'type'    => 'textarea'
			),
			'column_link_title' => array(
				'label'   => __('Title for Link', 'dcUnion'),
				'desc'    => __('Write short title for the link', 'dcUnion'),
				'type'    => 'text',
			),
			'column_link_url'     => array(
				'label' => __( 'Link URL', 'dcUnion' ),
				'type'  => 'text',
				
			),
			'three_columns_extra' => array(
				'label'   => __('Extra text', 'dcUnion'),
				'desc'    => __('Text on the bottom of this block', 'dcUnion'),
				'type'    => 'text',
			),
			'three_columns_extra_link' => array(
				'label'   => __('Extra Link', 'dcUnion'),
				'desc'    => __('Text on the bottom of this block', 'dcUnion'),
				'type'    => 'text',
			),
		),
		'template' => '{{- column_heading }}',
		'limit' => 3,
	)
	
);