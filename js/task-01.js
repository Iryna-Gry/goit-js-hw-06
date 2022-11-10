const listEl = document.querySelector("ul#categories");
const categoryHeaderEl = listEl.querySelectorAll("li.item>h2");
const nameSubcategoryEl = listEl.querySelectorAll("li.item>ul");
const categoryCount = () => {
  return console.log(`Number of categories: ${listEl.children.length}`);
};
const shortCut = () => {
  categoryCount();
  for (let i = 0; i < categoryHeaderEl.length; i += 1) {
    console.log(
      `Category: ${categoryHeaderEl[i].textContent} 
Elements: ${nameSubcategoryEl[i].querySelectorAll("li").length}`
    );
  }
};
shortCut();
