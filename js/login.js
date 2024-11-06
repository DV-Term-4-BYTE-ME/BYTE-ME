let loginForm = document.getElementById("sign-up-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const jsonString = JSON.stringify(User);
  let password = document.getElementById("sign-up-Password-InputBox").value;
  let email = document.getElementById("sign-up-Email-InputBox").value;
 /*  if (password != localStorage.getItem(User.password)) {
    alert("Your passwords do not match, try again.");
  } else {
    if (email != localStorage.getItem(User.email)) {
      myFunction();
      function myFunction() {
        if (
          confirm(
            "This email does not have an account, would you like to create a new account?"
          )
        ) {
          window.location.href = "../pages/signup.html";
        }
      }
    } */
    window.location.href = "../pages/users.html";
  }
/* } */);

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
