<div class="secondary-navigation">
    <div class="container-fluid container-second-nav">
        <div class="row">
            <div class="col-3 d-none d-lg-block">
                <?php
                echo fw_get_social_list([
                    // 'parent_class' => 'nav',
                    // 'item_class' => 'nav-item'
                ]);
                ?>
            </div>
            <div class="col-lg-9 col-md-12 col-xs-12 col-sm-12 secondary-navigation-container">
                <!--        --><?php
                //          wp_nav_menu( array(
                //            'theme_location'  => 'secondary',
                //            'depth'           => 1, // 1 = no dropdowns, 2 = with dropdowns.
                //            'container'       => '',
                //            'container_class' => 'collapse navbar-collapse',
                //            'container_id'    => 'navbarSupportedContent',
                //            'menu_class'      => 'nav float-right',
                //            'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
                //            'walker'          => new WP_Bootstrap_Navwalker(),
                //          ) );
                //        ?>
                <div id="secondary-navigation-box">
                    <div class="navbar-cta">
					    <a href="#" class="btn btn-primary btn-mailing"><i class="fa fa-envelope"></i> Mailing List</a>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
