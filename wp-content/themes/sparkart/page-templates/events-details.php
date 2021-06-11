<?php 
/**
 * Template Name: Media
 */

get_header();

?>
				    	
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center my-4"><span>Media</span></h3>
		
		<div class="row">
			<div class="col-12">
				<nav class="text-center mb-5">
					<select class="form-control select-pills">
						  <option data-toggle="pill" value="#official-photos" href="#official-photos" role="tab" aria-controls="official-photos" aria-selected="true">Official Photos</option>
						  <option data-toggle="pill" value="#official-videos" href="#official-videos" role="tab" aria-controls="official-videos" aria-selected="true">Official Videos</option>
					</select>
					<ul class="event-pills nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" id="pills-home-tab" href="#official-photos" role="tab" aria-controls="pills-home"  data-toggle="pill" aria-selected="true">Official Photos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" id="pills-home-tab"  data-toggle="pill" href="#official-videos" role="tab" aria-controls="pills-home" aria-selected="true">Official Videos</a>
						</li>
				</nav>
			</div>	
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="official-photos" role="tabpanel" aria-labelledby="pills-home-tab">
					<div class="row" id="albums-row">
						<?php 
							$official_photos = get_posts([
								'post_type' => 'photoalbums',
								'numberposts' => get_option('posts_per_page')
							]);

							// $official_photos = WP_Query( $args )
							// var_dump($official_photos);

							if(!empty($official_photos)):
								foreach($official_photos as $photo):

						?>
						<div class="col-md-3 col-xs-12 col-sm-12">
							<div class="media-display">
								<div class="media-thumbnail">
									<a href="<?php echo get_the_permalink($photo) ?>">
										
										<img src="<?php echo get_the_post_thumbnail_url($photo, 'spartkartSquare') ?>" class="img-responsive">
									</a>
								</div>
								<div class="media-simple mt-3" style="">
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
				<div class="tab-pane fade " id="official-videos" role="tabpanel" aria-labelledby="pills-home-tab">
					<div class="row" id="video-row">
						<?php 
							$official_videos = get_posts([
								'post_type'=> 'videos',
								'numberposts' => get_option('posts_per_page')

							]);
							if(!empty($official_videos)):
								foreach($official_videos as $video):
							
						?>
						<div class="col-md-3 col-xs-12 col-sm-12">
							<div class="media-display">
								<div class="media-thumbnail">
									<a href="<?php echo get_the_permalink($video) ?>">
										
										<img src="<?php echo get_the_post_thumbnail_url($video, 'spartkartSquare') ?>" class="img-responsive">
									</a>
								</div>
								<div class="media-simple mt-3" style="">
									<div class="album-details text-center">
										<h6>

											<?php echo $video->post_title; ?>
												
										</h6>
									</div>
								</div>
							</div>
						</div>
						<?php 
								endforeach;
							endif;
						?>
					</div>
					<?php 
						if(wp_count_posts('videos')->publish > get_option('posts_per_page')):
					?>
					<div class="row mt-4 mb-5">
							<div class="col text-center">
								
								<a class="btn btn-outline-primary ajax-load-more-photo-albums" href="javascript:void(0);"  data-page="1" data-type="videos" data-target="#video-row" data-total_page="<?php echo ceil(wp_count_posts('videos')->publish / get_option('posts_per_page')); ?>">Load More</a>
							</div>
						</div>
					<?php 
						endif;
					?>
				</div>
			</div>

			
		</div>
	</div>
</section>




<?php get_footer() ?>