const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const onCheckValidity = (event) => {
  console.log(inputRef.dataset.length);
  console.log(event.currentTarget.value.length);
  if (
    Number(inputRef.dataset.length) === Number(event.currentTarget.value.length)
  ) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
};
inputRef.addEventListener("blur", onCheckValidity);
