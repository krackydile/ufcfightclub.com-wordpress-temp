<div id="primary" class="content-area ">

    <div id="content" class="site-content " role="main">
        <div class="row">
            <div class="col">
                <div class="card event-detail-card">
                    <div class="event-information-header">
                        <h3>Event Information</h3>
                    </div>
                    <div class="card-body pl-0 pr-0">
                        <div class="row">
                            <?php
                            event_detail_cards($_GET['event']);

                            // The universe-js/lib/disqus.js library that includes the Disqus comments used to set the Disqus thread URL as the current page
                            // without the query string ("/events-details/" instead of "/events-details/?event=1234"). This made Disqus associate all the
                            // following events to the same thread (/events-details/?event=6277, Disqus thread id 8514896231), effectively displaying event 6277's
                            // comments in all these pages. The universe-js code is now fixed, but I can't find a way to dissociate the extra events from thread
                            // 8514896231, so use a new identifier format (to create new threads). The events below were found using the following API query:
                            // https://disqus.com/api/3.0/threads/details.json?thread=8514896231
                            // $disqus_thread = in_array($_GET['event'], array("6233", "6234", "6235", "6285", "6287", "6286", "6284", "6288", "6289", "6295", "6296"))
                            //     ? 'universe-event-' . $_GET['event'] . '-new'
                            //     : 'universe-event-' . $_GET['event'];
                            ?>
                            <!--									<div class="col-md-7 col-sm-12">-->
                            <!--										<h2 class="large-event-date">November 17, 2021</h2>-->
                            <!--										<div class="event-detail">-->
                            <!--											<ul>-->
                            <!--												<li><strong>Venue:</strong>Barefoot country Music Festival</li>-->
                            <!--												<li><strong>City:</strong>Wildwood, NJ</li>-->
                            <!--												<li><strong>Country:</strong>United States</li>-->
                            <!--												<li><strong>Directions:</strong><a href="">Google Maps</a></li>-->
                            <!--											</ul>-->
                            <!--											<a class="btn btn-primary" href="javascript:void(0);">Buy Tickets</a>-->
                            <!--										</div>-->
                            <!--									</div>-->
                            <!-- 									<div class="col-md-5 col-sm-12">
                            										<div class="panel-contest">
                            											<div class="contest-header text-center">
                            
                            											</div>
                            											<div class="contest-body">
                            												<h4 class="contest-title">BLANK</h4>
                            												<p>Contest Edns 8/13/21 12:00am CDT</p>
                            												<a class="btn btn-outline-secondary">Enter Now</a>
                            											</div>
                            										</div>
                            									</div> -->
                        </div>
                        <!-- <div class="card-comment-event">
                            <div class="widget-comment" id="disqus_thread" data-disqus-domain="BLANK" data-disqus-identifier="<?php // echo $disqus_thread ?>" data-disqus-title="BLANK">
                                <h3>Comments</h3>

                                <div class="prompt">
                                    <ul class="prompt__actions actions">
                                        <li class="prompt__actions-item"><a class="prompt__actions-link action joincomment" href="/join">Join Today to Post Comments</a></li>
                                        <li class="prompt__actions-item"><a class="prompt__actions-link action action--link signin" href="/login?redirect=<?php // echo rawurlencode( home_url($_SERVER['REQUEST_URI']))?>">Already a Member? Please Sign In</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                        <!--								--><?php
                        //									if ( comments_open() || get_comments_number() ) {
                        //										echo '<div class="card-comment-event">';
                        //										comments_template();
                        //										echo '</div>';
                        //
                        //									}
                        //								 ?>
                        <!--							</div>-->

                    </div>


                </div>
            </div>
        </div>

    </div>
