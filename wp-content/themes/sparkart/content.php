<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 */
?>
<div class="card">
					<div class="card-body">
						<?php 
							if(!is_help_category_article(get_post())):
						?>
						<h6 class="card-subtitle mb-2"><?php the_date(); ?></h6>
						<?php 
							endif;
						?>
						<h1 class="card-title"><?php the_title(); ?></h1>
						<div class="card-text">
							<?php the_content(); ?>
							
						</div>
						
					</div>
					
				</div> 

