<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>

	<div id="primary" class="content-area single-page-content">
		<div class="container">
			<?php
				if(function_exists('fw_ext_get_breadcrumbs')){

					echo fw_ext_get_breadcrumbs( '/' ) ;
				}
			?>
			<div id="content" class="site-content site-content-transparent" role="main">
				<div class="row">
					<div class="col">
						<?php
							// Start the Loop.
							while ( have_posts() ) : the_post();

								?>
							<div class="row mb-4 album-row">
								<div class="col-lg-8 col-sm-12">
									<div class="album-thumbnail-inner">

											<?php 
												the_post_thumbnail('spartkartSquare');

											?>
										<div class="album-card">
										<div class="album-card__content">
											<h1 class="album-title-inner"><?php the_title(); ?></h1>
											<div class="event-detail">
												<ul>

													<li><strong class="pr-3">Release Date:</strong><?php echo fw_get_db_post_option(get_the_ID(), 'release_date'); ?></li>
													<li>
														<?php
															fw_show_album_buy_links(get_the_ID());
														?>
													</li>

												</ul>
											</div>
										</div>
									</div>
									</div>
								</div>
								<div class="col-lg-4 col-sm-12">
									<div class="releases">
										<h2 class="releases__heading">Other Releases</h2>
										<ul class="releases__list row">

										<?php
										$args = array(
												'post_type' => 'music',
												'order' => 'ASC',
										);
										$the_query = new WP_Query( $args ); ?>

										<?php if ( $the_query->have_posts() ) : ?>

												<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
														<li class="releases__release col-3 col-sm-3 col-md-2 col-lg-6">
															<a href="<?php the_permalink(); ?>">
																<img class="release__img" src="<?php echo get_the_post_thumbnail_url($post_id, 'medium') ?>">
																<h3 class="release__title"><?php the_title();  ?></h3>
																<p class="release__date"><?php echo fw_get_db_post_option(get_the_ID(), 'release_date'); ?></p>
															</a>
														</li>
												<?php endwhile; ?>

												<?php wp_reset_postdata(); ?>

										<?php endif; ?>

										</ul>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<h3 class="lyrics-section-heading">TRACK LISTING</h3>
									<ul class="list-group track-group">
										<?php
											$tracks = fw_get_db_post_option(get_the_ID(), 'tracks');
											if(!empty($tracks)):
												foreach($tracks as $key => $track):
													?>
													<li class="list-group-item">
													  	<strong><?php echo $key+1; ?>. </strong>
													  	<span>

													  	<?php echo $track['track_name'] ?>
													  	</span>
													  	<div class="btn-group track-info-btn-group" role="group" aria-label="Basic example">
													  		<?php
													  			if($track['track_video']!=''):
													  		?>
															  <button type="button" class="btn btn-default "
															  	data-toggle="modal"
															  	data-target="#watchModal"
															  	data-video='<?php echo fw_embed_shortcode($track['track_video']); ?>'
															  >Watch</button>
															<?php
																endif;
													  			if($track['track_lyrics']!=''):

															?>
																<button type="button" class="btn btn-default" data-toggle="collapse" data-target="#collapse-track-<?php echo $key+1 ?>" aria-expanded="true" aria-controls="collapse-track-<?php echo $key+1 ?>">Lyrics</button>
															<?php
																endif;
															?>
															</div>


													  </li>

													<?php
												endforeach;
											endif;
										?>
									</ul>
									<?php 
										if(!empty($tracks) && tracks_no_lyrics($tracks)!== 0):
											
									?>
									<section class="lyrics">

										<h3 class="lyrics-section-heading">Lyrics</h3>
										<div id="accordion">
											<?php
												if(!empty($tracks)):
													foreach($tracks as $key => $track):
														if($track['track_lyrics'] == '') continue;
											?>
										  <div class="card">
										    <div class="card-header" id="headingOne">
										      <h5 class="mb-0">
										        <button class="btn btn-link btn-lyrics collapsed" data-toggle="collapse" data-target="#collapse-track-<?php echo $key+1 ?>" aria-expanded="true" aria-controls="collapse-track-<?php echo $key+1 ?>">
										         	<i class="fa fa-angle-down angle-trigger"></i> <strong><?php echo $track['track_name']; ?></strong>
										        </button>
										      </h5>
										    </div>

										    <div id="collapse-track-<?php echo $key+1 ?>" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
										      <div class="card-body">
										        <?php
										        	echo $track['track_lyrics'];
										        ?>
										      </div>
										    </div>
										  </div>
										  <?php
										  			endforeach;
										  		endif;
										  ?>


										</div>
									</section>
                  <?php endif; ?>
								</div>

							</div>


								<?php
								// fw_embed_shortcode(strip_tags('<p>https://www.youtube.com/watch?v=jR-wUErMFyA</p>'));
								// If comments are open or we have at least one comment, load up the comment template.
//								if ( comments_open() || get_comments_number() ) {
//									echo '<div class="card card-comment py-6">';
//									comments_template();
//									echo '</div>';
//
//								}

                                ?>
                                <!-- <div class="card card-comment py-6">
                                    <div class="widget-comment" id="disqus_thread" data-disqus-domain="BLANK" data-disqus-identifier="wordpress-release-<?php // echo get_post_field( 'post_name', get_post() ); ?>" data-disqus-title="<?php // echo the_title() ?>">
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
	<!-- watch modal -->
	<div class="modal fade" id="watchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      <div class="modal-body">

	      </div>
	    </div>
	  </div>
	</div>
	<!-- End watch modal -->
<?php
get_footer();
