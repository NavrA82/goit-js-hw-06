const list = document.querySelector('#categories');
const listArray = [...list.children];
console.log(`Number of categories: ${listArray.length}`);
listArray.forEach(function (element) {
  console.dir(`Category: ${element.firstElementChild.textContent}`);
  console.dir(`Elements: ${element.lastElementChild.children.length}`);
});

//Хара Андрій
// const listWithClass = document.querySelectorAll('li.item');
// console.log('Number of categories:', listWithClass.length);
// listWithClass.forEach(function (element) {
//   console.log('Category:', element.querySelector('h2').textContent);
//   console.log('Elements:', element.querySelectorAll('li').length);
// });
