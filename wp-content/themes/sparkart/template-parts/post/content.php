<div class="card" style="background-image: url('<?php echo get_the_post_thumbnail_url() ?>')">
	<div class="card-body">
		<h6 class="card-subtitle mb-2"><?php echo get_the_date(); ?></h6>
		<h5 class="card-title">
			<a class="hi" href="<?php echo get_post_permalink() ?>">
				<?php the_title(); ?>
			</a>
		</h5>
		<!-- <p class="card-text"><?php the_excerpt(); ?></p> -->
		<!-- <a href="<?php echo get_post_permalink() ?>" class="btn btn-primary">Read More</a> -->
	</div>
</div>
