const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("ul#ingredients");
const createIngridientsList = ingredients.map((ingridient) => {
  const ingridientsEl = document.createElement("li");
  ingridientsEl.classList.add("item");
  ingridientsEl.textContent = ingridient;
  return ingridientsEl;
});
listEl.append(...createIngridientsList);
