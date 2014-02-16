$(function(){

$('.product_info a').hover(function(){

     $(this).siblings().addClass('show_photo_title')
     // $('show_photo_title').css('transition','all 3s ease' );
     // $(this).find('p').toggleClass('show_product_title');
});


$('.product_info a' ).mouseout(function(){

      $(this).siblings().removeClass('show_photo_title')

     // $(this).find('p').toggleClass('show_product_title');
});

});


$(function() {

  $('.image-link').magnificPopup({

    type:'image'

  });
});






// $('.product_info .aaa').focusout(function(){

//      $('.product_info p').removeClass('show_photo_title');
// });



  // When a div is hovered over, make the input 'active'.
    // $(".theform fieldset div").hover(function () {
    //     $(this).find("input").toggleClass('active');
    // });






// $(function () {
//     // Use a "clone" helper so the original element stays in place as we drag.
//     $('.feature_image').draggable({
//         helper: "clone"
//     });

//     $( ".shopping_cart" ).droppable({
//         activeClass: "droppable",
//         hoverClass: "hover",
//         tolerance: "touch",
//         drop: function( event, ui ) {
//             var listObj = $(this).find('img');
//             listObj.append(ui.draggable.clone());
//         }
//     });
// });

