<?php 
get_universe_links();
?>
<section class="banner banner--full" style="background-color: #1C0D0B;">
	
	<div class="banner__video banner__video--rounded">
		<video playsInline autoPlay loop muted="muted" poster="<?php echo get_template_directory_uri(); ?>/static/videos/ja-sizzlereel-optimized-poster.jpg">
			<source src="<?php echo get_template_directory_uri(); ?>/static/videos/ja-sizzlereel-optimized.mp4" type="video/mp4"></source>
		</video>
	</div>

	<div class="floating-cta floating-cta--video">
		<?php 
			if($atts['social_switch'] == 'yes'):
		?>
			<div class="social-holder">
				<?php echo fw_get_social_list(); ?>
			</div>
		<?php 
			endif;
			echo '<div id="banner-cta">';
			fw_print_cta_buttons($atts['cta_options']);
			echo '</div>';
		?>
		
	</div>

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
				</div>
				<div  class="banner-panel-right">
					<?php 
							echo '<div id="banner-cta-mobile">';
						fw_print_cta_buttons($atts['cta_options']);
							echo '</div>';

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