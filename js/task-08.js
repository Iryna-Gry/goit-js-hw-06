const form = document.querySelector("form.login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  if (form.email === "" || form.password === "") {
    return alert("Все поля должны быть заполнены");
  } else {
    const userData = ({
      elements: { email, password },
    } = event.currentTarget);
  }
  console.log(userData);
  event.currentTarget.reset();
}
