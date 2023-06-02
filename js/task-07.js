const inputFontSizeControl = document.querySelector("#font-size-control");
const brElementSibling = inputFontSizeControl.nextElementSibling;
const textChange = brElementSibling.nextElementSibling;
inputFontSizeControl.addEventListener("input", textFontSizeControl);
function textFontSizeControl(event) {
	textChange.style.fontSize = `${event.currentTarget.value}px`;
}
