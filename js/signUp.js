/* import { writeFileSync } from "fs";

//converting a JS object to JSON
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
 console.log("data.json written correctly");  */


document.getElementById("signUpButton").addEventListener("submit", onSubmit);

class User{
  constructor(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName(){
    return this.name;
  }

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }
 } 


 function onSubmit(){
  //Check if it is valid
    let user1 = User(document.getElementsByClassName("sign-up-Name-InputBox").innerHTML,document.getElementById('sign-up-Email-InputBox').innerHTML,document.getElementsById("sign-up-Password-InputBox").innerHTML);
    console.log(user1);   
 }

const fs = require('fs');
import { readFileSync, writeFileSync } from 'fs';

// Read the contents of the JSON file
const data = readFileSync('userDetails.json');
// Parse the JSON data into a JavaScript object
const jsonData = JSON.parse(data);

console.log("Before Adding data",JSON.stringify(jsonData, null, 4));

// Modify the JavaScript object by adding new data
jsonData.users.push({
    name: user1.getName(),
    email: user1.getEmail(),
    password: user1.getPassword()
});


// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);

writeFileSync('userDetails.json', jsonString, 'utf-8', (err) => {
  if (err) throw err;
  console.log('Data added to file');
});

const update_data = readFileSync('userDetails.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data",JSON.stringify(updated_jsonData, null, 4));



 