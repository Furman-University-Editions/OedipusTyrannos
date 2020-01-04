
$(document).ready(function () {

	$(".cite_showhide_header").next().hide();

	$(".cite_showhide_header").click(function() {
		if ( $(this).hasClass("cite_showhide_closed")) {
			$(this).removeClass("cite_showhide_closed");
			$(this).addClass("cite_showhide_open");
			$(this).next().show("fast");
		} else {
			$(this).removeClass("cite_showhide_open");
			$(this).addClass("cite_showhide_closed");
			$(this).next().hide("fast");
		}	
	})

});

