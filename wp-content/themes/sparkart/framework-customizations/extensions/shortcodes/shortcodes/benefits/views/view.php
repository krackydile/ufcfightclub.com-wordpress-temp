<div class="benefits">
		<h2 class="text-center"><?php echo $atts['heading']; ?></h2>
	<div class="container">
		<div class="row">
			<div class="col">
				<ul class="list-group benefits-list">
					<?php 
						if(!empty($atts['benefit_list'])):
							foreach($atts['benefit_list'] as $key => $list_item):
					?>
				  				<li class="list-group-item">
				  					<?php echo $list_item['list']; ?>
				  					<?php 
				  						if($key+1 != count($atts['benefit_list'])):
				  					?>
					  					<hr />
					  				<?php 
					  					endif;
					  				?>
					  			</li>
				    <?php 
				  			endforeach;
				  		endif;
				    ?>
				  
				</ul>
			</div>		
		</div>

	</div>
</div>