<?php if ( ! defined( 'ABSPATH' ) ) { die( 'Direct access forbidden.' ); }

/**
 * Theme Includes
 */
require_once get_template_directory() .'/inc/init.php';

/**
 * TGM Plugin Activation
 */
{
	require_once dirname( __FILE__ ) . '/TGM-Plugin-Activation/class-tgm-plugin-activation.php';

	/** @internal */
	function _action_theme_register_required_plugins() {
		tgmpa( array(
			array(
				'name'      => 'Unyson',
				'slug'      => 'unyson',
				'required'  => true,
			),
		) );

	}
	add_action( 'tgmpa_register', '_action_theme_register_required_plugins' );
}

function homepage_event_cards(){
	?>
	<div class="row">
			<?php 
				for($i = 0; $i <=2; $i ++):
					echo '<div class="col-lg-4 col-sm-12 col-xs-12">';
					event_card();
					echo '</div>';
				endfor;
			?>
		</div>
	<?php
}
function homepage_more_events(){
	?>
		<div class="text-center mt-4 mb-5">
			<a href="<?php echo get_bloginfo('wpurl') ?>/events" class="btn btn-outline-light">See More Dates</a>
		</div>
	<?php
}
function event_card(){
	?>
		<div class="card events-card">
			<div class="card-body">
				<h6 class="card-subtitle mb-3">November 17, 2020</h6>
				<h5 class="card-title mb-3">My Gift: A Cristmas Special From Carrie Underwood to Debut December 3 on HBO Max</h5>
				<h6 class="card-subtitle mb-4 event-venue">Allentown, PA</h6>
				<a href="#" class="btn btn-primary">Buy Tickets</a>
				<a href="#" class="btn btn-outline-primary">Meet & Greet</a>
			</div>
		</div>
	<?php
}