const form = document.querySelector("form.login-form");
form.addEventListener("submit", onFormSubmit);
const userData = {};
function onFormSubmit(event) {
  event.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
    return alert("Все поля должны быть заполнены");
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget;
    userData.email = email.value;
    userData.password = password.value;
  }
  console.log(userData);
  event.currentTarget.reset();
}
