<?php
/**
 * The Template for displaying all single posts
 */

get_header(); ?>
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-2"><span>Media</span></h3>
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
						<?php 
							if ( comments_open() || get_comments_number() ) {
									echo '<div class="card card-comment">';
									comments_template();
									echo '</div>';

								}
						?>
					</div>
				</div>
			</div>
			
		</div><!-- #content -->
	</div><!-- #primary -->
<?php
get_footer();
