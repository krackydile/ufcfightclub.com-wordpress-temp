<?php 
	$three_columns_heading = $atts['three_columns_heading'];
	$three_columns_description = $atts['three_columns_description'];
	$addable_columns = $atts['addable_columns'];

	// var_dump($three_columns_category[0]);
?>

<section class="club-cards">
	<div class="container">

		<div class="row">
			<?php 
				if(!empty($addable_columns)):
					foreach($addable_columns as $column):
						// var_dump($column);
			?>
			<div class="col-md-<?php echo $count; ?> col-sm-12 col-lg-4">
				<div class="club-card">
					<h1 class="club-card__headline"><?php echo $column['column_heading']; ?></h1>
					<p class="club-card__price"><?php echo $column['column_pricing']; ?><span><?php echo $column['column_duration']; ?></span></p>
					<a href="<?php echo $column['column_button_link']; ?>" class="club-card__button"><?php echo $column['column_button_text']; ?></a>
					<div class="club-card__image">
						<?php if(!empty($column['column_image'])): ?>
							<img src="<?php echo $column['column_image']['url'] ?>">
						<?php endif; ?>
					</div>
					<h2 class="club-card__list-heading"><?php echo $column['column_list_heading']; ?></h2>
					<ul class="club-card__list-items"><?php echo $column['column_list_items']; ?></ul>
					<?php if($column['column_list_heading_2']): ?>
						<h2 class="club-card__list-heading"><?php echo $column['column_list_heading_2']; ?></h2>
						<ul class="club-card__list-items"><?php echo $column['column_list_items_2']; ?></ul>
					<?php endif; ?>
				</div>
			</div>
			<?php 
					endforeach;
				endif;
			?>

		</div>
		
	</div>
</section>