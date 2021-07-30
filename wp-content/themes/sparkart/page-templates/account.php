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

			<div id="content" class="site-content account-content" role="main">
				<div class="row">
					<div class="col">
						<div class="card event-detail-card">

							<div class="card-body pl-0 pr-0">
                                <div id="success-message" style="display: none; text-transform: uppercase"></div>
                                <div id="error-message" style="display: none;text-transform: uppercase"></div>
								<div class="row">
									<div class="col-md-7 col-sm-12">
										<div class="event-information-header account-header">
											<h1>My Account</h1>
										</div>
										<div class="event-detail account-content-left">
											<h3>Update your account</h3>

											<form class="account-form" id="account-form" action="/account">
											  <div class="form-group">
											    <label for="current-email" class="text-capitalize">Current Email</label>
											    <input type="text" class="form-control" name="current_email" id="current-email" disabled="disabled" >
											  </div>
											  <div class="form-group">
											    <label for="new-email" class="text-capitalize">New Email Address</label>
											    <input type="text" class="form-control" name="email" id="new-email" autocomplete="off">
											  </div>
											  <div class="form-group">
											    <label for="first-name" class="text-capitalize">First name</label>
											    <input type="text" class="form-control" name="first_name" id="first-name" >
											  </div>
											  <div class="form-group">
											    <label for="last-name " class="text-capitalize">Last Name</label>
											    <input type="text" class="form-control" name="last_name" id="last-name" >
											  </div>
											  <div class="form-group">
											    <label for="phone-number " class="text-capitalize">Phone number</label>
											    <input type="text" class="form-control" name="phone_number" id="phone-number" >
											  </div>
											  <div class="form-group">
											    <label for="new-password " class="text-capitalize">new password</label>
											    <input type="password" class="form-control" name="password" id="new-password" >
											  </div>
											  <div class="form-group">
											    <label for="repeat-new-password " class="text-capitalize">repeat new password</label>
											    <input type="password" class="form-control" name="password_confirmation" id="repeat-new-password" >
											  </div>
											  <div class="form-group">
											    <label for="current-password " class="text-capitalize">Current password</label>
											    <input type="password" class="form-control" name="current_password" id="current-password" >
											  </div>

											  <button type="submit" class="btn btn-primary" id="account-submit">Submit</button>
											</form>
										</div>
										<div class="event-detail account-content-left">
											<h3>Shipping Information</h3>
											<p class="shipping-text">Note, you can only update your shipping information and t-shirt size before for future shipments (renewals).
                                                <br> If you need to change a recent order, please contact support.</p>
											<form class="account-form" id="shipping-form" action="/account/shipping">

											  <div class="form-group">
											    <label for="shipping-first-name " class="text-capitalize">First name</label>
											    <input type="text" class="form-control" name="first_name" id="shipping-first-name" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-last-name " class="text-capitalize">Last Name</label>
											    <input type="text" class="form-control" name="last_name" id="shipping-last-name" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-street-address " class="text-capitalize">Street Address</label>
											    <input type="text" class="form-control" name="address" id="shipping-street-address" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-apt-unit" class="text-capitalize">APT./Unit/Suite</label>
											    <input type="text" class="form-control" name="address_2" id="shipping-address-2" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-city" class="text-capitalize">City</label>
											    <input type="text" class="form-control" name="city" id="shipping-city" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-country" class="text-capitalize">Country</label>
											    <select class="form-control" name="country" id="shipping-country">
											    </select>

											  </div>
											  <div class="form-group">
											    <label for="shipping-state" id="shipping-state-label" class="text-capitalize">Province/Region</label>
											    <input type="text" class="form-control" name="state" id="shipping-state" >
											  </div>
											  <div class="form-group">
											    <label for="shipping-zip-code" id="shipping-zip-code-label" class="text-capitalize">Postal Code</label>
											    <input type="text" class="form-control" name="postal_code" id="shipping-zip-code" >
											  </div>
                                                <div id="preferences"></div>

											  <button type="submit" class="btn btn-primary" id="shipping-submit">Submit</button>
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
													<p id="plan-name"></p>
												</div>
												<div class="account-subscription-head">

													<h4 class="contest-title text-capitalize">Package Status</h4>
													<p id="shipped-on"></p>
												</div>
												<div class="account-subscription-head">

													<h4 class="contest-title text-capitalize">Subscription Starts</h4>
													<p id="plan-start"></p>
												</div>
												<div class="account-subscription-head">

													<h4 class="contest-title text-capitalize">Subscription Expires</h4>
													<p id="plan-end"></p>
												</div>

											</div>
										</div>
										<div class="panel-contest account-subscription-upgrade">
											<div class="contest-header text-center">
												Upgrade Subscription
											</div>
											<div class="contest-body">
												<div class="row">

                                                    <div id="subscription-plan"></div>

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
