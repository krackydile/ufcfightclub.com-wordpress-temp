<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'video_info' => array(
		'title' => 'Video Information',
		'type' => 'box',
		'options' => array(
			'videos'               => array(
				'label'        => __( 'Video Playlist', 'unyson' ),
				'type'         => 'addable-box',
				'value'        => array(),
				
				'box-controls' => array(//'custom' => '<small class="dashicons dashicons-smiley" title="Custom"></small>',
				),
				'box-options'  => array(
					'video_title'     => array(
						'label' => __( 'Title', 'unyson' ),
						'type'  => 'text',
						'value' => 'Lorem ipsum dolor sit amet',
						'desc'  => __( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							'unyson' ),
						'help'  => sprintf( "%s \n\n'\"<br/><br/>\n\n <b>%s</b>",
							__( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
								'unyson' ),
							__( 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
								'unyson' )
						),
					),
					'disqus_id'     => array(
						'label' => __( 'Disqus ID', 'unyson' ),
						'type'  => 'text',
						'desc'  => __( 'Optional Leave empty if not required',
							'unyson' ),
						
					),
					'video_thumbnail'             => array(
						'label' => __( 'Thumbnail', 'unyson' ),
						'type'  => 'upload',
					),
					'video_info'       => array(
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
									'images_only' => false,

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
				),
				'template' => '{{- video_title }}',
				// 'limit' => 3,
			),
			
			// 'related_videos'      => array(
			// 		'type'       => 'multi-select',
			// 		'label'      => __( 'Related Videos', 'unyson' ),
			// 		'population' => 'posts',
			// 		'source'     => 'videos',
			// 	),
		)
	),
	
	
);