<?php 
get_header();
?>

<section class="news-tabs">
		<h3 class="block-heading text-center my-4 "><span>News </span></h3>

				<nav class="text-center mb-5">
					<?php fw_get_inner_category_tabs(); ?>
					
				</nav>
				
				<div class="tab-content container" id="pills-tabContent">
						<div class="tab-pane news-cards row fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							<?php 
								if($cat_id == null){ 
									query_posts( array ( 'category_name' => 'News', 'posts_per_page' => 6 ) );
								}
								if(have_posts()):
									while(have_posts()):
										the_post();
										get_template_part( 'template-parts/post/content', get_post_format() );

							?>
							
							<?php 
									endwhile;
								endif;
							?> 
							<div class="text-center mt-4 mb-5" style="width: 100%">
								<a class="btn btn-outline-primary ajax-load-more" href="javascript:void(0);">Load More</a>
							</div>
						</div>
						
				</div>			
	
</section>


<?php get_footer() ?>