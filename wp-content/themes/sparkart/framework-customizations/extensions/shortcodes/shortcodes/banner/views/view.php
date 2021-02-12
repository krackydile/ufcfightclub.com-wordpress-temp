<section class="banner" style="background-color: #E6E8E5;">
	
	<div class="container-fluid" >
		<div class="row">
			<div class="col-12">
				
				<div class="banner-panel-left text-center">
					<div class="left-featured">
						<?php 
							if(!empty($atts['banner_left_image'])):
						?>
							<img src="<?php echo $atts['banner_left_image']['url'] ?>" class="fc-logo">
						<?php 
							endif;
						?>
					</div>
					<div class="floating-cta">
						<?php 
							if($atts['social_switch'] == 'yes'):
						?>
							<div class="social-holder">
								<?php echo fw_get_social_list(); ?>
							</div>
						<?php 
							endif;
							fw_print_cta_buttons($atts['cta_options']);
						?>
						
					</div>
				</div>
				<div class="banner-panel-right">
					<?php 
						fw_print_cta_buttons($atts['cta_options']);

						if(is_array($atts['banner_right_image'])):
					?>
						<img src="<?php echo $atts['banner_right_image']['url'] ?>" class="fc-">
					<?php 
						endif;
					?>
				</div>
			</div>
		</div>
		
	</div>
</section>