<?php 
/**
 * Template Name: Events Landing
 */

get_header();

?>
				    	
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>Events </span></h3>
		<section class="events-hero" style="background-color: #E6E8E5;">
	
			<div class="event-hero-left">
				<div class="left-featured">
					<h2>
						Only Member of Carrie Underwood's Official Fan Club Get First Access to Tickets
					</h2>
					<div class="event-code-holder">
						<p class="event-code-heading">YOUR UNIQUE PRESALE ACESS CODE</p>
						<div class="accesscode">
							<div class="input-group my-2">
								<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value="XJ2AH98SIS3y">
								<button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-copy"></i></button>
							</div>
						</div>
					</div>
				</div>
							
			</div>
			<div class="event-hero-right">
				<img src="<?php echo get_template_directory_uri() ?>/images/carrie-small.png" class="fc-" />
			</div>
		</section>			
		

		<section class="event-list">
			<div class="row">
				<div class="col">
					<nav class="text-center mb-5">
						<select class="form-control select-pills">
						  <option data-toggle="pill" value="#pills-home" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Upcomming tour dates</option>
						  <option data-toggle="pill" value="#pills-profile" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">Fan Club Pre-sales</option>
						  
						  
						</select>
						<ul class="event-pills nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">
							<li class="nav-item">
							    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">UPCOMMING TOUR DATES</a>
							</li>
							<li class="nav-item">
							    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">FAN CLUB PRE-SALES</a>
							</li>
							<li class="nav-item">
							    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">UPCOMMING aPPEARANCES</a>
							</li>
							<li class="nav-item">
							    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">PAST EVENTS</a>
							</li>
						</ul>	
					</nav>
					<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
							<?php 
								for($j = 1; $j <=4; $j++):
							?>
							<div class="event-block">
								<h3 class="event-heading">September 2021</h3>
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
							</div>		
							<?php 
								endfor;
							?>
							<div class="text-center mt-4 mb-5">
								<a class="btn btn-outline-primary">Load More</a>
							</div>
						</div>
						<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
							<h3 class="event-heading">August 2021</h3>
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
						</div>
						<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
							<h3 class="event-heading">September 2021</h3>
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
						</div>
				</div>	
				</div>
			</div>
			
		</section>
		
	</div>
</section>




<?php get_footer() ?>