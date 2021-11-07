<?php 
get_header();
if(have_posts()):
    while(have_posts()):
        the_post();
?>
                        
<section class="page-section">
    <div class="container">

        <div class="mt-4 mb-5">
          <span>&nbsp;</span>
        </div>

        <div id="content" class="site-content">
          <div class="card">
          <div class="card-body">
            <div class="intro">

              <h1 class="card-title">Download Your Meet & Greet Photo</h1>
              <div class="card-text">
                <p>To access your photo, enter the password on your photo card and the image number assigned to you. Once downloaded, share your photo with family & friends and on social media!</p>
              </div>

              <form id="photo-finder" method="post">
              <div class="form">

                  <label><em class="text-capitalize">Your Password</em> <input class="form-control" type="text" name="password" /></label><br />
                  <label><em class="text-capitalize">Your Image Number</em> <input class="form-control" type="text" name="id" /></label><br />
                  <fieldset><label><input type="checkbox" name="terms" /><em>I agree to the <a target="_blank" href="/terms">Terms & Conditions</a></label></em></label></fieldset>
                  <button class="btn btn-primary submit" type="submit">Find Your Photo</button>

              </div>
              </form>

              <p><em>Please note it can take 24-72 hours for your photo to become available on this site.</em> Having trouble? E-mail <a href="mailto:"></a>.</p>

            </div>

            <div id="photo" style="display:none">

                <ul class="images">
                </ul>

                <!-- <div id="banner">
                    <a href=""><img src="/wp-content/uploads/2021/05/banner-shop-now.jpg" alt="Start Shopping" /></a>
                </div> -->

                <p>All rights reserved. Please read our <a href="/privacy" title="Privacy Policy">Privacy Policy</a> & <a href="/terms" title="Terms of Service">Terms of Service</a>.</p>

            </div>
        </div>
        </div>

        <!-- MG PHOTOS -->
        <ul id="albums" style="display:none">
        </ul>

      </div>

    </div>
</section>

<style>
  .card {
    text-align: center;
  }

  .form {
    padding: 42px 54px 54px 54px;
  }

  .form input[type="checkbox"] {
    margin-right: 10px;
  }

  .form label em a {
    color: #6E8776;
    text-decoration: underline;
  }

  .form label em {
    color: #6E8776;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0px;
    font-style: normal;
  }

  .form .form-control {
    border-radius: 12px;
    background: #E6EBEB;
    border: none;
    font-weight: 600;
  }

  #photo .images {
    padding-left: 0;
    list-style-type: none;
  }

  #photo .images h1 {
    display: none;
  }

  #photo .images h2 {
    font-weight: bold;
  }

  #photo .images img {
    display: block;
    margin: 0 auto 40px auto;
  }

  #photo .images .btn,
  #photo #banner {
    margin-bottom: 20px;
  }

</style>

