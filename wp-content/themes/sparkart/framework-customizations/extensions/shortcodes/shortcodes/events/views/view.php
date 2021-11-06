<section class="upcomming-events py-5 ">
	<div class="container">
		<div class="cta-heading">
			<h3 class="block-heading heading-red"><span><?php echo $atts['heading'] ?></span></h3>
			<?php 
				homepage_more_events();
			?>
		</div>
		<?php 
			homepage_event_cards();
		?>
	</div>
</section>