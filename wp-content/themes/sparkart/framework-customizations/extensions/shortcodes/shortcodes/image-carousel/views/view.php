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