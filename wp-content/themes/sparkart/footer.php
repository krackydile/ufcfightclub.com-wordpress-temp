<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 */
?>

		</div><!-- #main -->
		<div class="site-footer pt-5 pb-5">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="site-info text-center">

							<!-- <img src="<?php echo get_template_directory_uri() ?>/images/logo8.jpg"> -->
							<?php 
							
								if(fw_get_option_image_url('footer_logo')){
									echo '<img src="'.fw_get_option_image_url('footer_logo').'" class="footer-image">';
								}						
								echo fw_get_db_settings_option('footer_text');
							?>
							
							<?php do_action( 'fw_theme_credits' ); ?>
							<?php 
								wp_nav_menu( array(
								    'theme_location'  => 'footer',
								    'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
								    'container'       => '',
								    'container_class' => '',
								    'container_id'    => 'bs-example-navbar-collapse-1',
								    'menu_class'      => 'nav center-pills footer-nav',
								    'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
								    'walker'          => new WP_Bootstrap_Navwalker(),
								) );
							?>
							<!-- <ul class="nav center-pills">
								<li class="nav-item">
								    <a class="nav-link active" href="#">Privacy Policy</a>
								</li>
								<li class="nav-item">
								    <a class="nav-link" href="#">Terms of Service</a>
								</li>
								<li class="nav-item">
								    <a class="nav-link" href="#">Help</a>
								</li>
								
							</ul>	 -->
						</div><!-- .site-info -->	
							
					</div>
				</div>
			</div>
			
		</div>
		
	</div><!-- #page -->

	<?php wp_footer(); ?>
</body>
</html>
