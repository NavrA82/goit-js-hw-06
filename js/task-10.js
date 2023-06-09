const onInputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesElements = document.querySelector('#boxes');
buttonCreate.addEventListener('click', onClickCountBoxesElements);
buttonDestroy.addEventListener('click', onClickDeleteBoxesElements);
function onClickCountBoxesElements() {
  createBoxes(onInputNumber.value);
}
function createBoxes(amount) {
  let divTotalArray = [];
  for (let i = 1; i <= amount; i = i + 1) {
    let step = i * 10;
    const markupDiv = `<div class = "box" style = "width: ${30 + step}px; height: ${
      30 + step
    }px; background-color: ${getRandomHexColor()}"></div>`;
    divTotalArray.push(markupDiv);
  }
  boxesElements.insertAdjacentHTML('beforeend', divTotalArray.join(''));
}
function onClickDeleteBoxesElements(event) {
  onInputNumber.value = '';
  boxesElements.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Варіант 2 бородатий на милицях  - стукання до силекторів плюс звернення і передавання стилів через forEach()
// const elementControls = document.querySelector("#controls");
// const onInputNumber = elementControls.firstElementChild;
// const buttonCreate = onInputNumber.nextElementSibling;
// const buttonDestroy = elementControls.lastElementChild;
// const boxesElements = elementControls.nextElementSibling;
// buttonCreate.addEventListener("click", onClickCountBoxesElements);
// buttonDestroy.addEventListener("click", onClickDeleteBoxesElements);
// function onClickCountBoxesElements() {
// 	createBoxes(onInputNumber.value);
// }
// function createBoxes(amount) {
// 	let divTotalArray = [];
// 	for (let i = 1; i <= amount; i = i + 1) {
// 		const markupDiv = `<div class = "box"></div>`;
// 		divTotalArray.push(markupDiv);
// 	}
// 	boxesElements.insertAdjacentHTML("beforeend", divTotalArray.join(""));
// 	const elementBox = document.querySelectorAll(".box");
// 	elementBox.forEach((box, index) => {
// 		index *= 10;
// 		box.style.cssText = `width: ${30 + index}px; height: ${30 + index}px; background-color: ${getRandomHexColor()}`;
// 	});
// }
// function onClickDeleteBoxesElements(event) {
// 	onInputNumber.value = "";
// 	boxesElements.innerHTML = "";
// }
// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215)
// 		.toString(16)
// 		.padStart(6, 0)}`;
// }
