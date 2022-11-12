const listEl = document.querySelector("ul#categories");
const itemEl = document.querySelectorAll("li.item");
const nameSubcategoryEl = listEl.querySelectorAll("li.item>ul");
const categoryCount = () => {
  return console.log(`Number of categories: ${listEl.children.length}`);
};
const shortCut = () => {
  categoryCount();
  for (let i = 0; i < itemEl.length; i += 1) {
    let categoryHeaderEl = itemEl[i].firstElementChild;
    let itemSubList = categoryHeaderEl.nextElementSibling;
    console.log(`Category: ${categoryHeaderEl.textContent}
Elements: ${itemSubList.children.length}`);
  }
};
shortCut();
// const categoryHeaderEl = listEl.querySelectorAll("li.item>h2");
// const nameSubcategoryEl = listEl.querySelectorAll("li.item>ul");
// const categoryCount = () => {
//   return console.log(`Number of categories: ${listEl.children.length}`);
// };
// const shortCut = () => {
//   categoryCount();
//   for (let i = 0; i < categoryHeaderEl.length; i += 1) {
//     console.log(
//       `Category: ${categoryHeaderEl[i].textContent}
// Elements: ${nameSubcategoryEl[i].querySelectorAll("li").length}`
//     );
//   }
// };
// shortCut();
