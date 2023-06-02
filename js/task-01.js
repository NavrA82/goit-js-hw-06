const list = document.querySelector("#categories");
const listArrey = [...list.children];
console.log(`Number of categories: ${listArrey.length}`);
listArrey.forEach(function (element) {
	console.dir(`Category: ${element.firstElementChild.textContent}`);
	console.dir(`Elements: ${element.lastElementChild.children.length}`);
});
