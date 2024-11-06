let loginForm = document.getElementById("sign-up-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let password = document.getElementById("sign-up-Password-InputBox").value;
  let confirmPassword = document.getElementById(
    "sign-up-ConfirmPassword-InputBox"
  ).value;
  let email = document.getElementById("sign-up-Email-InputBox").value;
  
  if (password != confirmPassword) {
    alert("Your passwords do not match, try again.");
  } else {
    /* if (email === localStorage.getItem(User.email)) {
      function myFunction() {
        myFunction();
        if (
          confirm("This email already has an account, would you like to login?")
        ) {
          window.location.href = "../pages/signIn.html";
        }
      } */
    /* } else { */
      
        $("#overlay").fadeIn(300);
        let user = new User(
          document.getElementById("sign-up-Name-InputBox").value,
          document.getElementById("sign-up-Email-InputBox").value,
          document.getElementById("sign-up-Password-InputBox").value
        );

        const jsonString = JSON.stringify(user);
        let userEmail = localStorage.setItem(user.email, jsonString);
        let userPassword = localStorage.setItem(user.password, jsonString);
        setTimeout(function () {
          window.location.href = "../pages/signIn.html";
        }, 5000);
      }
    }
 /*  } */
/* } */);

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
