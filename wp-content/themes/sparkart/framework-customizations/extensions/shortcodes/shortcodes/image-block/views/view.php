<section class="imageblocks">
	<div class="container">
		<h2 class="text-center"><?php echo $atts['heading']; ?></h2>
		<?php 
			if(!empty($atts['addable_columns'])){

				foreach($atts['addable_columns'] as $item){
					if($item['orientation'] == 'left-image'){
						$orientation_classes = [
							'order-first',
							'order-last',
						];
					}else{
						$orientation_classes = [
							'order-last',
							'order-first',
						];
					}
					?>
						<div class="row my-4 align-items-center">
							<div class="col-12 col-md-6 <?php echo $orientation_classes[0]; ?>">
								<?php 
									if(!empty($item['image'])):
								?>
								<img src="<?php echo $item['image']['url']?>">
								<?php 
									endif;
								?>
							</div>
							<div class="col-12 col-md-6 <?php echo $orientation_classes[1]; ?> ">
								<div class="image-text">
									<h4><?php echo $item['title']; ?></h4>
									<p><?php echo $item['description']; ?></p>
								</div>
							</div>
						</div>
					<?php
				}
			}
		?>
	</div>
</section>