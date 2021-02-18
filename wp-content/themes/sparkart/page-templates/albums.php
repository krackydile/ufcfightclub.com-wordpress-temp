<?php 
/**
 * Template Name: Discography Page
 */

get_header();

?>
				    	
<section class="page-section">
	<div class="container">
		<h3 class="block-heading text-center mt-4 mb-5"><span>Music </span></h3>
		
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
</section>




<?php get_footer() ?>