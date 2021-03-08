<?php 
/**
 * Template Name: Discography Page
 */

get_header();

?>
<section class="page-section">
	<div class="container">
		<?php
			if(have_posts()):
				while(have_posts()):
					the_post()
		?>
		<h3 class="block-heading text-center mt-4 mb-5"><span><?php the_title(); ?> </span></h3>
		
		<div class="row">

			<?php 
				$albums = get_terms('albums',[
					'hide_empty' => false,
					
				]);

				foreach($albums as $album):
			?>
			<div class="col-md-4 col-xs-12 col-sm-12">
				<div class="album-display">
					<div class="album-thumbnail">
						<img src="<?php echo fw_album_thumbnail($album) ?>" class="img-responsive">
					</div>
					<div class="album-overlay" style="">
						<div class="album-details">
							
							<h4 class="album-title"><?php echo $album->name ?></h4>
							<h6 class="album-date">
							
								<?php echo fw_get_db_term_option($album->id, 'albums', 'release_date'); ?>
									
							</h6>
							<a href="<?php echo get_term_link($album); ?>" class="btn btn-outline-light">VIEW ALBUM</a>
						</div>
					</div>
				</div>
			</div>
			<?php 
				endforeach;
			?>
		</div>
		<?php 
				endwhile;
			endif;
		?>
	</div>
</section>




<?php get_footer() ?>