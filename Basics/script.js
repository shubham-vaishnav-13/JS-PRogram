// console.log(`Hello`);

// single line Comment
// window.alert(`Hello Guys`);

/* multi 
line 
comment
*/

// let var1 = document.getElementById("head1");
// var1.textContent = `Hello World`;

// document.getElementById("para").textContent = `Shubham`;

// let x = 100;
// let gpa = 10.00;
// let price = 520.456;
// console.log(`The value of x is : ${x}`);
// console.log(`The value of gpa is : ${gpa}`);
// console.log(`The value of price is : ${price}`);
// console.log(typeof x);

// console.log(5**50);

// let username;
// username = prompt("Enter Your Name :");
// console.log(username);      
// let username;
// document.getElementById("mysubmit").onclick = function() {
//     username = document.getElementById("namev").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// Type Conversion
// let age = prompt("Enter Age : ");
// age = Number(age);
// age+=1;
// console.log(age);

// document.getElementById("mysubmit").onclick = function(){
//     let randomNum = Math.floor(Math.random()*100);
// console.log(randomNum)
// }

// const radius = document.getElementById("namev").value;
//     let ans = 2 * 3.14159 * radius;
//     ans += "cm"
//     document.getElementById("anstext").textContent = `Circumference is : ${ans}`;
//     document.getElementById("anstext").style.display ="block"; 

// const check5 = document.getElementById("five");
// const check4 = document.getElementById("four");
// const check3 = document.getElementById("three");
// const check2 = document.getElementById("two");
// const check1 = document.getElementById("one");

// const yes = document.getElementById("yesrad");
// const no = document.getElementById("norad");
// const mysubmit = document.getElementById("mysubmit");

// mysubmit.onclick = function(){
//     if(check1.checked){
//         console.log("Not good");
//     }else if(check2.checked){
//         console.log(" good");
//     }
// }

// // Chanining of methods
// let username = prompt("Enter  uname");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// Login Script
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter Username");
//     password = window.prompt("Enter password");

//     if(username === "Shubham" && password ==="1234"){
//         console.log("You have sucessfully Logged In");
//         loggedIn = true;
//     }else{
//         alert("Wrong password or username");
//     }
// }

// Number Guessing Game 
// const min = 1;
// const max = 100;

// let val;
// var random = Math.floor(Math.random()*(max-min+1));

// do{
//     val = prompt("Guess between 1-100");
//     if(val == random){
//         console.log("Perfect Guesss");
//         break;
//     }else if(val < random){
//         console.log("Guess High");
//     }else{
//         console.log("Guess Low");
//     }
// }while(true);

// console.log(random);