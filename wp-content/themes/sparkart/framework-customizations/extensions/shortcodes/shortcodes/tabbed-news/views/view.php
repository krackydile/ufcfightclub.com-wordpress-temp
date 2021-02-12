<section class="news-tabs py-5">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span><?php echo $atts['heading'] ?></span></h3>
		<div class="row">
			<div class="col">
				<nav class="text-center mb-5">
					<ul class="nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">

						<li class="nav-item">
						    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
						</li>
						<?php 
							fw_get_selected_categories_pills($atts['displayed_categories']);
						?>
						
					</ul>	
				</nav>
				
				<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							<?php 
								fw_get_latest_posts( $atts['news_limit'] );

							?>
							
							<div class="text-center mt-4 mb-5">
								<a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" class="btn btn-outline-primary">VIEW ALL POSTS</a>
							</div>
						</div>
						<?php 
							fw_get_selected_category_news($atts['displayed_categories'], $atts['news_limit']);
						?>
						
				</div>			
			</div>
		</div>
	</div>
	
</section>