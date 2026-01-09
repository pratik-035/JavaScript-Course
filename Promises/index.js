// console.log("Hello World Start");

// code

// const p1 = fetch("https://api.github.com/users")

// fullfilled , reject

// p1.then((response) => {
//     // console.log(response);
//     console.log(response.json());
// })

// const p2 = p1.then((response) => {
//     return response.json();
// })

// p2.then((response) => {
//     console.log(response)
// })

// fetch("https://api.github.com/users")
// .then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });

// const p1 = new Promise((resolve, reject) => {

//   // resolve("Hello");
//   reject("Hello")
// })

// p1.then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// })

// Promise Chaininig
// fetch("https://api.github.com/users")
//   .then((response) => {

//     console.log(response);
//     if(!response.ok) {
//       throw new Error("Data is not present in server");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);

//     const parent = document.getElementById("first")

//     for(let i=0; i<data.length; i++) {
//     const image = document.createElement('img');
//     image.src = data[i].avatar_url;
//     image.style.height = "40px"
//     image.style.width = "40px"

//     parent.append(image);
//     }
//   })
//   .catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
//   })

// console.log("Hello World End");

// const j1 = {
//   name : "Rohit",
//   age : 30,
//   address : "Delhi",
//   c: undefined
// }

// // cpnvert to json
// const jsonFormat = JSON.stringify(j1);

// console.log(jsonFormat)

// const jsonFormat = `{
//   "name" : "Rohit",
//   "age" : 30,
//   "address" : "Delhi",
// }`;

// // console.log(typeof(jsonFormat))

// // json to Js object conversion

// const JsObject = JSON.parse(jsonFormat)

// console.log(JsObject)

const orderDetail = {
  orderId: 12165,
  food: ["Pizza", "Biryani", "Coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restuarant_location: "Delhi",
};

function placeOrder(orderDetail) {
  console.log(`${orderDetail.cost} Payment is in progress`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {

        if(Math.random()>0.9){
      console.log("Your payment is received and order gets placed");
      orderDetail.status = true;
      resolve(orderDetail);
        }
        else { 
            reject("Payment is Failed"); 
        }
    }, 3000);
  });
}

function preparingOrder(orderDetail) {
  console.log(`Your food preparation is started of ${orderDetail.food}`);

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {

        if(Math.random()>0.05) {
      console.log("Your order is now prepared");
      orderDetail.token = 78;
      resolve(orderDetail);
        }
        else { 
            reject("Food item is not present at restuarant")
        }
    }, 3000);
  });
}

function pickupOrder(orderDetail) {
  console.log(
    `Delivery boy is on the way to pickup order from ${orderDetail.restuarant_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {

        if(Math.random()>0.05) {
      console.log("I have pickedup the order");
      orderDetail.received = true;
      resolve(orderDetail);
      } else { 
        reject("Delivery boy unable to reach restuarant")
      }
    }, 3000);
  });
}

function deliverOrder(orderDetail) {
  console.log(
    `I am on my way to deliver the order ${orderDetail.customer_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order delivered successfully");
      orderDetail.delivery = true;
      resolve(orderDetail)
    });
  });
}

// iss tareeke se hum run kiye toh yeh function sab ek saath run hoo jaayega,  toh yeh galat ho jaayega  bhai ....

placeOrder(orderDetail)
  .then((orderDetail) => preparingOrder(orderDetail))
  .then((orderDetail) => pickupOrder(orderDetail))
  .then((orderDetail) => deliverOrder(orderDetail))
  .then((orderDetail) => {
    console.log(orderDetail)
  })
  .catch((error) => {
    console.log("Error : ", error);
  })
