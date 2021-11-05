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
	<div class="container">
		<h3 class="block-heading mt-4 mb-5"><span><?php the_title(); ?> </span></h3>
		

		<?php the_content(); ?>
		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>