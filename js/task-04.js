const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = counter.lastElementChild;
let step = 0;
// варіант 3 Катерина з групи кортший ніж мій заходить у мінус
buttonDecrement.addEventListener('click', function () {
  step -= 1;
  counterValue.textContent = `${step}`;
});
buttonIncrement.addEventListener('click', function () {
  step += 1;
  counterValue.textContent = `${step}`;
});

// варіант 2 заходить у мінус
// buttonDecrement.addEventListener('click', onButtonDecrementClick);
// buttonIncrement.addEventListener('click', onButtonIncrementClick);
// function onButtonDecrementClick() {
//   step -= 1;
//   counterValue.textContent = `${step}`;
// }
// function onButtonIncrementClick() {
//   step += 1;
//   counterValue.textContent = `${step}`;
// }
// варіант 1 не заходить у мінус
// const counterValue = document.querySelector("#value");
// const buttonDecrement = counter.firstElementChild;
// const buttonIncrement = counter.lastElementChild;
// function onButtonDecrementClick() {
// 	if (step > 0 ) {
// 		step -= 1;
// 		counterValue.textContent = `${step}`;
// 	}
// };
// function onButtonIncrementClick() {

// 	if (step >= 0) {
// 		step += 1;
// 		counterValue.textContent = `${step}`;
// 	}
// };
