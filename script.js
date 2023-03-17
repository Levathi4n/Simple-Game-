// Create the square
var square = document.createElement("div");
square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "red";
square.style.position = "absolute";
square.style.top = "175px";
square.style.left = "0px";
document.getElementById("game-container").appendChild(square);

// Move the square
var speed = 5;
setInterval(function() {
	var currentLeft = parseInt(square.style.left);
	square.style.left = (currentLeft + speed) + "px";
	
	if (currentLeft + speed >= 350) {
		speed = -5;
	} else if (currentLeft + speed <= 0) {
		speed = 5;
	}
}, 50);

// Handle clicks on the square
square.addEventListener("click", function() {
	alert("You clicked the square!");
});
