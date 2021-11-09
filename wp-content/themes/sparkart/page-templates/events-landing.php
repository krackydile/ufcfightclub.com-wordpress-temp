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

	<div class="container container--video-header">
		<!-- <h3 class="block-heading block-heading--red my-5"><span><?php the_title(); ?> </span></h3> -->
		

		<?php the_content(); ?>
		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>