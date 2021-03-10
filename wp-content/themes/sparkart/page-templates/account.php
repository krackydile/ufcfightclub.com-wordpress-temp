<?php 
/**
 * Template Name: Accounts
 */

get_header();
if(have_posts()):
	while(have_posts()):
		the_post();
?>
				    	
<section class="page-section">
	<div class="container">
		<div class=" mt-4 mb-5"><span>&nbsp; </span></div>

		<div id="primary" class="content-area ">

			<div id="content" class="site-content " role="main">
				<div class="row">
					<div class="col">
						<div class="card event-detail-card">
							
							<div class="card-body pl-0 pr-0">
								<div class="row">
                                    
									<div class="col-md-7 col-sm-12">

										<div class="event-information-header account-header">
											<h1>My Account</h1>
										</div>
										<div class="event-detail account-content-left">
											<h3>Update your account</h3>

											<form class="account-form">
											  <div class="form-group">
											    <label for="current-email " class="text-capitalize">Current Email</label>
											    <input type="text" class="form-control" id="current-email" >
											  </div>
											  <div class="form-group">
											    <label for="new-email " class="text-capitalize">New Email Address</label>
											    <input type="text" class="form-control" id="new-email" >
											  </div>
											  <div class="form-group">
											    <label for="new-email " class="text-capitalize">First name</label>
											    <input type="text" class="form-control" id="new-email" >
											  </div>
											  <div class="form-group">
											    <label for="last-email " class="text-capitalize">Last Name</label>
											    <input type="text" class="form-control" id="last-email" >
											  </div>
											  <div class="form-group">
											    <label for="phone-number " class="text-capitalize">Phone number</label>
											    <input type="text" class="form-control" id="phone-number" >
											  </div>
											  <div class="form-group">
											    <label for="new-password " class="text-capitalize">new password</label>
											    <input type="password" class="form-control" id="new-password" >
											  </div>
											  <div class="form-group">
											    <label for="repeat-new-email " class="text-capitalize">repeat new password</label>
											    <input type="password" class="form-control" id="repeat-new-email" >
											  </div>
											  <div class="form-group">
											    <label for="current-password " class="text-capitalize">Current password</label>
											    <input type="password" class="form-control" id="current-password" >
											  </div>
											  
											  <button type="submit" class="btn btn-primary">Submit</button>
											</form>
										</div>
										<div class="event-detail account-content-left">
											<h3>Shipping Information</h3>
											<p class="shipping-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
											<form class="account-form">
											  
											  <div class="form-group">
											    <label for="new-email " class="text-capitalize">First name</label>
											    <input type="text" class="form-control" id="new-email" >
											  </div>
											  <div class="form-group">
											    <label for="last-email " class="text-capitalize">Last Name</label>
											    <input type="text" class="form-control" id="last-email" >
											  </div>
											  <div class="form-group">
											    <label for="street-address " class="text-capitalize">Street Address</label>
											    <input type="text" class="form-control" id="street-address" >
											  </div>
											  <div class="form-group">
											    <label for="apt-unit" class="text-capitalize">APT./Unit/Suite</label>
											    <input type="text" class="form-control" id="apt-unit" >
											  </div>
											  <div class="form-group">
											    <label for="apt-unit" class="text-capitalize">APT./Unit/Suite</label>
											    <input type="text" class="form-control" id="apt-unit" >
											  </div>
											  <div class="form-group">
											    <label for="city" class="text-capitalize">City</label>
											    <input type="text" class="form-control" id="city" >
											  </div>
											  <div class="form-group">
											    <label for="apt-unit" class="text-capitalize">Country</label>
											    <select class="form-control">
											    	<option>United States</option>
											    </select>

											  </div>
											  <div class="form-group">
											    <label for="state" class="text-capitalize">State</label>
											    <input type="text" class="form-control" id="state" >
											  </div>
											  <div class="form-group">
											    <label for="zip" class="text-capitalize">Zip Code</label>
											    <input type="text" class="form-control" id="zip" >
											  </div>
											  <div class="form-group">
											    <label for="size" class="text-capitalize">T-shirt Size</label>
											    <input type="text" class="form-control" id="size" >
											  </div>
											  
											  <button type="submit" class="btn btn-primary">Submit</button>
											</form>
										</div>
									</div>
									<div class="col-md-5 col-sm-12">
										<div class="panel-contest">
											<div class="contest-header text-center">
												Your subscription
											</div>
											<div class="contest-body">
												<div class="account-subscription-head">
													
													<h4 class="contest-title  text-capitalize">Subscription</h4>
													<p>Carrie Underwood fan club</p>
												</div>
												<div class="account-subscription-head">
													
													<h4 class="contest-title text-capitalize">Package Status</h4>
													<p>Shipped on May 22,</p>
												</div>
												<div class="account-subscription-head">
													
													<h4 class="contest-title text-capitalize">Subscription Starts</h4>
													<p>12/26/2021</p>
												</div>
												<div class="account-subscription-head">
													
													<h4 class="contest-title text-capitalize">Subscription Expires</h4>
													<p>12/26/2021</p>
												</div>
												
											</div>
										</div>
										<div class="panel-contest account-subscription-upgrade">
											<div class="contest-header text-center">
												Upgrade Subscription
											</div>
											<div class="contest-body">
												<div class="row">
													<div class=" col-sm-12 ">
														<div class="main-card">
															<h3 class="utransform column-heading">One Year Membership</h3>
																<p></p>
																<h1 class="column-text-price">$24.99</h1>
																<a title="Join NOw" href="https://url.com" class="utransform btn btn-primary">Join NOw</a>
														</div>
														<p class="text-center additional mt-2"><a href=""></a></p>
													</div>
													<div class="col-sm-12 ">
														<div class="main-card">
															<h3 class="utransform column-heading">One Year Membership</h3>
																<p>* Donation to C.A.T.S. Foundation</p>
																<h1 class="column-text-price">$29.99</h1>
																<a title="JOIN NOW + DONATE" href="javascript:void(0);" class="utransform btn btn-primary">JOIN NOW + DONATE</a>
														</div>
														<p class="text-center additional mt-2"><a href="http://catsfoundation.com">Learn more aobut The C.A.T.S Foundation</a></p>
													</div>
										
												</div>
											</div>

										</div>	
									</div>
								</div>
								
							</div>

						</div>


					</div>
				</div>
			</div>

</div>

		
	</div>
</section>




<?php 
		endwhile;
	endif;
get_footer() 
?>