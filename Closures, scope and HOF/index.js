// Scope and closure, HOF
// Global -> Accessible to everyone
// Functional  -> Accessible to only to that function
// block level scope -> Accessible to only that block



// excalidraw Link : 

// https://excalidraw.com/#json=j1RsupIk-F6jP3WsEsvuP,Z44SlFWAp8iiRbd0F1QyfA


// let a = 10;
// const b = 20;
// var e = 90;

// if(true) {
// console.log(b)
// let d = 40;
// var e = 90;
//     console.log(d)
// }

// console.log(e) // var block ke bahar access kar sakte hain

// console.log(d) // nahi kar sakte, block ke bahar d access nahi kar sakte

// function greet() {

//     let c = 30;
// console.log(a)
//     var e = 90;
//     console.log(c)
// }

// console.log(e) // var function ke bahar access nahi kar sakte

// console.log(c) // nahi kar sakte, function ke bahar c access nahi kar sakte

// greet()
// console.log(a)

// let global = 30;

// function greet() {
//   let global = 40;

//   function meet() {
//     let global = 10;
//     console.log(global);
//   }

//   meet();
// }

// console.log(global)

// greet();

// function  createCounter() {

//   function increment() {
//     console.log("I am increment function")
//   }

//   return increment;
// }

// const count = createCounter();
// console.log(count) // [Function : increment] mere paas reference hain
// count();

// Exampe of Clousres

// Closure = A function that remembers variables from its outer scope even after the outer function has finished executing.

// function  createCounter() {

//   let count = 0;

//   function increment() {
//     count++;
//     return count;
//   }

//   return increment;
// }

// console.log(count)

// const counter = createCounter();
// console.log(counter)
// console.log(counter)
// console.log(counter)

// Closures use cases

// let balance = 500;

// // balance += "Rohit";
// balance -= 500;

// console.log(balance)

// let balance = 500;
// private

// let user = {

//   depoist: function (amount) {
//     if (typeof amount === "number" && amount > 0) {
//       balance += amount;
//       return balance;
//     }
//   },

//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount > 0 && balance >= amount) {
//       balance += amount;
//       return balance;
//     }
//   },

//   getBalance : function () {
//     return balance
//   }

// };

// balance = "Pratik";

// user.balance = "Pratik";
// console.log(user.getBalance())
// console.log(user.depoist("200"))

// console.log(user.depoist(500));

// method ko access (function)
// balance : usko directly access na kar paaye


// function createBankAccount() {

//   let balance = 500;

//   return user = {
//     depoist: function (amount) {
//       if (typeof amount === "number" && amount > 0) {
//         balance += amount;
//         return balance;
//       }
//     },

//     withdraw: function (amount) {
//       if (typeof amount === "number" && amount > 0 && balance >= amount) {
//         balance += amount;
//         return balance;
//       }
//     },

//     getBalance: function () {
//       return balance;
//     },
//   };

// }


// const customer = createBankAccount(); 
// console.log(customer.depoist(200)); 
// console.log(customer.balance); ubdefined de dega, nahi access ya manipulation hoga 

// console.log(customer.getBalance())
// console.log(customer.withdraw(100))




// High Order function 

// function double(value) { 

//   return function execute(num) { 
//     // console.log("Hello"); 
    
//     return num * value;
//   }
 
// } 

// const n = double(20)(5); 
// console.log(n)
// console.log(n)
// console.log(n(5))



