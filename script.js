function colorCursor(str)
{
	document.querySelectorAll(".content .intro-text .cursor")[0].className = "cursor " + str;
}

var s = 0;

function slideIntroText()
{
	if (parseInt(document.querySelectorAll(".content .buffer")[0].style.height) < 1) {
		document.querySelectorAll(".content .about-text")[0].className = document.querySelectorAll(".content .about-text")[0].className.replace(/\bhidden\b/,'');
		setTimeout(function(){document.querySelectorAll(".content .signup-form")[0].className = document.querySelectorAll(".content .signup-form")[0].className.replace(/\bhidden\b/,'')}, 1500);
		return;
	}
	document.querySelectorAll(".content .buffer")[0].style.height = parseInt(document.querySelectorAll(".content .buffer")[0].style.height) - s + "px";
	setTimeout(slideIntroText, 1);
}

function showColor2Text(str)
{
	if (str.length == 0) {
		document.querySelectorAll(".content .intro-text .cursor")[0].style.visibility = "hidden";
		slideIntroText();
		return;
	}
	document.querySelectorAll(".content .intro-text .title.color2")[0].innerHTML = document.querySelectorAll(".content .intro-text .title.color2")[0].innerHTML + str.charAt(0);
	colorCursor("color2");
	setTimeout(function(){showColor2Text(str.substring(1))}, 200);
}

function showColor1Text(str)
{
	if (str.length == 0) {
		showColor2Text("Hacks");
		return;
	}
	document.querySelectorAll(".content .intro-text .title.color1")[0].innerHTML = document.querySelectorAll(".content .intro-text .title.color1")[0].innerHTML + str.charAt(0);
	colorCursor("color1");
	setTimeout(function(){showColor1Text(str.substring(1))}, 200);
}

window.onload = function() {
	s = (document.querySelectorAll(".content")[0].offsetHeight - document.querySelectorAll(".content .intro-text")[0].offsetHeight) / 500;
	document.querySelectorAll(".content .buffer")[0].style.height = document.querySelectorAll(".content")[0].offsetHeight - document.querySelectorAll(".content .intro-text")[0].offsetHeight + "px";
	document.querySelectorAll(".content .intro-text .cursor")[0].style.visibility = "visible";
	setTimeout(function(){showColor1Text("T.")}, 200);
};
