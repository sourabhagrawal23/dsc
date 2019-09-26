$(document).ready(function () {
    if ($(window).width() >= 1024) {
        $('.owl-carousel').owlCarousel({
            items: 4,
            lazyLoad: true,
            loop: true
        });
    }
    else {
        $('.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true
        });
    }
});