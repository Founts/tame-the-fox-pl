jQuery(document).ready(function($){
	
	//Infinite Scroll
	var $container = $('.list-of-episodes .row.masonry-container, .fromtheblog .row .row');
	var $container_pod_library = $('.page-template-page-podcastarchive .entries.grid .row');

	$container.imagesLoaded(function () {
		$container.masonry({
			itemSelector: '.inside-container, .fromtheblog .post',
			percentPosition: true,
			gutter: 0,
		});

		$container_pod_library.masonry({
			itemSelector: '.page-template-page-podcastarchive .entries.grid .row .podpost',
			percentPosition: true,
			gutter: 0,
		});
	});
});