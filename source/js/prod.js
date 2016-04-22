var header = document.getElementById('header').offsetTop;

jQuery(document).on("scroll",function() {
    if (jQuery(window).scrollTop() > header) {
		jQuery("#header").addClass("header-scrolled")
	} else {
		//console.log('fired');
		jQuery("#header").removeClass("header-scrolled");
	}
});