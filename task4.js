//Task 13: Real-Time Alert System (IIFE)

(function () {
  alert("Flash Sale: 50% OFF on Shirts");
})();


//Task-1 E-Commerce Discount System

function calculateDiscount(product,price){
  let discPrice;
  if(price>1000) {
    discPrice = price - (price * 20) / 100;
  }else {
    discPrice = price - (price * 10) / 100;
  }
  console.log("Product:", product);
  return discPrice;
}
console.log("Final Price:", calculateDiscount("Shoes", 2000));

//Task 2: Order Processing using Callback

let placeOrder = function(callback) {
  console.log("Order placed");   

  callback(500);                 
}

let payment = function(amount) {
  console.log("Payment of " + amount + " successful");  

  orderSuccess();                
}

let orderSuccess = function() {
  console.log("Order delivered"); 
}

placeOrder(payment);

console.clear();

//Task 3: Employee Data Loop System

let employees = [
  { name: "Navi", salary: 50000 },
  { name: "John", salary: 70000 }
];
for (let emp of employees) {
  if (emp.salary > 60000) {
    console.log(emp.name + ": High Salary");
  } else {
    console.log(emp.name + ": Normal Salary");
  }
}

//Task 4: Login Attempts (While Loop)

let attempts = 1;
let password;

while (attempts <= 3) {
  password = prompt("Enter password:");

  if (password === "1234") {
    console.log("Login success");
    break;
  }
  else{
    console.log("Attempts " + attempts)
  }
   
  attempts++;
}
if(attempts>3){
  console.log("Login Failed");
}

//Task 5: Coupon Generator (Generator Function)

function* offers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Cashback";
}
let gen = offers(); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

if(gen.next().done){ 
  console.log("now all off expired"); 
}

//Task 6: Shopping Cart Total (for...of)

let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
  total = total + price;
}
console.log("Total Bill:", total);

// //Task 7: User Profile System (for...in)

let user = {
  name: "Navi",
  role: "Developer",
  location: "India"
};

for (let key in user) {
  console.log(key + " : " + user[key]);
}

//Task 8: Factory Pattern (Function Reuse)

function createPhone() {
  return "Phone";
}
function createBattery() {
  return "Battery";
}
function createCharger() {
  return "Charger";
}
function createOrder() {
  return createPhone() + " + " + createBattery() + " + " + createCharger();
}
console.log("Your Order:", createOrder());

//Task 9: College Form with Default Values

let collegeForm = (name,age,department = "Not Assigned")=>{

  console.log("name :",name);
  console.log("age :",age);
  console.log("department :",department);
}
collegeForm("Sneha",28,"CSE")
collegeForm("john",28)

//Task 10: Currying - EMI Calculator

function emi(P){
  return function pricipal(R){
    return function rate(T){
        console.log(EMI = (P * R * T) / 100)
      
    }
  }
}
emi(10000)(2)(12);

//Task 11: Even/Odd Analyzer

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " → Even");
  } else {
    console.log(i + " → Odd");
  }
}

//Task 12: Function Scope Debugging

function scopeCheck(){
  if(true){
    var a = "global scope and function scope";
     let b = "block scope"
     const c = "block scope"
     console.log(b);
     console.log(c);
    }
    
    console.log(a);
}
scopeCheck()

// //Real-Time Alert System (IIFE)

// // (function () {
// //   alert("Flash Sale: 50% OFF on Shirts");
// // })();

// //Task 14: Marks Calculator with Return

function marks(m1, m2, m3) {
  let total = m1 + m2 + m3;
  let avg = total / 3;

  console.log("Total:", total);
  console.log("Average:", avg);
}

marks(80, 90, 70);

//Task 15: Retry Offer System (Generator + Condition)

function* off() {
  yield "10% OFF";
  yield "20% OFF";
}

let e = off();

let result = e.next();

while (!result.done) {
  console.log(result.value);
  result = e.next();
}

console.log("All offers expired");