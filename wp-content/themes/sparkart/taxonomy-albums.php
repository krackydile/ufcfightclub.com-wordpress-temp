<?php 
get_header();
?>
				    	
<section class="banner" style="background-color: #E6E8E5;">
	
	<div class="container-fluid" >
		<div class="row">
			<div class="col-12">
				
				<div class="banner-panel-left text-center">
					<div class="left-featured">
						<img src="<?php echo get_template_directory_uri() ?>/images/carrie-fc.png" class="fc-logo">
					</div>
					<div class="floating-cta">
						<div class="social-holder">
							<ul class="list-group list-group-horizontal list-social-handles">
								<li class="list-group-item"><a href="javascript:void(0)" ><i class="fa fa-facebook "></i></a></li>
								<li class="list-group-item"><a href="javascript:void(0)" ><i class="fa fa-twitter "></i></a></li>
								<li class="list-group-item"><a href="javascript:void(0)" ><i class="fa fa-youtube "></i></a></li>
								<li class="list-group-item"><a href="javascript:void(0)" ><i class="fa fa-instagram "></i></a></li>
								<li class="list-group-item"><a href="javascript:void(0)" ><i class="fa fa-pinterest "></i></a></li>
							</ul>
						</div>
						<div class="cta-buttons">
							<a href="javascript:void(0);" class="btn btn-cta-primary mx-3">
								<span>
									
									Join the Fan Club
								</span>
							</a>
							<a href="javascript:void(0);" class="btn btn-cta-outline mx-3">Sign in</a>
						</div>
					</div>
				</div>
				<div class="banner-panel-right">
					<img src="<?php echo get_template_directory_uri() ?>/images/carrie-portrait.png" class="fc-">
				</div>
			</div>
		</div>
		
	</div>
</section>
<section class="slider">
	<div class="container-fluid">
		
		<div class="swiper-container">
				  <!-- Additional required wrapper -->
				  <div class="swiper-wrapper">
				    <!-- Slides -->
				    <div class="swiper-slide">
				    	<img src="<?php echo get_template_directory_uri() ?>/images/carrie-1.jpg" class="full-slide">
				    </div>
				    <div class="swiper-slide">
				    	<img src="<?php echo get_template_directory_uri() ?>/images/carrie-2.jpg" class="full-slide">
				    	
				    </div>
				    <div class="swiper-slide">
				    	<img src="<?php echo get_template_directory_uri() ?>/images/carrie-1.jpg" class="full-slide">
				    </div>
				    
				  </div>
				  <!-- If we need pagination -->
				  <div class="swiper-pagination"></div>

				  <!-- If we need navigation buttons -->
				  <div class="swiper-button-prev"></div>
				  <div class="swiper-button-next"></div>

				  <!-- If we need scrollbar -->
				  <!-- <div class="swiper-scrollbar"></div> -->
				</div>
			
	</div>
</section>
<section class="news-tabs py-5">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>News </span></h3>

		<div class="row">
			<div class="col">
				<nav class="text-center mb-5">
					<ul class="nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">
						<li class="nav-item">
						    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Exclusives</a>
						</li>
						<li class="nav-item">
						    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contests</a>
						</li>
					</ul>	
				</nav>
				
				<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
							<div class="text-center mt-4 mb-5">
								<a class="btn btn-outline-primary">VIEW ALL POSTS</a>
							</div>
						</div>
						<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
						<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
				</div>			
			</div>
		</div>
	</div>
	
</section>
<section class="upcomming-events py-5 ">
	<div class="container">
		<h3 class="block-heading heading-light text-center mt-4 mb-5"><span>Upcoming events</span></h3>
		<div class="row">
			<?php 
				for($i = 0; $i <=2; $i ++):
			?>
			<div class="col-lg-4 col-sm-12 col-xs-12">
				<div class="card events-card">
					<div class="card-body">
						<h6 class="card-subtitle mb-3">November 17, 2020</h6>
						<h5 class="card-title mb-3">My Gift: A Cristmas Special From Carrie Underwood to Debut December 3 on HBO Max</h5>
						<h6 class="card-subtitle mb-4 event-venue">Allentown, PA</h6>
						
						<a href="#" class="btn btn-primary">Buy Tickets</a>
						<a href="#" class="btn btn-outline-primary">Meet & Greet</a>
					</div>
				</div>
			</div>
			<?php 
				endfor;
			?>
		</div>
		<div class="text-center mt-4 mb-5">
			<a class="btn btn-outline-light">See More Dates</a>
		</div>
	</div>
	
</section>


<?php get_footer() ?>