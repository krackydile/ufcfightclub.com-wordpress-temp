<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'archive' => array(
		'title'   => __( 'Archive', 'unyson' ),
		'type'    => 'tab',
		'options' => array(
			'general-box' => array(
				'title'   => __( 'General Settings', 'unyson' ),
				'type'    => 'box',
				'options' => array(
					
					'archive_active_categories' => array(
						'type'       => 'multi-select',
						'label'      => __( 'Select Categories', 'unyson' ),
						'population' => 'taxonomy',
						'source'     => 'category',
						'desc'       => __( 'Select what categories to display(First is latest news)',
									'unyson' ),
						// 'limit' => 2
					),
					

				)
			),
			
		)
	)
);