<script>
jQuery(document).ready(function($) {
  
  function photoFinder2017(layout) {      
      if( layout ) {
        var finderLayout = layout;
      } else {
        var finderLayout = 'album';
      }

      // Cache Elements Used In Event
      var $form = $('#photo-finder');
      var $submit = $form.find('button.submit');
      var $id = $form.find('input[name="id"]');
      var $password = $form.find('input[name="password"]');
      var $imgContainer = $('#photo div.image');
      var $imgsContainer = $('#photo ul.images');
      var $download = $('#photo a.download');
      var $facebookShare = $('#photo a.facebook');
      var mgAlbums = [];

      // Build array of album passwords and slugs
      $('#albums h1').each(function(){

          mgAlbums.push({
              password: $(this).text(),
              albumSlug: $(this).siblings('strong').text()
          });

      });

      // Bind Button Click
      $form.bind('submit', function(e) {

          e.preventDefault();

          // Agree to ToC
          var $checkbox = $('input[type="checkbox"]');
          var $fieldset = $checkbox.parents('fieldset');
          if( $checkbox.prop('checked') ){
            $fieldset.removeClass('error');
          } else {
            $fieldset.addClass('error');
            return false;
          }

          // Grab values
          var photoID = $id.val();
          var password = $password.val().toUpperCase().replace(/ /g,''); // Array is case-sensitive

          if (password == '' || !$.isNumeric(photoID)) {

              if (password == '') {
                  if( $password.siblings('small').length > 0 ){
                      $password.siblings('small').text('Enter a password');
                  } else {
                      $password.parent('label').addClass('error').append('<small>Enter a password</small>');
                  }
              } else {
                  $password.siblings('small').remove();
              }

              if (!$.isNumeric(photoID)) {
                  if( $id.siblings('small').length > 0 ){
                      $id.siblings('small').text('Enter a number');
                  } else {
                      $id.parent('label').addClass('error').append('<small>Enter a number</small>');
                  }
              } else {
                  $id.siblings('small').remove();
              }

          } else {

              // Check: Password
              // Password Passes
              var result = $.grep(mgAlbums, function(n,i){ return n.password == password; });

              if (result.length > 0) {

                  var photoURL = '/smug-mug/?smugmug=images&albumkey=' + result[0].albumSlug;

                  // Remove Password Error Indicator
                  $password
                      .parent('label').removeClass('error').end()
                      .siblings('small').remove();

                  $submit.removeClass('error');

                  $submit.text('Finding...').addClass('loading');

                  // Removing Photo ID Error Indicator
                  $id
                      .parent('label').removeClass('error').end()
                      .siblings('small').remove();

                  // Remove Image if One Already Exists
                  $imgsContainer.children('li').remove();
                  $('#photo').slideUp();
                  $facebookShare.removeAttr('style');

                  $.ajax({
                    url: photoURL,
                    success: function(data) {
                      var heading = "";
                      var thumbnail = "";
                      var original = "";
                      var matched = false;

                      for(var i=0; i < data.Response.AlbumImage.length; i++){
                          if( data.Response.AlbumImage[i].Title == photoID) {
                            heading = data.Response.AlbumImage[i].Title;
                            thumbnail = data.Response.AlbumImage[i].Uris.ImageSizes.ImageSizes.SmallImageUrl;;
                            original = data.Response.AlbumImage[i].Uris.ImageSizes.ImageSizes.LargestImageUrl;
                            matched = true;
                          }
                      };

                      if( matched ){

                          var li = "<li>";
                          li = li + '<h1>' + heading + '</h1>';
                          li = li + '<h2 class="card-title">Found Your Meet & Greet Photo!</h2>';
                          li = li + '<img src="' + thumbnail + '" />';
                          li = li + '<a class="btn btn-primary original download" href="' + original + '" target="_blank">Download</a>';
                          li = li + '<p>To download the full resolution image, please click the "Download" button below your photo.</p>';
                          li = li + '</li>';
                          $('#photo .images').html(li);

                          $('.intro').slideUp("slow");
                          $submit.text('Found Your Photo!');
                          $submit.removeClass('loading');
                          $('#photo').slideDown("slow");

                      } else {

                          $submit.text('Find Your Photo');
                          $submit.removeClass('loading');
                          if( $id.siblings('small').length > 0 ){
                              $id.append('small').text('Number is invalid');
                          } else {
                              $id.parent('label').addClass('error').append('<small>Number is invalid</small>');
                          }

                      }
                    }
                  });

              // Password Fails
              } else {

                  if( $password.siblings('small').length > 0 ){
                      $password.siblings('small').text('Incorrect Password');
                  } else {
                      $password.parent('label').addClass('error').append('<small>Incorrect Password</small>');
                  }

                  if ($.isNumeric(photoID)) {
                      $id.siblings('small').remove();
                  }

              }

          }

      });
  }

  $.ajax({
    url: '/smug-mug/?smugmug=albums',
    success: function(data) {
      for(var i=0; i < data.Response.Album.length; i++){
          $('#albums').append('<li><h1>' + data.Response.Album[i].Name + '</h1><strong>' + data.Response.Album[i].AlbumKey + '</strong></li>');
      };
      photoFinder2017('single');
    }
  });
});
</script>


<?php 
        endwhile;
    endif;
get_footer() 
?>