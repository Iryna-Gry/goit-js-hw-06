let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("span#value");
const onIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
