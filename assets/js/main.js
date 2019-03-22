(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		// Feather Icon Js
		feather.replace();

        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});
		
		// Magnific Popup
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.startp-nav').addClass("is-sticky");
            }
            else{
                $('.startp-nav').removeClass("is-sticky");
            }
		});

        // Popup Gallery
		$('.popup-btn').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
		});

		// Works Slides
		var owl = $('.works-slides');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                },
                1500:{
                    items:4,
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});

		// Boxes Slides
		var owl = $('.boxes-slides');
		owl.owlCarousel({
			loop:true,
			nav:false,
			autoplay: true,
			dots:false,
			responsive:{
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
                }
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});

		// Team Slides
		var owl = $(".owl-carousel");
		owl.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			responsive: {
				0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:4,
				},
                1500:{
                    items:5,
				}
			}
		});

		// Feedback Carousel
		var $imagesSlider = $(".feedback-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");

		// images options
		$imagesSlider.slick({
			speed:300,
			slidesToShow:1,
			slidesToScroll:1,
			cssEase:'linear',
			fade:true,
			autoplay: true,
			draggable:true,
			asNavFor:".client-thumbnails>div",
			prevArrow:'.client-feedback .prev-arrow',
			nextArrow:'.client-feedback .next-arrow'
		});

		// Thumbnails options
		$thumbnailsSlider.slick({
			speed:300,
			slidesToShow:5,
			slidesToScroll:1,
			cssEase:'linear',
			autoplay: true,
			centerMode:true,
			draggable:false,
			focusOnSelect:true,
			asNavFor:".feedback-slides .client-feedback>div",
			prevArrow:'.client-thumbnails .prev-arrow',
			nextArrow:'.client-thumbnails .next-arrow',
		});
		var $caption = $('.feedback-slides .caption');

		var captionText = $('.client-feedback .slick-current img').attr('alt');
		updateCaption(captionText);
		$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$caption.addClass('hide');
		});

		$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			captionText = $('.client-feedback .slick-current img').attr('alt');
			updateCaption(captionText);
		});

		function updateCaption(text) {
			// if empty, add a no breaking space
			if (text === '') {
				text = '&nbsp;';
			}
			$caption.html(text);
			$caption.removeClass('hide');
		}
		
		// Go to Top
        $(function(){
            //Scroll event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });  
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});
		
		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });
	});
	
	$(window).on ('load', function (){
        // WOW JS
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader Area
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});
}(jQuery));