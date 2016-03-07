jQuery(document).ready(function($) {
	$('.featured-podcast.slide .flexslider').flexslider({
		animation: "slide",
		easing: "swing",  
		smoothHeight: true,
		slideshow: false,
		controlNav: true,
		directionNav: false,

	});
	jQuery('.post .flexslider').flexslider({
		animation: 'slide',
		slideshow: false,
		controlNav: false,
		directionNav: true, 
		slideshowSpeed: 7000,
		animationSpeed: 1000,
		touch: true,
		smoothHeight: true, 
		start: function(slider) {
			slider.removeClass('loading_post');
		}
	});
	var featured_header = jQuery('.front-page-header.slideshow.flexslider');
	featured_header.flexslider({
		selector: ".slides > .slide",
		animation: 'slide',
		slideshow: false,
		controlNav: true,
		directionNav: true, 
		slideshowSpeed: 7000,
		animationSpeed: 1000,
		touch: true,
		smoothHeight: true,
		start: function(slider) {
			featured_header.removeClass('loading_featured');
		}
	});
	jQuery('.single .flexslider').flexslider({
		animation: 'slide',
		slideshow: false,
		controlNav: false,
		directionNav: true, 
		slideshowSpeed: 7000,
		animationSpeed: 1000,
		itemWidth: 600,
		move: 1,
		touch: true,
		smoothHeight: true, 
		start: function(slider) {
			slider.removeClass('loading_post');
		}
	});
	
	/*Flexslider for the large Slideshow Block*/	
	jQuery('.headlines_l_slider.flexslider').flexslider({
		animation: 'slide',
		controlNav: false,
		directionNav: true,
		smoothHeight: false,
		slideshowSpeed: 5000,
		animationSpeed: 1000,
		touch: true,
	});
});