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
						<h1>My Gift</h1>
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
								// if ( comments_open() || get_comments_number() ) {
									echo '<div class="card card-comment">';
									comments_template();
									echo '</div>';

								// }
							endwhile;
						?>
					</div>
				</div>
			</div>
			
		</div><!-- #content -->
	</div><!-- #primary -->
<?php
get_footer();
