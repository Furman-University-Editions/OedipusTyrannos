
function removeInlineSyntaxClasses() {
	$("span").removeClass("inline_syntax_head1");
	$("span").removeClass("inline_syntax_head2");
	$("span").removeClass("inline_syntax_head3");
	$("span").removeClass("inline_syntax_tail");
	$("span").removeClass("inline_syntax_focus");
}

function addInlineSyntaxHighlights(headUrn, level) {
	if (level == 1) {
		var findString = 'span.ohco2_citableNodeContainer[data-ctsurn="' + headUrn + '"]';
		$(findString).parent().addClass("inline_syntax_head1");
		var thisHead = $(findString).parent().attr("data-head");
		addInlineSyntaxHighlights(thisHead, 2);
	} else if (level == 2) {
		var findString = 'span.ohco2_citableNodeContainer[data-ctsurn="' + headUrn + '"]';
		$(findString).parent().addClass("inline_syntax_head2");
		var thisHead = $(findString).parent().attr("data-head");
		addInlineSyntaxHighlights(thisHead, 3);
	}
	else {
		var findString = 'span.ohco2_citableNodeContainer[data-ctsurn="' + headUrn + '"]';
		$(findString).parent().addClass("inline_syntax_head3");
	}
}

function highlightDependants(urnStr) {
	var findString = 'span.cite_inline_syntax[data-head="' + urnStr + '"]';
	$(findString).addClass("inline_syntax_tail");
}

$(document).ready(function () {

	$("span.cite_inline_syntax").hover(
  function() {
    removeInlineSyntaxClasses();
    // level 1
    var thisHead = $(this).attr("data-head");
    $(this).addClass("inline_syntax_focus");
    addInlineSyntaxHighlights(thisHead, 1);
    var thisUrn = $(this).first().children().first().attr("data-ctsurn");
    highlightDependants(thisUrn);
  }, function() {
    removeInlineSyntaxClasses();
  }
);

});

