<?php 
get_header();
if(have_posts()):
	while(have_posts()):
		the_post();
?>
				    	
<section class="page-section">

	<?php if (has_post_thumbnail()) : ?>
	<?php
		$mobile_image = get_field('mobile_featured_image');
		if ($mobile_image) {
			$mobile_image_full = $mobile_image['sizes'][ 'large' ];
		}
	?>
	<!-- Page header image -->
	<div class="image-header">
			<picture>
			<?php if ($mobile_image) : 
				?><source srcset="<?php echo esc_url($mobile_image_full) ?>" media="(max-width: 600px)"/><?php endif; ?>
				<img src="<?php the_post_thumbnail_url("full"); ?>" alt="<?php ; ?>"/>
			</picture>
		<?php if (get_field('featured_image_link')) : ?><a href="<?php the_field('featured_image_link'); ?>" class="image-header__link"></a><?php endif; ?>
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