<?php 
/**
 * Template Name: No Heading
 */

get_header();
if(have_posts()):
	while(have_posts()):
		the_post();
?>
				    	
<section class="page-section">
	<div class="container">
		<div class=" mt-4 mb-5"><span>&nbsp; </span></div>

		<?php the_content(); ?>
		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>