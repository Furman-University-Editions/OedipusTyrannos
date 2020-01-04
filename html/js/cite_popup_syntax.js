
$(document).ready(function () {

	for ( c in configArray) {
		var containerId = configArray[c].containerId;
		var json = configArray[c].json;
		var i = c;
		$('body').append('<div id="syntax-modal-' + containerId + '" class="modal-content"><span class="syntax_close">&times;</span><div id="' + containerId + '" class="cite_popup_syntax" style="width:100%; height: 100%"> </div></div>');

	}

	for (c in configArray) {
		var containerId = configArray[c].containerId;
		var json = configArray[c].json;
		new Treant(json, function(){ console.log("loaded config.")}, $);
	}


	$("a.open-syntax-modal").click(function(){ 
		var target = $(this).attr("data-target");
		$("#syntax-modal-" + target).toggle();
	});



	//var chart1 = new Treant(treant_config_1, function(){ console.log("loaded config.")} , $ );
	//var chart2 = new Treant(treant_config_2, function(){ console.log("loaded config.")} , $ );
	$(".modal-content").toggle();

	$(".syntax_close").click(function(){
		var myId = $(this).parent("div").attr("id");		
		$("#" + myId).toggle();
	});

});

