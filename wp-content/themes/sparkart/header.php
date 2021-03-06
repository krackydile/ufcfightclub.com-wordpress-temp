<?php
/**
 * The Header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<base href="<?php echo get_template_directory_uri() ?>/">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="stylesheet" href="https://use.typekit.net/zdp3bfg.css">

	<!--GSAP-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>

	<?php
	$favicon = ( function_exists( 'fw_get_db_settings_option' ) ) ? fw_get_db_settings_option('favicon') : '';
	if( !empty( $favicon ) ) :
	?>
	<link rel="icon" type="image/png" href="<?php echo $favicon['url'] ?>">
	<?php endif ?>
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N8XCZFL');</script>
  <!-- End Google Tag Manager -->
	
</head>

<body <?php body_class(); ?>>

<div id="page" class="hfeed site">
	

	<header class="site-header sticky-top site-header-no-shadow">
		<?php 
			get_template_part('partials/main', 'navigation');
			if(!is_front_page()){

				get_template_part('partials/sub', 'navigation');
			}
		?>
			
		
	</header>	
		<?php 
			if(!is_front_page()):
		?>
		<div class="container hide" id="expired-notification">
			<div class="row">
				<div class="col">
					<div class="alert alert-info alert-expired">
						<h2>YOUR SUBSCRIPTION HAS EXPIRED</h2>
						<h5>Click <a href="<?php echo get_bloginfo('wpurl') ?>/benefits" id="#renew-link">here</a> to renew your membership</h5>
					</div>			
				</div>
			</div>
		</div>
		<?php 
			endif;
		?>
	<div id="main"  class="site-main">
		