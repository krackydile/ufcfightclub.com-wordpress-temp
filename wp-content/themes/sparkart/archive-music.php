<?php 
get_header();
?>
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>Music </span></h3>
		<div class="row">
		<?php
			
			if(have_posts()):
				// query_posts([
				// 	'orderby' => 'menu_order',
				// 	'order' => 'ASC'
				// ]);
				while(have_posts()):
					the_post()
		?>
		

			<div class="col-md-4 col-xs-12 col-sm-12">
				<div class="album-display">
					<div class="album-thumbnail">
						<?php 
							the_post_thumbnail('full');
						?>
						
					</div>
					<div class="album-overlay" style="" onclick="javascript: window.location='<?php echo get_the_permalink(); ?>'">
						<div class="album-details">
							
							<h4 class="album-title"><?php the_title(); ?></h4>
							<h6 class="album-date">
								<?php 
									echo fw_get_db_post_option(get_the_ID(), 'release_date');
								?>	
							</h6>
							<a href="<?php echo get_the_permalink(); ?>" class="btn btn-outline-light">VIEW ALBUM</a>
						</div>
					</div>
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