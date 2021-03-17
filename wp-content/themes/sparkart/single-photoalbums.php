<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center my-4"><span>Media</span></h3>
	</div>
</section>
	<div id="primary" class="content-area single-page-content single-photo-gallery-page">
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
								?>
									<h1 class="text-center official-photo-title"><?php the_title(); ?></h1>
								<?php
								$active_attachment_id = get_query_var('active');
								// var_dump($active_attachment_id);
								if($active_attachment_id == ''){
									echo '<div class="row " id="photo-data"></div><div id="photos_paginated" data-album="'.get_the_ID().'"></div>';
									// fw_print_photo_list($photos);
								}else{
									$photos = fw_get_db_post_option(get_the_ID(), 'photo_gallery');
									fw_print_photo_slider($photos, $active_attachment_id);
								}
							endwhile;
						?>

					</div>
				</div>
				<div class="row">
					<div class="col">
<!--						--><?php //
//							if ( comments_open() || get_comments_number() ) {
//									echo '<div class="card card-comment">';
//									comments_template();
//									echo '</div>';
//
//								}
//						?>
                        <div class="card card-comment">
                            <div class="widget-comment" id="disqus_thread" data-disqus-domain="https://www.carrieunderwood.fm" data-disqus-identifier="smugmug-<?php echo get_the_ID(); ?>" data-disqus-title="<?php echo the_title() ?> · The Official Carrie Underwood Fan Club">
                                <h3>Comments</h3>

                                <div class="prompt">
                                    <ul class="prompt__actions actions">
                                        <li class="prompt__actions-item"><a class="prompt__actions-link action joincomment" href="/join">Join Today to Post Comments</a></li>
                                        <li class="prompt__actions-item"><a class="prompt__actions-link action action--link signin" href="/login?redirect=<?php echo rawurlencode( home_url($_SERVER['REQUEST_URI']))?>">Already a Member? Please Sign In</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>

		</div><!-- #content -->
	</div><!-- #primary -->
<?php
get_footer();
