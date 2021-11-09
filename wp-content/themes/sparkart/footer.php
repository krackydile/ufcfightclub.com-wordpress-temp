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

	<!-- Mailchimp sign up button -->
	<script>
		      // Fill in your MailChimp popup settings below.
      // These can be found in the original popup script from MailChimp.
      var mailchimpConfig = {
          baseUrl: 'mc.us17.list-manage.com',
          uuid: '1ac480ebd6c74965f0d24306c',
          lid: '7635f918b5'
      };
      
      var chimpPopupLoader = document.createElement("script");
      chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
      chimpPopupLoader.setAttribute('class', 'chimpPopupLoader');
      chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');
      jQuery('body').append(chimpPopupLoader);

      var chimpPopup = document.createElement("script");
      chimpPopup.setAttribute('class', 'chimpPopup');
      chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

      document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      jQuery(".mailing-list-popup").click(function(e) {
				console.log('working now')
        document.cookie.split("; ").forEach(function(c) { if (c.toLowerCase() == "mcpopupclosed=yes") { 
          jQuery('.chimpPopupLoader').remove();
          jQuery('.chimpPopup').remove();
          jQuery('body').append(chimpPopupLoader);
          document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        } });

        jQuery('body').append(chimpPopup);
      });
      // End MailChimp popup settings.
	</script>

</body>
</html>
