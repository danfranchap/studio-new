//var $window = $(window);

$( document ).ready(function() {
    
    console.log( "Ready!" );

      $('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});


   
}); // document.ready



/* TRASH!!

 new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );



 $('.grid').masonry({
	  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});



function checkWidth() {

	    if ($window.width() =< 480) {

	        if ($("#navLogoBlock").hasClass("col-xs-4")){
	        	$("#navLogoBlock").removeClass("col-xs-4").addClass("col-xs-12");
	        } else if ( $("#navLogoBlock").hasClass("col-xs-12")){

	        } else {
	        	$("#navLogoBlock").addClass("col-xs-12");
	        }
	    }
	    

	    if ($window.width() > 480) {

	    	if ($("#navLogoBlock").hasClass("col-xs-12")){
	        	$("#navLogoBlock").removeClass("col-xs-12").addClass("col-xs-4");
	        } else if ( $("#navLogoBlock").hasClass("col-xs-4")){

	        } else {
	        	$("#navLogoBlock").addClass("col-xs-4");
	        }


	    }

    }


*/