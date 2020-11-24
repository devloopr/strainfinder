const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value == null) {
    messages.push("A name is required guapo");
  }

  if (password.value.length <= 7) {
    messages.push("Password must be longer than 7 characters -_-");
  }
  if (password.value.length >= 18) {
    messages.push("Password must be less than 18 characters -_-");
  }
  if (password.value === "password") {
    messages.push("Password cannot be password '_-");
  }

  if (password.value === "fuck") {
    messages.push("Password cannot be sexual '_-");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join("! And ");
  }
  console.log(name.value);
});
