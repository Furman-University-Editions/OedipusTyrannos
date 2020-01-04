
$(document).ready(function () {

	var clicked = false

	$("div#cite_rollover_commentary_text .ohco2_citableNodeText").click(function() {
		var thisUrn = $(this).attr("data-ctsurn");
		var findString = 'div[data-commentsOn="' + thisUrn + '"]';
		$(".cite_rollover_commentary_comment").removeClass("visible");
		$(findString).addClass("visible");
		$("div#cite_rollover_commentary_text .ohco2_citableNodeText").removeClass("selected");
		$(this).addClass("selected");
		if ( clicked == true ) { 
			clicked = false 
			$(this).removeClass("selected");
		} else { 
			clicked = true;
		}
	})

	$("div#cite_rollover_commentary_text .ohco2_citableNodeText").mouseenter(function() {
		if (clicked == false ){
			var thisUrn = $(this).attr("data-ctsurn");
			var findString = 'div[data-commentsOn="' + thisUrn + '"]';
			$(".cite_rollover_commentary_comment").removeClass("visible");
			$(findString).addClass("visible");
		}
	})

	$("div#cite_rollover_commentary_text .ohco2_citableNodeText").mouseleave(function() {
		if (clicked == false ) {
			$(".cite_rollover_commentary_comment").removeClass("visible");
		}
	})


});

