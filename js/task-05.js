const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener('input', onInputUserName);
function onInputUserName(event) {
 if (event.currentTarget.value.trim().split("").length === 0) {
		return (outputName.textContent = "Anonymous");
 }
	outputName.textContent = event.currentTarget.value;
};
