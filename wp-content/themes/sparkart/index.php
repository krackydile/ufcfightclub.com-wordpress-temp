<?php 
get_header();
?>

<section class="news-tabs py-5">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>News </span></h3>

		<div class="row">
			<div class="col">
				<nav class="text-center mb-5">
					<?php fw_get_inner_category_tabs(); ?>
					
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
						<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
							<?php for($i = 0; $i<6; $i++): ?>
							<div class="card">
							    <div class="card-body">
								    <h6 class="card-subtitle mb-2">November 17, 2020</h6>
								    <h5 class="card-title">My Gift: A Cristmas Special From Carrie Underwood to Debut December 3 on HBO Max</h5>
								    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								    consequat. Duis aute irure dolor in </p>
								    <a href="http://dev.carrieunderwood/2021/02/02/hello-world/" class="btn btn-primary">Read More</a>
								</div>
							</div> 
 							<?php endfor; ?>
						</div>
						<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
							<?php for($i = 0; $i<6; $i++): ?>
							<div class="card">
							    <div class="card-body">
								    <h6 class="card-subtitle mb-2">November 17, 2020</h6>
								    <h5 class="card-title">My Gift: A Cristmas Special From Carrie Underwood to Debut December 3 on HBO Max</h5>
								    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								    consequat. Duis aute irure dolor in </p>
								    <a href="http://dev.carrieunderwood/2021/02/02/hello-world/" class="btn btn-primary">Read More</a>
								</div>
							</div> 
 							<?php endfor; ?>
						</div>
				</div>			
			</div>
		</div>
	</div>
	
</section>


<?php get_footer() ?>