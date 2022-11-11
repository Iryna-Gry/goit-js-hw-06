const inputRef = document.querySelector("input#font-size-control");
const inputTextRef = document.querySelector("span#text");
inputRef.value = inputRef.min;
const onChangeFontSize = (event) => {
  if (
    inputTextRef.style.fontSize < inputTextRef.min ||
    inputTextRef.style.fontSize > inputTextRef.max
  ) {
    return;
  } else {
    inputTextRef.style.fontSize = `${event.target.value}px`;
  }
};
inputRef.addEventListener("change", onChangeFontSize);
