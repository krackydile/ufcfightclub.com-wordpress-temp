<?php
get_header();
if (have_posts()):
    while (have_posts()):
        the_post();
        ?>

        <section class="page-section content-area single-page-content">
            <div class="container">
                <div id="contest-success-message" style="display: none; text-transform: uppercase"></div>
                <div id="contest-error-message" style="display: none;text-transform: uppercase"></div>
                <h3 class="block-heading text-center mt-4 mb-5"><span><?php the_title(); ?> </span></h3>
                <div class="site-content padded-site-content">
                <?php
                if (preg_match('/^\d+$/', $_GET['event'])) {
                    $event_details = Universe\fetch_resource('events/' . $_GET['event'], '3af65919-3f76-46c8-b905-0f952ffcbd47');
                    ?>
                    <h3>Performance in <a href="<?php echo get_bloginfo('wpurl') ?>/events-details/?event=<?php echo $event_details->event->id ?>"><?php echo htmlentities($event_details->event->venue->city) ?>, <?php echo htmlentities($event_details->event->venue->state) ?></a></h3>
                <?php } ?>

                <?php
                $contest_details = Universe\fetch_resource('contests/' . $_GET['contest'], '3af65919-3f76-46c8-b905-0f952ffcbd47');
                if($contest_details->contest){ ?>
                    <?php if ($contest_details->contest->entered): ?>
                        <div  style="text-transform: uppercase">You have been entered into the contest</div>
                    <?php endif ?>
                <div class="topic">
                    <h3><?= htmlentities($contest_details->contest->title) ?> <?php if ($contest['isEnded']): ?><span>&mdash;</span> <strong>Contest is Finished</strong><?php endif ?></h3>
                    <?php if ($contest_details->contest->event): ?><h4><a href="/<?php echo  get_bloginfo('wpurl') ?>/events-details/?event=<?php echo $event_details->event->id ?>"><?php echo $contest_details->contest->name ?></a></h4><?php endif ?>

                    <dl>
                        <dt><?php if (\DateTime::createFromFormat(\DateTime::ISO8601, $contest_details->contest->starts_at) > new \DateTime()): ?>Contest Starts<?php else: ?>Contest Started<?php endif ?></dt>
                        <dd><?php echo format_date($contest_details->contest->starts_at, 'n/d/y g:ia T', $contest_details->contest->timezone->tz) ?></dd>
                        <dt><?php if ($contest_details->contest->ended): ?>Contest Ended<?php else: ?>Contest Ends<?php endif ?></dt>
                        <dd><?php echo format_date($contest_details->contest->ends_at, 'n/d/y g:ia T', $contest_details->contest->timezone->tz) ?></dd>
                    </dl>
                </div>

                    <div class="details">
                        <?php if ($contest_details->contest->details): ?>
                            <div class="contest">
                                <h4>Contest Details</h4>
                                <div class="markup"><?php echo $contest_details->contest->details ?></div>
                            </div>
                        <?php endif ?>

                        <?php if ($contest_details->contest->rules): ?>
                            <div class="rules">
                                <h4>Contest Rules</h4>
                                <div class="markup"><?php echo $contest_details->contest->rules ?></div>
                            </div>
                        <?php endif ?>
                    </div>
                    <?php if ($contest_details->contest->available_to_customer): ?>
                        <?php if ($contest_details->contest->running): ?>
                            <form class="contest-form" id="contest-form">
                                <label>
                                    <em>Phone Number</em>
                                    <input type="text" name="phone_number" id="contest-phone-number" size="12" value="" />
                                </label><br />

                                <fieldset>
                                    <label>
                                        <input type="checkbox" name="rules" value="true" /> <em>I agree to the Contest Rules</em>
                                    </label>
                                </fieldset>
                                <input type="submit" id="contest-submit" value="Submit" />
                            </form>
                        <?php endif ?>
                    <?php endif ?>


                <?php } ?>
                </div>
            </div>
        </section>

    <?php
    endwhile;
endif;
get_footer()
?>
