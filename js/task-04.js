const counter = document.querySelector("#counter");
const counterValue = document.querySelector('#value')
const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;
let step = 0;
buttonDecrement.addEventListener("click", onButtonDecrementClick);
buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
	if (step <= 0 || step > 0) {
		step -= 1;
		counterValue.textContent = `${step}`;
	}
};
function onButtonIncrementClick() {

	if (step >= 0 || step < 0) {
		step += 1;
		counterValue.textContent = `${step}`;
	}
};