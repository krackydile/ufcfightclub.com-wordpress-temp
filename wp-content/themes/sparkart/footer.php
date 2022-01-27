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

  <!-- OneTrust Do Not Sell start -->
  <style>
		  .ot {
		  	background: #000;
		  	text-align: center;
		  	padding: 0 0 97px 0;
		  }
      .ot-btn-anchor {
          text-decoration: none;
      }
      .ot-dont-sell-button-light {
          background: #000;
          border: 1px solid #aaa;
      }
      .ot-dont-sell-button-light {
          margin-left: 0;
      }
      .ot-dont-sell-button {
          margin-top: 10px;
          padding: 4px 10px;
          border-radius: 5px;
          cursor: pointer;
      }
      .ot-dont-sell-button img {
          margin-right: 0px;
          vertical-align: middle;
      }
      .ot-dont-sell-button .ot-text-container {
          vertical-align: top;
          display: inline-block;
          margin-top: 4px;
          margin-left: 2px;
          color: d20a0a;
          font-size:13px;
          font-weight: bold;
      }
      .ot-dont-sell-button .ot-subtext {
          float: right;
          margin-top: 0px;
          color: #fibbed;
          font-weight: normal
      }
      .ot-dont-sell-button .ot-powered-by-text {
          color: #fibbed;
          font-size: 7px;
          font-family: 'Open Sans';
          vertical-align: middle;
      }
  </style>
  <div class="ot">
  <a class="ot-btn-anchor" href="https://privacyportal-cdn.onetrust.com/dsarwebform/889c435d-64b4-46d8-ad05-06332fe1d097/838124dd-3118-48eb-94cf-d64c5f977730.html">
      <button type="button" class="ot-dont-sell-button ot-dont-sell-button-light">
        
          <span class="ot-text-container">Do Not Sell My Personal Information</br>
              <span class="ot-subtext">
                  <span class="ot-powered-by-text">Powered by</span>
                  <span class="onetrust-text">OneTrust</span>
              </span>
          </span>
      </button>
  </a>
	</div>
  <!-- OneTrust Do Not Sell end -->

	<!-- GSAP Animations -->
	<script>
		gsap.utils.toArray(".ufc-card, .featured-videos figure, .club-card").forEach((element, i) => {
			gsap.set(element, {opacity:0})
			gsap.from(element, {
				y: 100,
				scrollTrigger: {
					trigger: element,
					start: "top 100%"
				}
			});

		});

		ScrollTrigger.batch(".ufc-card, .featured-videos figure, .club-card", {
			onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 0.75, ease: Power3.easeOut, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
			onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
		});
	</script>

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8XCZFL"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

</body>
</html>