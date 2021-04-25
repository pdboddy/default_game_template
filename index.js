var active_tab = "";

function navigate(tab) {
	document.getElementById("screen_1").style.display = "none"
	document.getElementById("screen_2").style.display = "none"
	document.getElementById("screen_3").style.display = "none"
	document.getElementById("screen_4").style.display = "none"
	document.getElementById("screen_5").style.display = "none"
	document.getElementById("screen_6").style.display = "none"
	if (tab == "screen_1") {
		if (active_tab == "screen_1") {
			active_tab = ""
			return
		}
		active_tab = "screen_1"
		document.getElementById("screen_1").style.display = "block"
	}
	if (tab == "screen_2") {
		if (active_tab == "screen_2") {
			active_tab = ""
			return
		}
		active_tab = "screen_2"
		document.getElementById("screen_2").style.display = "block"
	}
	if (tab == "screen_3") {
		if (active_tab == "screen_3") {
			active_tab = ""
			return
		}
		active_tab = "screen_3"
		document.getElementById("screen_3").style.display = "block"
	}
	if (tab == "screen_4") {
		if (active_tab == "screen_4") {
			active_tab = ""
			return
		}
		active_tab = "screen_4"
		document.getElementById("screen_4").style.display = "block"
	}
	if (tab == "screen_5") {
		if (active_tab == "screen_5") {
			active_tab = ""
			return
		}
		active_tab = "screen_5"
		document.getElementById("screen_5").style.display = "block"
	}
	if (tab == "screen_6") {
		if (active_tab == "screen_6") {
			active_tab = ""
			return
		}
		active_tab = "screen_6"
		document.getElementById("screen_6").style.display = "block"
	}
} // Use this function to call the different DIV screens.

/* function reactivate() {
		document.getElementById("b4").disabled = ""
} */ // Use this method to reactivate disabled buttons, replacing "b4" with another ID.

