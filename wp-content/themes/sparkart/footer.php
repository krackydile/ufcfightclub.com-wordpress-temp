<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 */
?>

		</div><!-- #main -->
		<div class="site-footer">
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


	<!-- GSAP Animations -->
	<script>
		gsap.utils.toArray(".news-card").forEach((element, i) => {
			gsap.set(element, {opacity:0})
			gsap.from(element, {
				y: 100,
				scrollTrigger: {
					trigger: element,
					start: "top 100%"
				}
			});

		});

		ScrollTrigger.batch(".news-card", {
			onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 0.75, ease: Power3.easeOut, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
			onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
		});
	</script>

    <!-- Google Remarketing Pixel -->
    <script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 979879715;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
    </script>
    <noscript>
    <div style="display:inline;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/979879715/?value=0&amp;guid=ON&amp;script=0"/>
    </div>
    </noscript>


</body>
</html>
