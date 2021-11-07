<?php 
get_header();
if(have_posts()):
    while(have_posts()):
        the_post();
?>
                        
<section class="page-section">
    <div class="container">
        <h3 class="block-heading text-center mt-4 mb-5"><span><?php the_title(); ?> </span></h3>
        

        <?php the_content(); ?>
        


    </div>
</section>


<section class="upcoming-events py-5 ">
    <div class="container">
        <h3 class="block-heading heading-light text-center mt-4 mb-5"><span>Upcoming Events</span></h3>
        <?php 
            homepage_event_cards();
            homepage_more_events();
        ?>
        

    </div>
    
</section>


<?php 
        endwhile;
    endif;
get_footer() 
?>