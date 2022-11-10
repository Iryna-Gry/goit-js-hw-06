const listEl = document.querySelector("ul#categories");
const categoryElHeader = listEl.querySelectorAll("li.item>h2");
const nameEl = listEl.querySelectorAll("li.item>ul");
const categoryCount = () => {
  return console.log(`Number of categories: ${listEl.children.length}`);
};
const shortCut = () => {
  categoryCount();
  for (let i = 0; i < categoryElHeader.length; i += 1) {
    console.log(
      `Category: ${categoryElHeader[i].textContent} 
Elements: ${nameEl[i].querySelectorAll("li").length}`
    );
  }
};
shortCut();
