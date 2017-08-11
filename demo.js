$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to 'description' element
		.lineTo(400, 800, {name: "description"})
		// Arc down and line to 'syntax'
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 1600, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "syntax"
		})
		// Continue line to 'scrollbar'
		.lineTo(1750, 1600, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "scrollbar"
		})

		.lineTo(2400, 750, {
			name: "rotations"
		})

		.lineTo(2400, -700, {
			name: "source"
		})

		//Line to 'follow'
    	.lineTo(-800, -250, {
    		name: "follow"
    	})

		//Line to 'follow'
		.lineTo(-1500, 1500, {
			name: "follow"
		})

        // // Rotate in place
        .rotate(-1*Math.PI/2, {
            name: "rotations-rotated"
        })

		//Line to 'follow'
		.lineTo(500, -500, {
			name: "follow"
		})


        // // Rotate in place
        .rotate(0.25*Math.PI/2, {
            name: "rotations-rotated"
        })

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
