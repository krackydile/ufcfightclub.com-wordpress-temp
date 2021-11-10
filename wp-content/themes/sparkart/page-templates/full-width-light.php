<?php
/**
 * Template Name: Full Width Light
 */

get_header(); 

?>

<div class="full-width--light">

<?php
while(have_posts()):
	the_post();
	the_content();
endwhile;
?>

</div>
<?php get_footer() ?>