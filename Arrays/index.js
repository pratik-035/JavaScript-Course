// Array 

// let marks1 = 100; 
// let marks2 = 50; 
// let marks3 = 70; 
// let marks4 = 80;


// let marks = [100, 50, 70, 80, 90]; 


// console.log(marks)
// console.log(marks.length)

// let arr = [100, 30, "Pratik", true]; 

// console.log(arr)
// console.log(arr[2]) 

// console.log(typeof arr)  // object

// arr[1] = 90; 
// console.log(arr) 


// push operation -> insert element at the end
// arr.push(90); 
// arr.push("Strike"); 
// console.log(arr) 

//  pop Operation : Delete element from end 
// arr.pop(); 
// console.log(arr) 


// starting add kar sakta hu, delete the element first place

// arr.unshift(10); 
// arr.unshift(50); 
// console.log(arr)

// delet kar sakta hu (staring se) 
// arr.shift(); 
// console.log(arr) 



// Iterate
// let arr = [10, 20, 30, 90, 11]; 

// for(let i=0; i<arr.length; i++) { 
//     console.log(arr[i])
// }


// for of loop
// for(let num of arr) {
//     console.log(num)
// } 




// let arr = [10, 20, 30, 90, 11];  

// copy by reference
// let arr2 = arr;

// arr2.push(30); 

// console.log(arr)
// Object (non primitive) : Copy by reference hote hain
// Primitive : Copy by value

// const arr = [10, 20, 30, 90, 11];   
// arr[2] = 30;


// arr = [80, 90, 11]; 

// console.log(arr)



// Slice and Splice

// const arr = [10, 20, 30, 90, 11];   
// const arr2 = arr.slice(2, 4); 

// console.log(arr2)
// console.log(arr) // no effect in original array 


// const arr3 = arr.splice(1,3, "Rohit", 19, 50, 31, 65) 
// console.log(arr3) 
// console.log(arr) // affect in original array 




// Spread Operator 

// const arr = [10, 20, 30, 90, 11]; 
// const arr2 = ["Rohit", 26, true];
// const arr4 = [91, 4, false];  

// arr.push(arr2); 
// console.log(arr) // [ 10, 20, 30, 90, 11, [ 'Rohit', 26, true ]] 


// .concat() return a new array
// const arr3 = arr.concat(arr2)
// const arr3 = arr.concat(arr2, arr4) 
// const arr3 = [arr, arr2, arr4] // [ [ 10, 20, 30, 90, 11 ], [ 'Rohit', 26, true ], [ 91, 4, false ] ]
// console.log(arr3) 


// spread operatot perscpective 

// const arr3 = [...arr, ...arr2, ...arr4]; 
// console.log(arr3)



// const names = ["Alice", "Bob", "Charlie", "Bob"];

// console.log(names.toString());
// console.log(typeof names.toString());   

// console.log(names.join('-')); 

// searching element 

// console.log(names.indexOf("Bob")); // 1
// console.log(names.indexOf("Bobb")); // -1 (if element is not exist) 

// console.log(names.lastIndexOf("Bob")); // 3 
// console.log(names.includes("Bob")) // true
// console.log(names.includes("Manoj")) // false


// Sorting 

// const names = ["Alice",  "Pratik" , "Mohit","Bob", "Charlie", "Bob"]; 


// ascending order

// names.sort(); 
// console.log(names) // [ 'Alice', 'Bob', 'Bob', 'Charlie', 'Mohit', 'Pratik' ] 
// console.log(names) // [ 'Bob', 'Bob', 'Charlie', 'Mohit', 'Pratik', 'alice' ] (because of ascii table) 

// names.reverse(); 
// console.log(names);  

// descending order 
// names.sort()
// names.reverse() 
// console.log(names)




// const a = [101, 90, 80, 32, 91]; 
// const a = ["101", "90", "80", "32", "91"]; // isko yeh aisa samjhega (matlab string ke jaisa dekhta hain) 

// a.sort()
// console.log(a) 



// const arr = [10, 40, 31, 71, 5, 11];  

// 10, 40
// a = 10
// b = 31 

// -ve : pehle a aayega fr b aayega 
// +ve : pehle b aayega fr a aayega

// ascending order
// arr.sort((a, b) => a - b);  

// descending order 
// arr.sort((a, b) => b - a)

// console.log(arr) 


// flattening array 

// const arr = [10, 30, 50, [40, 90, [60, 11, 19, 99], 11], 80];  // 2D Array

// const a = arr.flat(2);
// console.log(a)

// original array change nahi hoga
// console.log(arr)


// console.log(arr[3][2][1]) // 11


// Array ka jaduu , joh actual array mein hota hi nahi hain, sirf javascript mein hota hai .
const a = [10, 309, "Pratik", 9.3, true]
// a.name = "Mohin"

console.log(a["1"])
console.log(a)  



