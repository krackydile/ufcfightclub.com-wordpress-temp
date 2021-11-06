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

<div class="hp-video-slider">
	<?php 
		if(!empty($atts['carousel_images'])):
	?>
	<section id="unprotected-swiper" class="slider slider--right-rounded hide">
		<div class="container-fluid">
			
			<div class="swiper-container">
						<!-- Additional required wrapper -->
						<div class="swiper-wrapper">
							<!-- Slides -->
							<?php 
								$template_image_only = '<div class="swiper-slide">
												<img src="%s" class="full-slide">
											</div>';
								$template_image_with_link = '<div class="swiper-slide">
												<a href="%s"><img src="%s" class="full-slide"></a>
											</div>';
								$template_image_with_offsite_link = '<div class="swiper-slide">
												<a href="%s" target="_blank"><img src="%s" class="full-slide"></a>
											</div>';
							foreach($atts['carousel_images'] as $image){
								$image_link = get_post_meta($image['attachment_id'], 'image_carousel_link', true);
								if($image_link == ''){
									echo sprintf($template_image_only, $image['url']);
								} elseif(strpos($image_link, 'http') !== false) {
									echo sprintf($template_image_with_offsite_link, $image_link, $image['url']);
								} else {
									echo sprintf($template_image_with_link, $image_link, $image['url']);
								}
							}
							?>
							
							
							
						</div>
						<div class="custom-swiper-controls">
							<ul class="list-group list-group-horizontal justify-content-center">
							<li class="list-group-item swipe-btn-prev">
									<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
									<!-- <div class="swiper-button-prev"></div> -->
								</li>
							<li class="list-group-item list-swiper-pagination">
						<!-- <div class="swiper-pagination"></div> -->
								
							</li>
							<li class="list-group-item swipe-btn-next">
								<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								<!-- <div class="swiper-button-next"></div> -->
							</li>
						</ul>
							
						</div>
						<!-- If we need pagination -->

						<!-- If we need navigation buttons -->

						<!-- <div class="swiper-button-next"></div> -->

						<!-- If we need scrollbar -->
						<!-- <div class="swiper-scrollbar"></div> -->
					</div>
				
		</div>
	</section>
	<?php 
		endif;
	?>
	<?php 
	// var_dump($atts);
		if(!empty($atts['login_carousel_images'])):
	?>
	<section id="protected-swiper" class="slider slider--right-rounded hide">
		<div class="container-fluid">
			
			<div class="swiper-container">
						<!-- Additional required wrapper -->
						<div class="swiper-wrapper">
							<!-- Slides -->
							<?php 
								$template_image_only = '<div class="swiper-slide">
												<img src="%s" class="full-slide">
											</div>';
								$template_image_with_link = '<div class="swiper-slide">
												<a href="%s"><img src="%s" class="full-slide"></a>
											</div>';
								$template_image_with_offsite_link = '<div class="swiper-slide">
												<a href="%s" target="_blank"><img src="%s" class="full-slide"></a>
											</div>';
							foreach($atts['login_carousel_images'] as $image){
								$image_link = get_post_meta($image['attachment_id'], 'image_carousel_link', true);
								if($image_link == ''){
									echo sprintf($template_image_only, $image['url']);
								} elseif(strpos($image_link, 'http') !== false) {
									echo sprintf($template_image_with_offsite_link, $image_link, $image['url']);
								} else {
									echo sprintf($template_image_with_link, $image_link, $image['url']);
								}
							}
							?>
							
							
							
						</div>
						<div class="custom-swiper-controls">
							<ul class="list-group list-group-horizontal justify-content-center">
							<li class="list-group-item swipe-btn-prev">
									<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
									<!-- <div class="swiper-button-prev"></div> -->
								</li>
							<li class="list-group-item list-swiper-pagination">
						<!-- <div class="swiper-pagination"></div> -->
								
							</li>
							<li class="list-group-item swipe-btn-next">
								<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								<!-- <div class="swiper-button-next"></div> -->
							</li>
						</ul>
							
						</div>
						<!-- If we need pagination -->

						<!-- If we need navigation buttons -->

						<!-- <div class="swiper-button-next"></div> -->

						<!-- If we need scrollbar -->
						<!-- <div class="swiper-scrollbar"></div> -->
					</div>
				
		</div>
	</section>
	<?php 
		endif;
	?>
</div>