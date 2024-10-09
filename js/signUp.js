/*  import { writeFileSync } from "fs";

// // converting a JS object to JSON
 const user = {
   id: 1,
   completeName: "Jennifer Jones",
   age: 20,
 };
 const data = JSON.stringify(user);

 try {
 //reading a JSON file synchronously
  writeFileSync("data.json", data);
 } catch (error) {
//logging the error
    console.error(error);
   throw error;}

//logging the outcome
 console.log("data.json written correctly"); */

//  enabling the Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

document.getElementById("signUpButton").addEventListener("click", onClick);

//creating user variables
 var name = document.getElementsByClassName("sign-up-Name-InputBox").innerHTML;
 var email = document.getElementById('sign-up-Email-InputBox');
 var password = document.getElementsByClassName("sign-up-Password-InputBox").innerHTML;

 //creating user class
/*  class User{
  User(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get email(){
    return email;
  }

 } */

  function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
    
    }
 //check email method with check of the email contains an @
 function checkEmail() {
  const emailInput = document.getElementById('sign-up-Email-InputBox');

    if (validateEmail(emailInput.value)) {

    console.log("good emaiil");
    ; // Clear any previous error message
    
    alert('Email is valid! Form submitted.');
    
    // You can add your form submission logic here
    
    } else {
    console.log(emailInput.value);
    
    }
    
  }


function onClick(){
  console.log("clicked");
 
  checkEmail();
}