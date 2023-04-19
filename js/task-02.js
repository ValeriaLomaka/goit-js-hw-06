const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector("#ingredients");

const ingrList = [];

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  ingrList.push(itemEl);
});

listEl.append(...ingrList);

