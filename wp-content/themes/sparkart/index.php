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
										get_template_part( 'template-parts/post/content', get_post_format() );

							?>
							
							<?php 
									endwhile;
								endif;
							?> 
 							<div class="text-center mt-4 mb-5">
								<a class="btn btn-outline-primary ajax-load-more" href="javascript:void(0);">Load More</a>
							</div>
						</div>
						
				</div>			
			</div>
		</div>
	</div>
	
</section>


<?php get_footer() ?>