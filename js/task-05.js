const inputEl = document.querySelector("input#name-input");
const spanNameOutput = document.querySelector("span#name-output");
const onNameInput = (event) => {
  if (event.currentTarget.value === "") {
    spanNameOutput.textContent = "Anonymous";
  } else {
    spanNameOutput.textContent = event.currentTarget.value;
  }
};
inputEl.addEventListener("input", onNameInput);
