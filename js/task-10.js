const elementControls = document.querySelector("#controls");
const onInputNamber = elementControls.firstElementChild;
const buttonCreate = onInputNamber.nextElementSibling;
const buttonDestroy = elementControls.lastElementChild;
const boxesElements = elementControls.nextElementSibling;
// console.dir(elementControls);

// console.dir(onInputNamber);

// console.dir(buttonCreate);

// console.dir(buttonDestroy);

// console.log(boxesElements);
console.dir(buttonDestroy.dataset);
console.dir(buttonCreate.dataset);

buttonCreate.addEventListener("click", onClickCreateBoxesElements);
buttonDestroy.addEventListener("click", onClickDeleteBoxesElements);
onInputNamber.addEventListener("input", onInputChooseNamber);
const totalCreateElements = [];
function onInputChooseNamber(event) {
	totalCreateElements.push(event.currentTarget.value);
  // console.log(totalCreateElements.length);
  
}
//  totalCreateElements.length;


  
function onClickCreateBoxesElements(amount) {
  const markupDiv = amount.map((element, index) => `<div class = "div${index}"></div>`).join("");
  console.log(boxesElements);
  // console.dir(boxesElements);
  boxesElements.insertAdjacentHTML("beforeend", markupDiv); 
  console.dir(buttonCreate.create);
  // console.log(index);
  // console.log(boxesElements.children[0]);
  // boxesElements.childNodes[index];
};
  // console.dir(onInputNamber);
onClickCreateBoxesElements(totalCreateElements.length);
function onClickDeleteBoxesElements(event) {
  event.children.remove();
  console.log(boxesElements);
console.dir(boxesElements);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
