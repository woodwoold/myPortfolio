$(function() {
    $('.owl-carousel').owlCarousel({
    items:3,
    nav:false,
    loop:true,
    dots:true,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});
});
