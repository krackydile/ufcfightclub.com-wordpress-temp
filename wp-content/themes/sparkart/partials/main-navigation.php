<nav class="<?php if(is_front_page()){ echo 'hnav homepage-navbar'; } ?>  navbar navbar-expand-lg navbar-light">
	
			  	<a class="navbar-brand" href="<?php echo get_bloginfo('wpurl') ?>">

			  		<?php 
			  			fw_print_custom_logo();
			  		?>
				</a>
	
			  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			    <div class="close-icon py-1">✖</div>
			  </button>
			  <div id="navbarSupportedContent" class="collapse navbar-collapse">
			    <?php 
					wp_nav_menu( array(
						'theme_location'  => 'primary',
						'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
						'container'       => '',
						// 'container_class' => 'collapse navbar-collapse',
						'container_id'    => 'navbarSupportedContent',
						'menu_class'      => 'navbar-nav ml-auto',
						'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
						'walker'          => new WP_Bootstrap_Navwalker(),
					) );
				?>
				<?php
		          echo fw_get_social_list([
		            'parent_class' => 'nav nav-social-brand-container',
		            // 'item_class' => 'nav-item'
		          ]);
		        ?>
				</div>
			  <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav ml-auto">
			      <li class="nav-item active">
			        <a class="nav-link" href="#">News</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Events</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Music</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Media</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Charity</a>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Shop
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a class="dropdown-item" href="#">Action</a>
			          <a class="dropdown-item" href="#">Another action</a>
			        </div>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link " href="#">Fans</a>
			      </li>
			    </ul>
			    
			</div> -->
</nav>
