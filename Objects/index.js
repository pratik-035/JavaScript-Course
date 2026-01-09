// Object
// key value
// CRUD Operation : Create, Read, Update, Delete

// Create
// const user = {
//     name : "Pratik",
//     "age" : 23,
//     emailId : "pratik@gmail.com",
//     amount : 3400,
//     "home address" : "Mumbai"
// }

// Behind the scenes, joh key hoti hain woh as a string hi store hota hain
// Aksar . format se hi access karte hain
// console.log(user["name"]);
// console.log(user.age) // error maarega
// console.log(user["age"])
// console.log(user["home address"])

// Read

// console.log(user)
// console.log(typeof user)

// console.log(user.age)
// console.log(user.amount)

// Insert
// user.aadhar = 1234;
// console.log(user)

// Update
// user.amount = 5000;
// console.log(user) // amount : 5000

// Delete
// delete user.emailId;
// console.log(user) // emailId deleted

// const user = {
//     name : "Pratik",
//     age : 23,
//     emailId : "pratik@gmail.com",
//     amount : 3400,
// }

// const user2 = user; // reference copy
// user2.age = 90;

// console.log(user)

// Imporatant hain

// yeh aapke ek array create karega and saare keys rakh ke output dega
// console.log(Object.keys(user));

// yeh aapke ek array create karega and saare keys rakh ke output dega
// console.log(Object.values(user));

// Lekin dono chahiye keys and values both, also it will return array
// console.log(Object.entries(user))

// for(let keys in user) {
//     console.log(keys, user[keys])
// }

// user.keys => undefined
// user[keys] => user["name"] => "Pratik" ... and so on ...

// const user = {
//     name : "Pratik",
//     age : 23,
//     emailId : "pratik@gmail.com",
//     amount : 3400,
// }

// for of loop array pe hi laga sakte hain

// const temparr = Object.keys(user);
// console.log(temparr)
// for(let keys of temparr) {
//     console.log(keys)
// }

// for(let values of Object.values(user)) {
//     console.log(values)
// }

// console.log(Object.entries(user))
// [
//   [ 'name', 'Pratik' ],
//   [ 'age', 23 ],
//   [ 'emailId', 'pratik@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

// for(let values of Object.entries(user)) {
//     console.log(values)
// }

// Destructing karke bhi kar sakte hain
// for(let [keys, value] of Object.entries(user)) {
//     console.log(keys, value)
// }

// Not a good method, rarely use karoge
// const name = user.name;
// const age = user.age;

// Object ko Destructuring karna
// const {name, age, amount} = user;
// console.log(name, age, amount)

// const {name: userName, age: userAge} = user;
// console.log(userName, userAge)

// const arr = [10, 20, 40, 90, 11];
// const [first, second] = arr;
// console.log(first, second)

// const user = {
//   name: "Pratik",
//   age: 23,
//   emailId: "pratik@gmail.com",
//   amount: 3400,
//   greeting: function () {
//     console.log(`Strike is coming on 18th October ${this.name}`);
//     return 20;
//   },
// };

// const user2 = {
//   name: "Mohan",
//   account: 56,
//   greeting: function () {
//     console.log(`Strike is coming on 18th October ${this.name}`);
//     return 20;
//   },
// };

// user2.greeting = user.greeting;
// console.log(user2);
// user2.greeting(); // Strike is coming on 18th October Mohan

// const va = user.greeting();
// console.log(va) 



// nested object 

// const user = {
//   name: "Pratik",
//   age: 23,
//   emailId: "pratik@gmail.com",
//   amount: 3400, 
//   address : { 
//     city : "Mumbai", 
//     state : "Maharashtra",
//   }
// }


// shallow copy 

// const user2 = {...user};
// user2.name = "Mohan";  
// user2.address.city = "Pune"; 

// console.log(user2)
// console.log(user)


// console.log(user.address) 
// console.log(user.address.city)c


// deep copy 
// also know the limitation of structuredClone 

// const user2 = structuredClone(user); 
// user2.address.city = "Pune"; 
// console.log(user2) 
// console.log(user) 


// KeY: String || Symbol (phele string hi hota tha, lekin 2015 mein update aaya ki hum keys ko symbol ki tarah bhi treat kar sakkte hain)
 
const sym = Symbol("id"); 
// symbol 98 % use bhi nahi  hoata hain code mein, jab aap library bana rahe honge tab yeh use aata hain, and as a beginner zaroorat nahi hain samajne ki, 


const user = { 
    name: "Rohit", 
    age : 20, 
    0: 100, 
    2: "Mohan", 
    // sym: "Hello Ji" (not work like this, since it will treat it as string key) 
    [sym] : "Hello Ji"
}

const arr = [10, 20, 30, 40]; 

// behind the scenes of array 

// { 
//     0 : 10, 
//     1: 20
//     2: 30, 
//     3: 40
// }

// console.log(user[2]); 
console.log(user[sym])

