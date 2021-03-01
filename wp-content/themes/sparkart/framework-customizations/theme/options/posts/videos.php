<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'video_info' => array(
		'title' => 'Video Information',
		'type' => 'box',
		'options' => array(
			'video'       => array(
				'type'         => 'multi-picker',
				'label'        => false,
				'desc'         => false,
				'picker'       => array(
					'gadget' => array(
						'label'   => __( 'Video Type', 'unyson' ),
						'type'    => 'select',
						'choices' => array(
							'upload'  => __( 'Upload', 'unyson' ),
							'embed' => __( 'Embed', 'unyson' )
						),
						
					)
				),
				'choices'      => array(
					'upload'  => array(
						'video_upload'  => array(
							'type'  => 'upload',
							'label' => __( 'Upload Video', 'unyson' ),
						),
						
					),
					'embed' => array(
						'video_url'  => array(
							'type'  => 'text',
							'label' => __( 'Video Url', 'unyson' ),
						),
						
					),
				),
				
				'show_borders' => false,
			),
			'related_videos'      => array(
					'type'       => 'multi-select',
					'label'      => __( 'Related Videos', 'unyson' ),
					'population' => 'posts',
					'source'     => 'videos',
				),
		)
	),
	
	
);