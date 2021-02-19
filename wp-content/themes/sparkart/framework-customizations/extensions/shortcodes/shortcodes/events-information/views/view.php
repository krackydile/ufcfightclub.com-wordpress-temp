<div id="primary" class="content-area ">
		
			<div id="content" class="site-content " role="main">
				<div class="row">
					<div class="col">
						<div class="card">
							<div class="card-body">
								event information		
								<?php 
									if ( comments_open() || get_comments_number() ) {
										echo '<div class="card-comment">';
										comments_template();
										echo '</div>';

									}
								 ?>
							</div>
							
						</div> 


					</div>
				</div>
			</div>
		
</div>