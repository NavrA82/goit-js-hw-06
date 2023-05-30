const widgetChangeColor = document.querySelector(".widget");
const buttonChangeColor = widgetChangeColor.lastElementChild;
const backgroundChangeColor = widgetChangeColor.firstElementChild;
const elementChangeColor = backgroundChangeColor.firstElementChild;
const bodyBackgroundColor = widgetChangeColor.parentNode;
buttonChangeColor.addEventListener("click", onButtonChangeColor);
function onButtonChangeColor(event) {
	elementChangeColor.textContent = `${getRandomHexColor()}`;
	bodyBackgroundColor.style.backgroundColor = `${getRandomHexColor()}`;
};
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
