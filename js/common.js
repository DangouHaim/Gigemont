$(document).ready(function() {

	var a = "200px";
	var b = "180px";

	if (!window.matchMedia('screen and (max-width: 790px)').matches) {
		a = "250px";
		b = "200px";
	}

	if (!window.matchMedia('screen and (max-width: 550px)').matches) {
		jQuery( '.parallax-layer' ).parallax( {
			yparallax: "15px", xparallax: "70px"
		}, 
		{
			yparallax: "20px", xparallax: "75px"
		}, 
		{
			yparallax: "25px", xparallax: "80px"
		}, 
		{
			yparallax: "30px", xparallax: "100px"
		}, 
		{
			yparallax: "35px", xparallax: b
		}, 
		{
			yparallax: "40px", xparallax: a
		}, 
		{
			yparallax: "40px", xparallax: a
		});
	}

	var rtime;
	var timeout = false;
	var delta = 200;
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resizeend, delta);
	    }
	});

	function resizeend() {
	    if (new Date() - rtime < delta) {
	        setTimeout(resizeend, delta);
	    } else {
	        timeout = false;
	        location.reload();
	    }               
	}

});