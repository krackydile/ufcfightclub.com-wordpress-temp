<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>

	<div id="primary" class="content-area single-page-content">
		<div class="container">
			<div id="content" class="site-content " role="main">
				<div class="row">
					<div class="col">
						<?php
							// Start the Loop.
							while ( have_posts() ) : the_post();

								/*
								 * Include the post format-specific template for the content. If you want to
								 * use this in a child theme, then include a file called called content-___.php
								 * (where ___ is the post format) and that will be used instead.
								 */
								get_template_part( 'content', get_post_format() );

								// Previous/next post navigation.
								// fw_theme_post_nav();

								// If comments are open or we have at least one comment, load up the comment template.
//								if ( comments_open() || get_comments_number() ) {
//									echo '<div class="card card-comment">';
//									comments_template();
//									echo '</div>';
//
//								}
                        ?>      <div class="card card-comment">
                                    <div class="widget-comment" id="disqus_thread" data-disqus-domain="https://www.carrieunderwood.fm" data-disqus-identifier="wordpress-<?php echo get_post_field( 'post_name', get_post() ); ?>" data-disqus-title="<?php echo the_title() ?> · The Official Carrie Underwood Fan Club">
                                        <h3>Comments</h3>

                                        <div class="prompt">
                                            <ul class="prompt__actions actions">
                                                <li class="prompt__actions-item"><a class="prompt__actions-link action joincomment" href="/join">Join Today to Post Comments</a></li>
                                                <li class="prompt__actions-item"><a class="prompt__actions-link action action--link signin" href="/login?redirect=<?php echo rawurlencode( home_url($_SERVER['REQUEST_URI']))?>">Already a Member? Please Sign In</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
