<div class="news-card col-12 col-md-6 col-lg-4">
	<div class="news-card__content" style="background-image: url('<?php echo get_the_post_thumbnail_url() ?>')">
		<a href="<?php echo get_post_permalink() ?>">	
			<div class="card-body">
				<h6 class="card-subtitle mb-2"><?php echo get_the_date(); ?></h6>
				<h5 class="card-title">
					<?php the_title(); ?>
				</h5>
				<!-- <p class="card-text"><?php the_excerpt(); ?></p> -->
				<!-- <a href="<?php echo get_post_permalink() ?>" class="btn btn-primary">Read More</a> -->
			</div>
		</a>
	</div>
</div>
