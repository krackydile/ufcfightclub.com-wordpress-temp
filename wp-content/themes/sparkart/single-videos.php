<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>

	<div id="primary" class="content-area single-page-content video-page">
		<div class="container">
			<?php 
				if(function_exists('fw_ext_get_breadcrumbs')){

					echo fw_ext_get_breadcrumbs( '/' ) ;
				}
			?>
			<div id="content" class="site-content " role="main">
				<div class="row">
					<div class="col">
						<?php
							// Start the Loop.
							while ( have_posts() ) : the_post();

								$videoContent = fw_get_db_post_option(get_the_ID(), 'video'); 
								echo '<div class="video-frame">';
								if($videoContent['gadget'] == 'upload'){
									echo do_shortcode('[video src="'.$videoContent['upload']['video_upload']['url'].'" poster="'.get_the_post_thumbnail_url().'" width="1200"]');
								}else{
									// global $wp_embed;
									echo wp_oembed_get($videoContent['embed']['video_url'], ['width' => 1200]); 
									// echo $wp_embed->run_shortcode();
								}
								echo '</div>';
								// fw_embed_shortcode();
								// Previous/next post navigation.
								// fw_theme_post_nav();
								$related_videos = fw_get_db_post_option(get_the_ID(),'related_videos');
								if(count($related_videos) > 0 ):
								?>

								<section class="related_videos my-4">
									<div class="container">
										
									
										<h2 class="text-center">Related Videos</h2>
											<div class="row">
												<?php 
													foreach($related_videos as $video):
												?>
												<div class="col-6 col-md-2 mb-4">
													<a href="<?php echo get_permalink($video); ?>">
														
														<img src="<?php echo get_the_post_thumbnail_url($video); ?>" class="img-responsive" >
													</a>
												</div>
												<?php 
													endforeach;
												?>
											</div>
									</div>
								</section>
								<?php 
								endif;
								// If comments are open or we have at least one comment, load up the comment template.
								if ( comments_open() || get_comments_number() ) {
									echo '<div class="px-4">';
									comments_template();
									echo '</div>';

								}
							endwhile;
						?>
					</div>
				</div>
			</div>
			
		</div><!-- #content -->
	</div><!-- #primary -->
<?php
get_footer();
