<?php 
/**
 * Template Name: Media
 */

get_header();

?>
				    	
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>Media</span></h3>
		
		<div class="row">
			<div class="col">
				<nav class="text-center mb-5">
					<ul class="nav nav-pills mb-3 center-pills" id="pills-tab" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" id="pills-home-tab" href="#official-photos" role="tab" aria-controls="pills-home"  data-toggle="pill" aria-selected="true">Official Photos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" id="pills-home-tab"  data-toggle="pill" href="#official-videos" role="tab" aria-controls="pills-home" aria-selected="true">Official Videos</a>
						</li>
				</nav>
			</div>	
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="official-photos" role="tabpanel" aria-labelledby="pills-home-tab">
					<div class="row">
						<?php 
							for($i = 1; $i<=8; $i ++):
						?>
						<div class="col-md-3 col-xs-12 col-sm-12">
							<div class="media-display">
								<div class="media-thumbnail">
									<img src="<?php echo get_template_directory_uri() ?>/images/<?php echo $i ?>.jpg" class="img-responsive">
								</div>
								<div class="media-simple mt-3" style="">
									<div class="album-details text-center">
										<h6>Fan club Party</h6>
										<p><?php echo $i; ?> Photo</p>
									</div>
								</div>
							</div>
						</div>
						<?php 
							endfor;
						?>
					</div>
				</div>
				<div class="tab-pane fade " id="official-videos" role="tabpanel" aria-labelledby="pills-home-tab">
					<div class="row">
						<?php 
							for($i = 1; $i<=8; $i ++):
						?>
						<div class="col-md-4 col-xs-12 col-sm-12">
							<div class="album-display">
								<div class="album-thumbnail">
									<img src="<?php echo get_template_directory_uri() ?>/images/<?php echo $i ?>.jpg" class="img-responsive">
								</div>
								<div class="album-overlay" style="">
									<div class="album-details">
										
										<h4 class="album-title">Cry Pretty</h4>
										<h6 class="album-date">09/14/2018</h6>
										<a href="http://dev.carrieunderwood/albums/cry-pretty/" class="btn btn-outline-light">VIEW ALBUM</a>
									</div>
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




<?php get_footer() ?>