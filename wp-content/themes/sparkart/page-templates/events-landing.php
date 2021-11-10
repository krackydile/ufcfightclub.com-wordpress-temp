<?php 
/**
 * Template Name: Events Landing
 */

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


	<div class="container container--video-header <?php if (has_post_thumbnail()) : ?>container--image-header<?php endif; ?>">
		<!-- <h3 class="block-heading block-heading--red my-5"><span><?php the_title(); ?> </span></h3> -->
		

		<?php the_content(); ?>
		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>