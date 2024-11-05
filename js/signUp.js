let loginForm = document.getElementById("sign-up-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let password = document.getElementById("sign-up-Password-InputBox").value;
  let confirmPassword = document.getElementById(
    "sign-up-ConfirmPassword-InputBox"
  ).value;
  if (password != confirmPassword) {
    //todo
  } else {
    $("#overlay").fadeIn(300);

    // if passwords match or if existing user
    let user = new User(
      document.getElementById("sign-up-Name-InputBox").value,
      document.getElementById("sign-up-Email-InputBox").value,
      document.getElementById("sign-up-Password-InputBox").value
    );
    const jsonString = JSON.stringify(user);
    localStorage.setItem(user.email, jsonString);

    setTimeout(function () {
      window.location.href = "../pages/signIn.html";
    }, 5000);

    /* window.location.href = "../pages/users.html"; */
  }
});

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
