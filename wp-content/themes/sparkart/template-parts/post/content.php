<div class="card">
	<div class="card-body">
		<h6 class="card-subtitle mb-2"><?php the_date(); ?></h6>
		<h5 class="card-title"><?php the_title(); ?></h5>
		<p class="card-text"><?php the_excerpt(); ?></p>
		<a href="<?php echo get_permalink() ?>" class="btn btn-primary">Read More</a>
	</div>
</div>
