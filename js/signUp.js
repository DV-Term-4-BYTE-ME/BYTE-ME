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


//creating user variables
 var name = document.getElementsByClassName("sign-up-Name-InputBox").innerHTML;
 var email = document.getElementById('sign-up-Email-InputBox');
 var password = document.getElementsByClassName("sign-up-Password-InputBox").innerHTML;

class User{
  constructor(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
  }

 } 


 function onSubmit(){
  //Check if it is valid
 }

 