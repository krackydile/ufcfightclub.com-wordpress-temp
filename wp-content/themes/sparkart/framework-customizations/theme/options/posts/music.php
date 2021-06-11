<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}

$options = array(
	'general_infomration' => array(
		'title' => 'General Information',
		'type' => 'box',
		'options' => array(
			'release_date'                    => array(
				'label' => __( 'Release Date', 'unyson' ),
				'type'  => 'text',
			
			),
			'format'                    => array(
				'label' => __( 'Format', 'unyson' ),
				'type'  => 'text',
			
			),
			'store_link'                    => array(
				'label' => __( 'Store Link', 'unyson' ),
				'type'  => 'text',
			),
			'itunes_link'                    => array(
				'label' => __( 'iTunes', 'unyson' ),
				'type'  => 'text',
			),
			'amazon_music'                    => array(
				'label' => __( 'Amazon Music', 'unyson' ),
				'type'  => 'text',
			),
			'spotify'                    => array(
				'label' => __( 'Spotify', 'unyson' ),
				'type'  => 'text',
			),
			'pandora'                    => array(
				'label' => __( 'Pandora', 'unyson' ),
				'type'  => 'text',
			),
			'youtube'                    => array(
				'label' => __( 'Youtube', 'unyson' ),
				'type'  => 'text',
			),
			'google_play'                    => array(
				'label' => __( 'Google Play', 'unyson' ),
				'type'  => 'text',
			),
			'tidal'                    => array(
				'label' => __( 'Tidal', 'unyson' ),
				'type'  => 'text',
			),
		)
	),
	'tracks_information' => array(
		'title' => 'Tracks',
		'type' =>'box',
		'options' => array(
			'tracks'             => array(
				'label'         => __( 'Tracks', 'unyson' ),
				'type'          => 'addable-popup',
				'template'      => '{{- track_name }}',
				'popup-options' => array(
					'track_name'                => array(
						'label' => __( 'Track', 'unyson' ),
						'type'  => 'text',
						'desc'  => __( 'Enter Track Name',
							'unyson' ),
					),
					'track_lyrics'                 => array(
						'label' => __( 'Lyrics', 'unyson' ),
						'type'  => 'wp-editor',
						'reinit' => true,
					),
					'track_video'                 => array(
						'label' => __( 'Video Code', 'unyson' ),
						'type'  => 'wp-editor',
						'reinit' => true,
					),
				),
			),
			
			
		)
	)
	
);