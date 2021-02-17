<?php 
get_header();
?>

<section class="news-tabs py-5">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span><?php echo single_cat_title(); ?> </span></h3>

		<div class="row">
			<div class="col">
				<nav class="text-center mb-5">
					
					<?php fw_get_inner_category_tabs(get_queried_object()->term_id); ?>
				</nav>
				
				<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							<?php 
								if(have_posts()):
									while(have_posts()):
										the_post();
							?>
							<div class="card">
							    <div class="card-body">
								    <h6 class="card-subtitle mb-2"><?php the_date(); ?></h6>
								    <h5 class="card-title"><?php the_title(); ?></h5>
								    <p class="card-text"><?php the_excerpt(); ?></p>
								    <a href="<?php echo get_permalink() ?>" class="btn btn-primary">Read More</a>
								</div>
							</div>
							<?php 
									endwhile;
								endif;
							?> 
							<div class="text-center mt-4 mb-5">
								<a class="btn btn-outline-primary">Load More</a>
							</div>
						</div>
						
				</div>			
			</div>
		</div>
	</div>
	
</section>


<?php get_footer() ?>