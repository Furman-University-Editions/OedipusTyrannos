
$(document).ready(function () {

	// make all minimal
	$(".ctsurn").removeClass("ctsUrn0");
	$(".ctsurn").removeClass("ctsUrn1");
	$(".ctsurn").removeClass("ctsUrn2");
	$(".ctsurn").removeClass("ctsUrn3");
	$(".ctsurn").addClass("ctsUrn0");
	$(".ctsurn").html("cts");
	$(".cite2urn").removeClass("cite2Urn0");
	$(".cite2urn").removeClass("cite2Urn1");
	$(".cite2urn").removeClass("cite2Urn2");
	$(".cite2urn").removeClass("cite2Urn3");
	$(".cite2urn").addClass("cite2Urn0");
	$(".cite2urn").html("cite2");

	// Add a tooltip to each URN object
	$(".ctsurn").wrap("<div class='tooltip'></div>");
	$(".cite2urn").wrap("<div class='tooltip'></div>");
	$(".tooltip").append("<div class='top'><p>double-click to expand</p><i></i></div>");


/*
<div class="btn btn-primary tooltip">Hover Me to Preview
    <div class="top">
        <h3>Lorem Ipsum</h3>
        <p>Dolor sit amet, consectetur adipiscing elit.</p>
        <i></i>
    </div>
</div>
*/

	$(".ctsurn").dblclick(function(){ 
		var urnString = $(this).attr("data-ctsurn");
		if ( $(this).hasClass("ctsUrn0") ) {
			// passage (ctsUrn1)
			$(this).removeClass("ctsUrn0");
			$(this).addClass("ctsUrn1");
			var u = new edu.holycross.shot.cite.CtsUrn( { urnString: urnString });
			var passage = u.passageComponent;
			if (passage == "") {
				$(this).removeClass("ctsUrn1");
				$(this).addClass("ctsUrn2");
				$(this).html(us.replace(/urn:cts:[^:]+:/,""));
			} else {
				$(this).html(passage);
			}
		} else if ( $(this).hasClass("ctsUrn1") ) {
			// biblio+passage (ctsUrn2)
			$(this).removeClass("ctsUrn1");
			$(this).addClass("ctsUrn2");
			$(this).html(urnString.replace(/urn:cts:[^:]+:/,""));
		} else if ( $(this).hasClass("ctsUrn2") ) {
			// full URN (ctsurn3)
			$(this).removeClass("ctsUrn2");
			$(this).addClass("ctsUrn3");
			$(this).html(urnString);
		} else {
			// just "urn" (ctsUrn0)
			$(this).removeClass("ctsUrn3");
			$(this).addClass("ctsUrn0");
			$(this).html("cts");
		}

	});

$(".cite2urn").dblclick(function(){ 
		var urnString = $(this).attr("data-cite2urn");
		if ( $(this).hasClass("cite2Urn0") ) {
			// passage (cite2Urn1)
			$(this).removeClass("cite2Urn0");
			$(this).addClass("cite2Urn1");
			var u = new edu.holycross.shot.cite.Cite2Urn( { urnString: urnString });
			var passage = u.objectComponent;
			if (passage == "") {
				$(this).removeClass("cite2Urn1");
				$(this).addClass("cite2Urn2");
				$(this).html(us.replace(/urn:cite2:[^:]+:/,""));
			} else {
				$(this).html(passage);
			}
		} else if ( $(this).hasClass("cite2Urn1") ) {
			// biblio+passage (cite2Urn2)
			$(this).removeClass("cite2Urn1");
			$(this).addClass("cite2Urn2");
			$(this).html(urnString.replace(/urn:cite2:[^:]+:/,""));
		} else if ( $(this).hasClass("cite2Urn2") ) {
			// full URN (ctsurn3)
			$(this).removeClass("cite2Urn2");
			$(this).addClass("cite2Urn3");
			$(this).html(urnString);
		} else {
			// just "urn" (cite2Urn0)
			$(this).removeClass("cite2Urn3");
			$(this).addClass("cite2Urn0");
			$(this).html("cite2");
		}

	});

});

