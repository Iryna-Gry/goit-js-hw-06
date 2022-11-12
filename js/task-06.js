const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const validDataLength = Number(inputRef.dataset.length);
const onCheckValidity = (event) => {
  console.log(inputRef.dataset.length);
  console.log(event.currentTarget.value.length);
  if (validDataLength !== Number(event.currentTarget.value.length)) {
    if (inputRef.classList.value) {
      inputRef.classList.remove(inputRef.classList.value);
      inputRef.classList.add("invalid");
    } else {
      inputRef.classList.add("invalid");
    }
  } else {
    if (inputRef.classList.value) {
      inputRef.classList.remove(inputRef.classList.value);
      inputRef.classList.add("valid");
    }
  }
};
inputRef.addEventListener("blur", onCheckValidity);
