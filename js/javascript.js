$(document).ready(function() {
	var build = function(h, w) {
		var height = h;
		var width = w;
		//Loop through height to create rows
		for (i = 1; i <= height; i++) {
			$("#sketchpadcontainer").append("<div class='row'></div>");
			//Loop through width to create divs in each row
			for (j = 1; j <= width; j++) {
	    		$(".row:last-child").append("<div class='sqrcontainer'><div class='square'></div></div>");
	    	}
		}
	};

	build(16, 16);

	$("button").click(function() {
		var size = parseInt(prompt("How many squares per side would you like? Please enter a number."));
		if (size > 50) {
			$(".row").remove();
			build(50, 50);
			alert("The number you entered was too large. The number 50 has been used instead.")
		}
		else if (isNaN(size)) {
			$(".row").remove();
			build(16, 16);
			alert("You didn't enter a number. The default of 16 has been used.")
		}
		else {
			$(".row").remove();
			build(size, size);
		}
	})

	$(".square").hover(
	//Mouse in
	function () {
		$(this).css("background-color", "blue");
	},
	//Mouse out
	function () {} );
});