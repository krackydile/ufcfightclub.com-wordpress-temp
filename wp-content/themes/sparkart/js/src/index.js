import "jquery";
import jQuery from 'jquery';
import $ from 'jquery';
import 'bootstrap';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper:
// const swiper = new Swiper();
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.list-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swipe-btn-next',
    prevEl: '.swipe-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  renderBullet: function (index, className) {
    return '<li><span class="' + className + '">' + (index + 1) + '</span></li>';
  }
});
jQuery(window).scroll(function($){
    if (jQuery(this).scrollTop() >= 61) {
                //actions...
        jQuery('.hnav').removeClass('homepage-navbar');
        // alert('do some action');
    } else {
                //actions...
        jQuery('.hnav').addClass('homepage-navbar');
                
        // alert('some action in else');
        
    }
});
jQuery(document).ready(function($){
	// alert('i am ready');
  $('.select-pills').on('change', function(e) {
      var id = $(this).val();
      $('a[href="' + id + '"]').tab('show');
  }); 
});