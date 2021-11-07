<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center my-5"><span>Media</span></h3>
	</div>
</section>
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

								$videos = fw_get_db_post_option(get_the_ID(), 'videos');
								$active_attachment_id = get_query_var('active');
								// var_dump($videos);
								if($active_attachment_id == ''){
									fw_print_video_list($videos);
									// $disqus_thread  = DISQUS_SLUG.'-video-'.get_the_ID();

								}else{

									fw_print_play_video($videos, $active_attachment_id);
									// $disqus_thread = get_active_video_disqus_id($videos, $active_attachment_id);
									
									// $disqus_thread  = DISQUS_SLUG.'-video-'.get_the_ID().'-'.$active_attachment_id;
								}


								// $videoContent = fw_get_db_post_option(get_the_ID(), 'video');
								// echo '<div class="video-frame">';
								// if($videoContent['gadget'] == 'upload'){
								// 	echo do_shortcode('[video src="'.$videoContent['upload']['video_upload']['url'].'" poster="'.get_the_post_thumbnail_url().'" width="1200"]');
								// }else{
								// 	// global $wp_embed;
								// 	echo wp_oembed_get($videoContent['embed']['video_url'], ['width' => 1200]);
								// 	// echo $wp_embed->run_shortcode();
								// }
								// echo '</div>';
								// // fw_embed_shortcode();
								// Previous/next post navigation.
								// fw_theme_post_nav();
								// $related_videos = fw_get_db_post_option(get_the_ID(),'related_videos');
								// var_dump($related_videos);

								// If comments are open or we have at least one comment, load up the comment template.
//								if ( comments_open() || get_comments_number() ) {
//									echo '<div class="px-4">';
//									comments_template();
//									echo '</div>';
//
//								}

                                ?>
                                <!-- <div class="px-4">
                                    <div class="widget-comment" id="disqus_thread" data-disqus-domain="BLANK" data-disqus-identifier="<?php // echo $disqus_thread; ?>" data-disqus-title="<?php  //echo the_title() ?> BLANK">
                                        <h3>Comments</h3>

                                        <div class="prompt">
                                            <ul class="prompt__actions actions">
                                                <li class="prompt__actions-item"><a class="prompt__actions-link action joincomment" href="/join">Join Today to Post Comments</a></li>
                                                <li class="prompt__actions-item"><a class="prompt__actions-link action action--link signin" href="/login?redirect=<?php // echo rawurlencode( home_url($_SERVER['REQUEST_URI']))?>">Already a Member? Please Sign In</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> -->
                            <?php
							endwhile;
						?>
					</div>
				</div>
			</div>

		</div><!-- #content -->
	</div><!-- #primary -->
<?php
get_footer();
