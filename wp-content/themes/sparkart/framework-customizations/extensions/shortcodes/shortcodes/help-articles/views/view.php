<section class="sparkart-help-articles">
	<div class="container container-help-articles">
		
		<?php 
			echo $atts['help_introducation'];
			$login_articles = fw_get_db_settings_option('help_categories_login');
			if(!empty($login_articles)):
				foreach($login_articles as $loginCategoryID):
					$loginCategory = get_category($loginCategoryID);
		?>
		<section class="help-category">
			<h3><?php echo $loginCategory->name; ?></h3>
			<div class="row">
				<div class="col">
					<?php 
						$helpArticles = get_posts([
							'numberposts' => -1,
							'category' => $loginCategoryID
						]);
						foreach($helpArticles as $help):
					?>
						<p>
							<a href="<?php echo get_permalink($help->ID); ?>"><?php echo $help->post_title; ?></a>
						</p>
					<?php 
						endforeach;
					?>
				</div>
			</div>
		</section>
		<?php 	
				endforeach;
			endif;
		?>
	</div>
</section>