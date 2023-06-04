const list = document.querySelector('#categories');
const listArray = [...list.children];
console.log(`Number of categories: ${listArray.length}`);
listArray.forEach(function (element) {
  console.dir(`Category: ${element.firstElementChild.textContent}`);
  console.dir(`Elements: ${element.lastElementChild.children.length}`);
});
