const listEl = document.querySelector("ul#categories");
const catElHeader = listEl.querySelectorAll("li.item>h2");
const nameEl = listEl.querySelectorAll("li.item>ul");
const catCount = () => {
  return console.log(`Number of categories: ${listEl.children.length}`);
};
const shortCut = () => {
  catCount();
  for (let i = 0; i < catElHeader.length; i += 1) {
    console.log(
      `Category: ${catElHeader[i].textContent} 
Elements: ${nameEl[i].querySelectorAll("li").length}`
    );
  }
};
shortCut();
