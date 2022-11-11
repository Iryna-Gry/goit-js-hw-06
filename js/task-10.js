const boxParentDivRef = document.querySelector("div#boxes");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("div#controls>input");

const onGetAmount = (event) => Number(event.currentTarget.value);

let arrayEl = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let i = 0;
  // creates an array of elements <div> with requested quantity
  do {
    const el = document.createElement("div");
    arrayEl.push(el);
    i += 1;
  } while (i < amount);
  // variable sizeEl creates initial <div> size value
  let sizeEl = 30;
  for (let i = 0; i < arrayEl.length; i += 1) {
    const backgroundColor = getRandomHexColor();
    arrayEl[i].style.width = `${sizeEl}px`;
    arrayEl[i].style.height = `${sizeEl}px`;
    arrayEl[i].style.backgroundColor = backgroundColor;
    // increases size value for next cycle
    sizeEl += 10;
  }
  boxParentDivRef.append(...arrayEl);
}
function destroyBoxes() {
  boxParentDivRef.innerHTML = ""; // HTML markup reset
  inputRef.value = ""; // <input> value reset
  arrayEl = []; // array (memory) reset
}
btnCreateRef.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
});
btnDestroyRef.addEventListener("click", destroyBoxes);
