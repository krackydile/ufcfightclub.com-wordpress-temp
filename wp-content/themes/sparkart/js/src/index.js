import "jquery";
import jQuery from 'jquery';
import $ from 'jquery';
import 'bootstrap';
import {Tooltip} from 'bootstrap';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import ClipboardJS from 'clipboard';
import pagination from 'paginationjs';


// custom Equal Height
// 
function sameheight(div){
    /* Latest compiled and minified JavaScript included as External Resource */

    var largest = 160;
    var findHeight = 0;

   //loop through all title elements
    $(document).find(div).each(function(){
      findHeight = $(this).height();
      if(findHeight > largest){
        largest = findHeight;
      }  
});

    $(document).find(div).css({"height":findHeight+"px"});
};
// sameheight(".card-title");   

// enable tab view by location
var url = window.location.href;
console.log(url);
// var url = 'http://dev.carrieunderwood/sample-page/#official-videos';

if (url.match('#')) {
    $('.nav-item a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

if(document.getElementById("photos_paginated") != 'undefined' && document.getElementById("photos_paginated") != null){


$('#photos_paginated').pagination({
    showPageNumbers : false,
    pageSize: sparkart_loadmore_params.pageSize,
    showPrevious: false,
    nextText : 'Load More',
    dataSource: function(done) {
        $.ajax({
            type: 'GET',
            url : sparkart_loadmore_params.ajaxUrl, // AJAX handler
            dataType: 'json',
            data: {
                'action': 'loadPhotoThumbnails',
                'type': 'photoalbums',
                'album': $('#photos_paginated').data('album')

            },
            success: function(response) {
                // console.log( typeof(response) );
                done(response);
            }
        });
     },
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data, 'photoalbums');

        $('#photo-data').append(html);
    }
})
}
function template(data, type){
    var html = '';
    if(type == 'photoalbums'){
        $.each(data, function(index, item){
            html += `<div class="col-3 col-official-image">
                            <a href="${sparkart_loadmore_params.current_url}?active=${item.attachment_id}">
                                <img src="${item.url}" class="img-responsive" />
                            </a>
                        </div>`;
        });
    }else{

    }
    return html; 
}

$('#watchModal').on('hide.bs.modal', function (event) {
  // do something...
    var modal = $(this)
    modal.find('.modal-body').html('');
})
$('#watchModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('video') // Extract info from data-* attributes
    // console.log(recipient);
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-body').html(recipient);
})
$('#accordion').on('shown.bs.collapse', function (e) {
      // do something...
        console.log($(e.target).attr('id'));
        var clickedBtn = $($(e.target).data('bs.collapse')._triggerArray);
        if(clickedBtn != undefined && clickedBtn.length > 1){

            $(clickedBtn[1]).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            
        }
        var $card = $(e.target);
          $('html,body').animate({
            // scrollTop: $card.offset().top
            scrollTop: $card.offset().top - 215
            // $(e.target)
          }, 500);
    });
    
    $('#accordion').on('hidden.bs.collapse', function (e) {
      // do something...
        var clickedBtn = $($(e.target).data('bs.collapse')._triggerArray);
        if(clickedBtn != undefined && clickedBtn.length > 1){

            $(clickedBtn[1]).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
        

        
    });
var clipboard = new ClipboardJS('.clipboard-button');
clipboard.on('success', function(e) {
    var exampleEl = document.getElementById('button-addon2')
    var tooltip = new Tooltip(exampleEl, {
        title: 'Copied to Clipboard',
        placement: 'bottom'
    });
    tooltip.show();
    setTimeout(function(){
        tooltip.hide();

    },2000);
    
    // e.clearSelection();
});
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
        jQuery('.sticky-top').removeClass('site-header-no-shadow');
        // alert('do some action');
    } else {
        //actions...
        jQuery('.hnav').addClass('homepage-navbar');
        jQuery('.sticky-top').addClass('site-header-no-shadow');


        // alert('some action in else');

    }
});
jQuery(document).ready(function ($) {
    // alert('i am ready');
    $('.select-pills').on('change', function (e) {
        var id = $(this).val();
        $('a[href="' + id + '"]').tab('show');
    });
    $(document).on('click', '.ajax-load-more-photo-albums', function(){
        var button = $(this);
        var  data = {
            'action': 'loadmoremedia',
            'query': button.data('type'), // that's how we get params from wp_localize_script() function
            'page' : button.data('page')
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
                    $(button.data('target')).append(data);
                    // button.parent().before(data);
                    button.data('page', button.data('page') +   1);
 
                    // if ( sparkart_loadmore_params.current_page == sparkart_loadmore_params.max_page ) 
                        // button.remove(); // if last page, remove the button
 
                    // you can also fire the "post-load" event here if you use a plugin that requires it
                    // $( document.body ).trigger( 'post-load' );
                } else {
                    button.remove(); // if no data, remove the button as well
                }
            }
        });
    })
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
