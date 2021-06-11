<?php
/**
 * Template Name: Full Width Page
 */

get_header(); 

while(have_posts()):
	the_post();
	the_content();
endwhile;
?>
<?php get_footer() ?>