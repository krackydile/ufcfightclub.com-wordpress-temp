<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'heading'                      => array(
		'label' => __( 'Heading', 'unyson' ),
		'type'  => 'text',
		'value' => 'News',
	),
	'news_limit'                      => array(
		'label' => __( 'Limit', 'unyson' ),
		'type'  => 'text',
		'value' => '2',
		'desc' => 'Number of news you wish to show'
	),
	'displayed_categories' => array(
		'type'       => 'multi-select',
		'label'      => __( 'Select Categories', 'unyson' ),
		'population' => 'taxonomy',
		'source'     => 'category',
		'desc'       => __( 'Select what categories to display(First is latest news)',
					'unyson' ),
		'limit' => 2
	),

);