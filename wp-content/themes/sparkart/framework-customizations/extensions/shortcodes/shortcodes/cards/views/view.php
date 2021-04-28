<?php 
	$three_columns_heading = $atts['three_columns_heading'];
	$three_columns_description = $atts['three_columns_description'];
	$addable_columns = $atts['addable_columns'];

	// var_dump($three_columns_category[0]);
?>

<section class="payment-cards">
	<div class="container">

		<div class="row mb-5">
		   <div class="col-md-12 col-xs-12">
		    <h1 class="utransform text-center main-head"><?php echo $three_columns_heading; ?></h1>
		    <!-- <p class=""><?php echo $three_columns_description; ?></p> -->
		   </div>

		</div>
		<div class="row">
			<?php 
				if(!empty($addable_columns)):
					$count = 12/count($addable_columns);
					foreach($addable_columns as $column):
						// var_dump($column);
			?>
			<div class="col-md-<?php echo $count; ?> col-sm-12 ">
				<div class="main-card">
					<h3 class="utransform column-heading"><?php echo $column['column_heading']; ?></h3>
						<p ><?php echo $column['column_sub_heading']; ?></p>
						<h1 class="column-text-price"><?php echo $column['column_text']; ?></h1>
						<a title="<?php echo $column['column_link_title'];?>" href="<?php echo $column['column_link_url']; ?>" class="utransform btn btn-primary"><?php echo $column['column_link_title'];?></a>
				</div>
				<p class="text-center additional mt-2"><a href="<?php echo $column['three_columns_extra_link']; ?>"><?php echo $column['three_columns_extra']; ?></a></p>
			</div>
			<?php 
					endforeach;
				endif;
			?>

		</div>
		
	</div>
</section>