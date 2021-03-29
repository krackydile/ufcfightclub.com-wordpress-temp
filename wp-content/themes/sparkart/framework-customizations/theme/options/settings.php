<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}
/**
 * Framework options
 *
 * @var array $options Fill this array with options to generate framework settings form in backend
 */

$options = array(
	fw()->theme->get_options( 'general-settings' ),
	fw()->theme->get_options( 'archive-settings' ),
	fw()->theme->get_options( 'strings-settings' ),
	fw()->theme->get_options( 'universe-settings' ),
	// fw()->theme->get_options( 'demo-box' ),
);
