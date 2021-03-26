<section class="events-hero" style="background-color: #E6E8E5;">

	<div class="event-hero-left">
		<div class="left-featured">
			<h2>
				<?php echo $atts['heading'] ?>
			</h2>
			<div class="event-code-holder">
				<p class="event-code-heading" id="presale-access-code-signin-text"><?php echo $atts['subheading']; ?></p>
                <div id="protected-box">
<!--					<div class="accesscode protected block-protected">-->
<!--							<div class="input-group my-2">-->
<!--								<input type="text" class="form-control" placeholder="Event Code" id="event-code-field" aria-label="Recipient's username" aria-describedby="button-addon2" value="XJ2AH98SIS3y">-->
<!--								<button class="btn btn-outline-secondary clipboard-button" type="button" id="button-addon2" data-clipboard-target="#event-code-field"><i class="fa fa-copy"></i></button>-->
<!--							</div>-->
<!--					</div>-->
                </div>
					<div class="block-unprotected" id="unprotected-box">
<!--						--><?php //fw_print_cta_buttons($atts['cta_options']); ?>

					</div>
			</div>
		</div>

	</div>
	<div class="event-hero-right">
		<?php
			if(is_array($atts['banner_right_image'])):

		?>
			<img src="<?php echo $atts['banner_right_image']['url'] ?>" class="fc-">
		<?php
			endif;
		?>


	</div>
</section>
