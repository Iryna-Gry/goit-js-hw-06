const bodyRef = document.querySelector("body");
const btnRef = document.querySelector("button.change-color");
const spanRef = document.querySelector("span.color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onChangeColor() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}

btnRef.addEventListener("click", onChangeColor);
