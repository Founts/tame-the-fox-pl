jQuery(function(){
	jQuery(window).load(function(){
		jQuery( ".recent_tabs" ).tabs({
			collapsible: true,
			active: true,
			heightStyle: 'content',
			fx: { 
	            opacity: 'toggle',
	            duration:'slow'
	        }
		});
	});
});

jQuery(function(){
	jQuery(window).load(function(){
		jQuery(".acco_loading").fadeOut("slow");
		jQuery(".recent_tabs").fadeIn("slow");
	});
});