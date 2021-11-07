<?php 
/**
 * Template Name: Fan Club Party (Test)
 */

get_header();

?>
<style>

  .stream .container {
    max-width: 1800px;
  }

  .stream__header {
    text-align: center;
  }

  .stream__header h3 {
    margin-bottom: 0 !important; 
  }

  .stream__header h4 {
    margin-top: 0;
    font-size: 13px;
    font-weight: 600;
    color: #49504a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .stream__footer {
    width: 100%;
    clear: both;
    text-align: center;
    padding: 2rem 0;
  }

	.stream__vimeo {
	  background: #fff;
	  -webkit-box-shadow: -2px 4px 12px -6px rgb(0 0 0 / 75%);
	  -moz-box-shadow: -2px 4px 12px -6px rgb(0 0 0 / 75%);
	  box-shadow: -2px 4px 12px -6px rgb(0 0 0 / 75%);
	  display: flex;
	  flex-flow: row wrap;
	}

	.vimeo__main {
	    flex: 66%;
	}

	.vimeo__main iframe {
	  height: 100% !important;
	}

	.vimeo__main img {
	  width: 100%;
	  display: block !important; 
	}

  .vimeo__sidebar {
    flex: 33%;
    background: #fff;
  }

  .vimeo__sidebar iframe {
    width: 100% !important;
  }

  .vimeo__sidebar:after {
    width: 100%;
    display: block;
    content: "";
  }

  .selfie {
    background: #6e8776;
    padding-bottom: 5rem;
    padding-top: 5rem;	
  }

  @media (max-width: 700px) {
		.block-heading {
			font-size: 32px;
		}

  	.selfie {
	    padding-top: 3rem;
	    padding-left: 1rem;
	    padding-right: 1rem;
	  }

    .selfie .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

	.selfie .wrapper {
	  max-width: 920px;
	  margin-left: auto;
	  margin-right: auto;
	}

	.selfie h3 {
	  text-align: center;
	  margin-top: 0;
	  font-size: 31px;
	  font-weight: bold;
	  text-transform: uppercase;
	  color: #fff;
	}

	.selfie h4 {
	  margin-top: 2rem;
	  margin-bottom: 1rem;
	  color: #fff;
	  font-weight: bold;
	  font-size: 20px;
	}

	.selfie .prompt {
	  border-radius: 25px;
	  background: #f0f4f4;
	}

	.selfie .prompt iframe {
	  width: 100%;
	  border: 0;
	  min-height: 400px;
	}

	.selfie .prompt p {
	  color: #8695a2;
	  margin: -10px 0 0 0;
	}

	.selfie .prompt p a {
	    color: #8695a2;
	    text-decoration: underline;
	  }

	.selfie .prompt h4 {
	  font-size: 1.8rem;
	  font-weight: 400 !important;
	  color: #20303e;
	  text-transform: capitalize;
	} 

	.selfie__entries {
		text-align: center;
	}

	.selfie__entries var {
	  font-style: normal;
	  font-weight: 400;
	}

	.selfie__entries .frame-wrapper {
	  /* background: url("/images/page-fcp20/loader.gif") center no-repeat; */
	}

	.selfie__entries iframe {
	  width: 100%;
	  border: 0;
	  overflow-y: scroll !important;
	  min-height: 600px;
	}

	.selfie__entries  ul {
	  width: 100%;
	  max-height: 60rem;
	  list-style-type: none;
	  display: block;
	  overflow-y: scroll;
	  padding: 0;
	  margin: 0;
	}

	.selfie__entries li {
	  width: 10%;
	  display: inline-block;
	  padding: 0;
	  margin: 0;
	  background-position: center;
	  background-repeat: no-repeat;
	  background-size: cover;
	}

	.selfie__entries li img {
	  display: block;
	  margin: 0;
	}

	.raffle .container {
		max-width: none;
		padding: 0;
	}

	.raffle img {
		width: 100%;
	}

	.page-section {
		margin-bottom: 0;
	}

	.banner h1,
	.banner h2,
	.banner h3,
	.banner h4 {
		line-height: 1.2;
	}

  .widget-alert {
    background: #FDF6EE;
    border-radius: 20px;
    box-shadow: -2px 4px 12px -6px rgb(0 0 0 / 75%);
    -webkit-box-shadow: -2px 4px 12px -6px rgb(0 0 0 / 75%);
    -moz-box-shadow: -2px 4px 12px -6px rgba(0, 0, 0, 0.75);
    padding: 67px 18px 51px 18px;
    text-align: center;
  }

  .widget-alert h3 {
    color: #49504a;
    text-transform: none;
  }

  @media (max-width: 320px) {
    .block-heading {
      font-size: 27px;
    }

    .stream__footer p {
      font-size: 0.75rem;
    }

    .selfie .prompt iframe {
      min-height: 700px;
    }
  }

  @media (max-width: 767px) {
    a.nav-link.sign-out {
      display: none;
    }

    .selfie h3 {
      font-size: 21px;
      line-height: 1.1;
    }

    .selfie .prompt iframe {
      min-height: 600px;
    }

    #secondary-navigation-box .float-right {
      float: none;
    }
    
    .secondary-navigation .container-fluid.container-second-nav {
      padding-left: 20px;
      padding-right: 20px;
    }

    .secondary-navigation .container-fluid.container-second-nav .nav-item a {
      font-size: 10px;
    }
  }

	@media (max-width: 767px) {
		#banner-cta-mobile {
			display: block !important;
		}
	}

  @media (max-width: 991px) {
    .banner .left-featured h1 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1081px) {
	  .stream .container {
	    width: 95%;
	  }

  	.vimeo__sidebar iframe {
      height: 100% !important;
    }
  }

  @media (max-width: 1080px) {
  	.vimeo__sidebar {
	    flex: 100%;
	  }

  	.vimeo__main,
  	.vimeo__sidebar {
	    flex: 100%;
	  }
  }
