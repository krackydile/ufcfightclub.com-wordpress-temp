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
jQuery(window).scroll(function ($) {
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
jQuery(document).ready(function ($) {
    // alert('i am ready');
    $('.select-pills').on('change', function (e) {
        var id = $(this).val();
        $('a[href="' + id + '"]').tab('show');
    });
    $(document).on('click','.ajax-load-more', function(){
        // alert(sparkart_loadmore_params);
        console.log(sparkart_loadmore_params);
        var button = $(this),
            data = {
            'action': 'loadmore',
            'query': sparkart_loadmore_params.posts, // that's how we get params from wp_localize_script() function
            'page' : sparkart_loadmore_params.current_page
        };
 
        $.ajax({ // you can also use $.post here
            url : sparkart_loadmore_params.ajaxUrl, // AJAX handler
            data : data,
            type : 'GET',
            beforeSend : function ( xhr ) {
                button.text('Loading...'); // change the button text, you can also add a preloader image
            },
            success : function( data ){
                if( data ) { 
                    button.text( 'Load More' ); // insert new posts
                    button.parent().before(data);
                    sparkart_loadmore_params.current_page++;
 
                    if ( sparkart_loadmore_params.current_page == sparkart_loadmore_params.max_page ) 
                        button.remove(); // if last page, remove the button
 
                    // you can also fire the "post-load" event here if you use a plugin that requires it
                    // $( document.body ).trigger( 'post-load' );
                } else {
                    button.remove(); // if no data, remove the button as well
                }
            }
        });
    })
});
