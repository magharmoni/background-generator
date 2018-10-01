var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

console.log(button);


color1.value = "#ff0000";
color2.value = "#ffff00";

// CSS.textContent = style.background;

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	CSS.textContent = body.style.background + ";";
}

function randomHex() {
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return randomColor;
}


body.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
	color1.value = randomHex();
	color2.value = randomHex();

	setGradient();
});