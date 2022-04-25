var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	let maxVal = 0xffffff;
	let randN = Math.random() * maxVal;
	randN = Math.floor(randN);
	randN = randN.toString(16);
	let randColor = randN.padStart(6, 0);
	return `#${randColor.toUpperCase()}`;
}

function setColor1() {
	color1.value = generateRandomColor();
	setGradient();
}

function setColor2() {
	color2.value = generateRandomColor();
	setGradient();
}

// load page the first time with random color
color1.value = generateRandomColor(); 
color2.value = generateRandomColor();
setGradient();
//user can select color
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//user can select random color
num1.addEventListener('click', setColor1);
num2.addEventListener('click', setColor2);





