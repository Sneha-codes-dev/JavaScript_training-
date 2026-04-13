//Task 1: E-commerce Cart Total

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
]

let total = cart.reduce((acc,c)=>acc + c.price * c.qty, 0);
console.log("Total" , total);

let prod = cart.filter(c => c.price > 1000);
console.log(prod);

let upperCase = cart.map(c => c.name.toUpperCase());
console.log(upperCase);

//Task 2: Student Result System

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(stud => stud.marks < 50);
console.log(failed);

let distint = students.some(dist => dist.marks > 80);
console.log(distint);

let allPass = students.every(all => all.marks > 35);
console.log(allPass);

let firstFail = students.find(first => first.marks < 50);
console.log(firstFail);

//Task 3: Employee Salary Analysis

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updateSalary = employees.map(curVal => curVal.salary + curVal.salary * 0.1  )
console.log(updateSalary);

let highSalary = employees.filter(sal => sal.salary > 30000);
console.log(highSalary);

let totalSalary = employees.reduce((total, currt) => total + currt.salary , 0)
console.log(totalSalary);

let sortedSalary = employees.sort((a,b) => b.salary-a.salary);
console.log(sortedSalary);

//Task 4: String Real Use Case (Search System)

let products = ["Laptop", "Mobile", "Tablet", "Camera"];
console.log(products.includes("Mobile"));

let lower = products.map(low => low.toLowerCase());
console.log(lower);

console.log(products.indexOf("Tablet"));

console.log(products.join("-"));

//Task 5: Date Real-Time Task (Age Calculator)

let input = prompt("Enter your Date of Birth in a Format YYYY-MM-DD");
let dob = new Date(input);
//console.log(dob);

let today = new Date();

let year = today.getFullYear() - dob.getFullYear();
console.log(`You are ${year} years old`);


//Task 6: Login Validation System

let users =  [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];
let userName = prompt("Enter your UserName:");
let pwd = prompt("Enter your Password");

let user = users.find(u => u.username === userName );
console.log(user);

if(user && user.password === pwd){
  console.log("Login Success");
} else{
  console.log("Invalid Credentials ")
}

//Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30];
let even = numbers.filter(e => e % 2 === 0 );
console.log(even);

let hasOdd = numbers.some(o => o % 2 !== 0);
console.log(hasOdd);

let evenAll = numbers.every(all => all % 2 === 0);
console.log(evenAll);

let first = numbers.find(f => f>20)
console.log(first);

//Bonus Challenge

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];


let revenue = orders.filter(o => o.status === "delivered").reduce((sum, o) => sum + o.amount, 0);
console.log(revenue);

let pending = orders.filter(o => o.status === "pending");
console.log(pending);

let bigOrder = orders.some(o => o.amount > 1000);
console.log(bigOrder);

let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log(sortedOrders);