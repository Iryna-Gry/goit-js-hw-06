const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("ul#ingredients");
const createIngridientsList = (ingredients) => {
  return ingredients.map((ingridient) => {
    const ingridientsEl = document.createElement("li");
    ingridientsEl.classList.add("item");
    ingridientsEl.textContent = ingridient;
    return ingridientsEl;
  });
};
const listElements = createIngridientsList(ingredients);
listRef.append(...listElements);
