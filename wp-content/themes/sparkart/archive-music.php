<?php 
get_header();
?>
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center my-5"><span>Music </span></h3>
		<div class="row">
		<?php
        global $query_string;
        query_posts (array(
        	'post_type'      => 'music',
        	'posts_per_page' => -1,
				 	'order' => 'ASC'
        ));
        if (have_posts()) : while (have_posts()) : the_post();
		?>
		

			<div class="col-lg-4 col-md-6 col-xs-12 col-sm-12">
				<div class="album-display">
					<div class="album-thumbnail">
						<?php 
							the_post_thumbnail('full');
						?>
						
					</div>
					<a href="<?php echo get_the_permalink(); ?>" class="album-overlay">
						<div class="album-details">
							
							<h4 class="album-title"><?php the_title(); ?></h4>
							<h6 class="album-date">
								<?php 
									echo fw_get_db_post_option(get_the_ID(), 'release_date');
								?>	
							</h6>
						</div>
					</a>
				</div>
			</div>
			
		<?php 
				endwhile;
			endif;
		?>
		</div>

	</div>
</section>




<?php get_footer() ?>