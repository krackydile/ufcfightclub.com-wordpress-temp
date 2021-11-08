<section class="sparkart-help-articles">
	<div class="container container-help-articles">

		<h3 class="block-heading mb-5"><span>Help</span></h3>
		
		<?php 
			echo $atts['help_introducation'];
			$login_articles = fw_get_db_settings_option('help_categories_login');
			$logout_articles = fw_get_db_settings_option('help_categories_logout');
			fw_display_help_articles($logout_articles, 'unprotected-help' , 'hide');
			fw_display_help_articles($login_articles, 'protected-help', 'hide');
		
		?>
	</div>
</section>