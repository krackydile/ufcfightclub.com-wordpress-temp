<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'login_protected' => array(
		'title' => 'Login Protection',
		'type' =>'box',
		'options' => array(
			'login_switch'                    => array(
				'label'        => __( 'Protected', 'unyson' ),
				'type'         => 'switch',
				'right-choice' => array(
					'value' => 'yes',
					'label' => __( 'Yes', 'unyson' )
				),
				'left-choice'  => array(
					'value' => 'no',
					'label' => __( 'No', 'unyson' )
				),
				// 'value'        => 'no',
				'desc'         => __( 'Only loggedin members will be able to view this page.',
					'unyson' ),
				
			),
		)
	)
	
);