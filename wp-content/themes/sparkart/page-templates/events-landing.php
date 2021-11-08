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

	<!-- Video header block -->
	<div class="video-header">
				<video playsInline autoPlay loop muted="muted" poster="<?php echo get_template_directory_uri(); ?>/static/videos/tour-sizzle.jpg">
			<source src="<?php echo get_template_directory_uri(); ?>/static/videos/tour-sizzle.mp4" type="video/mp4"></source>
		</video>
	</div> 

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