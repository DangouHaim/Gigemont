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

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});