const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

let user = {
  email: "",
  password: "",
};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('All fields must be filled!!!');
    } else {
      user.email = email.value;
      user.password = password.value;
      console.log(user);
        event.currentTarget.reset();
    }
}