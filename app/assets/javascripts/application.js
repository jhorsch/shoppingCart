// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// $(function(){



// $('img').hover(function(){
//      $(this).find('p').addClass('show_photo_title')
// })



// })




$(function () {
    // Use a "clone" helper so the original element stays in place as we drag.
    $('.feature_image').draggable({
        helper: "clone"
    });

    $( ".shopping_cart" ).droppable({
        activeClass: "droppable",
        hoverClass: "hover",
        tolerance: "touch",
        drop: function( event, ui ) {
            var listObj = $(this).find('img');
            listObj.append(ui.draggable.clone());
        }
    });
});