</style>

<section class="page-section">

	<!--div class="stream-prompt pre">
		<section class="banner" style="background-color: #E6E8E5;">	
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="banner-panel-left text-center">
							<div class="left-featured">
									<h2>This Page is Currently Unavailable</h2>
									<p>Please check back on Tuesday, June 8 at 4PM CT.</p>
									<div class="cta-buttons">
										<a href="#" class="btn btn-cta-primary"><span>Refresh Page</span></a>
									</div>
							</div>
						</div>
						<div class="banner-panel-right">
							<div id="banner-cta-mobile">
									<h3>This Page is Currently Unavailable</h3>
									<p>Please check back on Tuesday, June 8 at 4PM CT.</p>
									<div class="cta-buttons">
										<a href="#" class="btn btn-cta-primary"><span>Refresh Page</span></a>
									</div>
							</div>
							<img src="" class="fc-">
						 </div>
					</div>
				</div>
			</div>
		</section>
	</div-->

	<div class="stream-prompt after" style="display:none">
		<section class="banner" style="background-color: #FDF6EE; padding-bottom: 42px;">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="banner-panel text-center">
							<img src="">
						 </div>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div class="stream-active">

		<div class="stream">
			<div class="container">
		    <section class="stream__header">

		      <h3 class="block-heading text-center mt-4 mb-5"><span>Virtual Fan Club Party</span></h3>
		      <h4>Join Your Fellow Care Bears and Tune-In Below:</h4>

		    </section>

		    <section class="stream__vimeo">

		      <div class="vimeo__main">
		        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://vimeo.com/event/" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
		      </div>
		      <div class="vimeo__sidebar">
		        <iframe src="https://vimeo.com/event/1057345/chat/7ca5deb3df" width="400" height="600" frameborder="0"></iframe>
		      </div>

		    </section>

		    <section class="stream__footer">

		      <p>If you are experiencing technical difficulty, please contact support at <a href="mailto:" target="_blank"></a>.</p>

		    </section>
		  </div>
		</div>

		<div class="selfie">
			<div class="container">
		    <h3>Show Us Your Virtual Fan Club Party Look</h3>

		    <section class="selfie__form">
		      
		      <div class="prompt">

		        <div id="wufoo-q1hooy8202h8rs8"></div>

		      </div>
		    </section>

		    <section class="selfie__entries">

		      <h4>Care Bear Selfies:</h4>

		      <div class="frame-wrapper">
		        <iframe id="fcp-selfies" src="https://sparkart.smugmug.com" frameborder="0"></iframe>
		      </div>

		    </section>
			</div>
		</div>

		<div class="raffle">
			<div class="container">

		    <section class="raffle__slideshow">

		      <img src="" alt="Thanks for Joining the Party!" />

		    </section>

			</div>

		</div>

	</div>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js" integrity="sha512-nhY06wKras39lb9lRO76J4397CH1XpRSLfLJSftTeo3+q2vP7PaebILH9TqH+GRpnOhfAGjuYMVmVTOZJ+682w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var customer_id = localStorage.universeCustomerId; // data.customer.id;
    var customer_first_name = localStorage.universeCustomerFirstName; // data.customer.first_name;
    var customer_last_name = localStorage.universeCustomerLastName; // data.customer.last_name;
    var customer_data = {
      'id': customer_id,
      'fname': customer_first_name,
      'lname': customer_last_name,
      'timestamp': dateTime
    }

    // Refresh page
    $('.cta-buttons .btn').click(function(e){
    	e.preventDefault();
    	location.reload();
    });	

    // Raffle submission
    if( $.cookie('entered') === undefined && customer_data.id != undefined ){
      $.ajax({
        type: 'POST',
        url: 'https://hooks.zapier.com/hooks/catch/12147/boj5ebs',
        data: customer_data,
        success: function(){
          // set cookie that user has entered
          console.log(customer_data);
          console.log('raffle entered');
          $.cookie('entered', true);
        }
      });
    }

    // Selfie submission
    (function(d, t) { var s = d.createElement(t), options = { 
      'userName':'sparkartoak', 
      'defaultValues':'field8=' + customer_id + '&field5=' + customer_first_name + '&field6=' + customer_last_name,
      'formHash':'q1hooy8202h8rs8', 
      'autoResize':true, 
      'resizeDone': function(){
        console.log('Wufoo form resized')
      },
      'async':true, 
      'host':'wufoo.com', 
      'header':'hide', 
      'footer':'hide', 
      'height':'220', 
      'ssl':true 
    }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { q1hooy8202h8rs8 = new WufooForm(); q1hooy8202h8rs8.initialize(options); q1hooy8202h8rs8.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script');

    // Selfie uploaded
    $(window).on('hashchange', function () {
      if( window.location.hash == "#uploaded" && $.cookie('uploaded') === true ) {
  			console.log('selfie uploaded');
      	$('.selfie__form').remove();
    	}
      if( window.location.hash == "#uploaded" && $.cookie('uploaded') === undefined ) {
        console.log('selfie uploaded');
        $.cookie('uploaded', true);
        $('.selfie__form').html("<div class='widget-alert success'><h3>Thanks for submitting your Virtual Fan Club Party selfie!</h3><p>Your photo will be reviewed before it is posted to the site. Please allow up to 5 minutes for your photo to appear.</p><p>Enjoy the party!</p></div>");
        setTimeout(function(){ $('.selfie__form .widget-alert').slideUp() }, 25000);
      }
    });
		if( $.cookie('uploaded') ) {
			console.log('selfie uploaded');
    	$('.selfie__form').remove();
  	}
    if( window.location.hash == "#uploaded" ) {
      console.log('selfie uploaded');
      $.cookie('uploaded', true);
      $('.selfie__form').remove();
    }

    // Selfie wll
    var timer;
    timer = setInterval(refreshSelfies, 150000);
    function refreshSelfies() {
        $("#fcp-selfies").attr("src", function(index, attr){ 
          return attr;
        });
    }
</script>

<?php get_footer() ?>