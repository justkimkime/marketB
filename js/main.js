$(document).ready(function(){

    $('.single-item').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow:'<div class="prev"></div>',
        nextArrow:'<div class="next"></div>',
    });   
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<div class="item_prev"></div>',
        nextArrow:'<div class="item_next"></div>',
    });

    $(".vertical-center-4").slick({
        vertical: true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        prevArrow:false,
        nextArrow:false,
    });

}) 