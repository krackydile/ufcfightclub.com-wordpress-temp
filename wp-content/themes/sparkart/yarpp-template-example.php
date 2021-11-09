<?php
/*
YARPP Template: JA Template
Description: A simple starter example template that you can edit.
Author: YARPP Team
*/
?>

<?php
/*
Templating in YARPP enables developers to uber-customize their YARPP display using PHP and template tags.

The tags we use in YARPP templates are the same as the template tags used in any WordPress template. In fact, any WordPress template tag will work in the YARPP Loop. You can use these template tags to display the excerpt, the post date, the comment count, or even some custom metadata. In addition, template tags from other plugins will also work.

If you've ever had to tweak or build a WordPress theme before, you’ll immediately feel at home.

// Special template tags which only work within a YARPP Loop:

1. the_score()		// this will print the YARPP match score of that particular related post
2. get_the_score()		// or return the YARPP match score of that particular related post

Notes:
1. If you would like Pinterest not to save an image, add `data-pin-nopin="true"` to the img tag.

*/
?>

<h3 class="related-news__header mb-3">More News</h3>
<div class="news-cards news-cards--related">
<?php if ( have_posts() ) : ?>
<?php
	while ( have_posts() ) :
		the_post();
		?>
		<?php if ( has_post_thumbnail() ) : ?>
<div class="news-card col-12 col-md-6 col-lg-6 col-xl-4">
	<div class="news-card__content" style="background-image: url('<?php echo get_the_post_thumbnail_url() ?>')">
		<a href="<?php the_permalink(); ?>">	
			<div class="card-body">
				<h6 class="card-subtitle mb-2"><?php echo get_the_date(); ?></h6>
				<h5 class="card-title">
					<?php the_title(); ?>
				</h5>
			</div>
		</a>
	</div>
</div>	
<?php endif; ?>
<?php endwhile; ?>
<?php else : ?>
<p>No related posts.</p>
<?php endif; ?>
</div>