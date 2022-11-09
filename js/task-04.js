let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("span#value");
const counterIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const counterDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
incrementBtn.addEventListener("click", counterIncrement);
decrementBtn.addEventListener("click", counterDecrement);
