const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const li = document.createElement("li");
li.textContent = ingredients[0];
li.classList.add("item")
const li1 = document.createElement("li");
li1.textContent = ingredients[1];
li1.classList.add("item");
const li2 = document.createElement("li");
li2.textContent = ingredients[2];
li2.classList.add("item");
const li3 = document.createElement("li");
li3.textContent = ingredients[3];
li3.classList.add("item");
const li4 = document.createElement("li");
li4.textContent = ingredients[4];
li4.classList.add("item");
const li5 = document.createElement("li");
li5.textContent = ingredients[5];
li5.classList.add("item");
list.append(li, li1, li2, li3, li4, li5); 
console.log(list)

