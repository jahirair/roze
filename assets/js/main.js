(function($){
	'use strict';
	
	$('.isotope-filtering').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
			horizontalOrder: true
		  }
		});
		
		//one page nav
		$('#nav').onePageNav();
		
		//typed js
		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			loop: true,
  loopCount: Infinity,
  typeSpeed: 100,
  backSpeed: 100,
		  });
		  
		 //magnific popup
		 $('.portfolio-popup').magnificPopup({
		  type:'image',
		  gallery:{
			enabled:true
		  },
		  
		  });
		  
		  //wow
		  
})(jQuery)
 $(window).on('scroll',function(){
	 if($(this).scrollTop()>1){
		 $('.header-area').addClass("sticky");
	 }
	 else{
		 $('.header-area').removeClass("sticky");
	 }
 })