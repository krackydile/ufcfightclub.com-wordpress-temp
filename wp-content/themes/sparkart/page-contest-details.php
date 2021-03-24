<?php
get_header();
if (have_posts()):
    while (have_posts()):
        the_post();
        ?>

        <section class="page-section contest-details">
            <div class="container">
                <h3 class="block-heading text-center mt-4 mb-5"><span><?php the_title(); ?> </span></h3>

                <div id="contest-success-message" style="display: none; text-transform: uppercase"></div>
                <div id="contest-error-message" style="display: none;text-transform: uppercase"></div>

                <div id="contest-alert-info"></div>
                <div id="event-info"></div>
                <div id="contest-detail-info"></div>
                <div id="contest-form-info"></div>

            </div>
        </section>

    <?php
    endwhile;
endif;
get_footer()
?>
