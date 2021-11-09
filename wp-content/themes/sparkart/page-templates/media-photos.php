<?php 
/**
 * Template Name: Media - Photos
 */

get_header();

?>
				    	
<section class="page-section">
	<div class="container">
		<h3 class="block-heading my-5"><span>Photos</span></h3>
		
			
				<div id="official-photos">
					<div class="row" id="albums-row">
						<?php 
							$official_photos = get_posts([
								'post_type' => 'photoalbums',
								'numberposts' => get_option('posts_per_page')
							]);

							if(!empty($official_photos)):
								foreach($official_photos as $photo):

						?>
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="media-display">
								<div class="media-thumbnail">
									<a href="<?php echo get_the_permalink($photo) ?>">
										
										<img src="<?php echo get_the_post_thumbnail_url($photo, 'spartkartSquare') ?>" class="img-responsive">
									</a>
								</div>
								<div class="media-simple mt-4" style="">
									<div class="album-details text-center">
										<h6>

											<?php echo $photo->post_title; ?>
												
										</h6>
										<p><?php echo fw_count_photo_album($photo); ?> Photo</p>
									</div>
								</div>
							</div>
						</div>
						<?php 
								endforeach;
							endif
						?>
					</div>
					<?php 
						// var_dump(wp_count_posts('photoalbums'));
						if(wp_count_posts('photoalbums')->publish > get_option('posts_per_page')):
					?>
					<div class="row mt-4 mb-5">
							<div class="col text-center">
								
								<a class="btn btn-outline-primary ajax-load-more-photo-albums" href="javascript:void(0);" data-load-type="album-photos" data-page="1" data-type="photoalbums" data-target="#albums-row" data-total_page="<?php echo ceil(wp_count_posts('photoalbums')->publish / get_option('posts_per_page')); ?>">Load More</a>
							</div>
						</div>
					<?php 
						endif;
					?>
				</div>
			

			
		</div>
	</div>
</section>




<?php get_footer() ?>