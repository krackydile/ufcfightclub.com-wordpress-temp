<?php if (!defined('FW')) die('Forbidden');

$options = array(
	'heading' => array(
		'label'   => __('Heading', 'dcUnion'),
		'desc'    => __('Write some text', 'dcUnion'),
		'type'    => 'text',
	),
	
	
	
	'benefit_list'               => array(
		'label'        => __( 'Benefit List', 'unyson' ),
		'type'         => 'addable-box',
		'value'        => array(),
		
		'box-controls' => array(//'custom' => '<small class="dashicons dashicons-smiley" title="Custom"></small>',
		),
		'box-options'  => array(
			'list'     => array(
				'label' => __( 'List Text', 'unyson' ),
				'type'  => 'wp-editor',
				
			),
			
		),
		'template' => '{{- list }}',
		'limit' => 3,
	),
	
);