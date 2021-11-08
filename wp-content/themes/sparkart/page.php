<?php 
get_header();
if(have_posts()):
	while(have_posts()):
		the_post();
?>
				    	
<section class="page-section">

	<?php if (has_post_thumbnail()) : ?>
	<!-- Page header image -->
	<div class="image-header">
		<img src="<?php the_post_thumbnail_url("full"); ?>">
	</div> 
	<?php endif ?>

	<div class="container container--image-header">
		<h3 class="block-heading text-center my-5"><span><?php the_title(); ?></span></h3>
		

		<?php the_content(); ?>
		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>