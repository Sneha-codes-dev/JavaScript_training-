//Task 1: E-commerce Cart System

let cart1 = [{name: "Shirt", price: 500},{name: "Shoes", price: 1500}];
let cart2 = [{name: "Watch", price: 2000}];

let cartMerge = [...cart1,...cart2];

cartMerge.push({name: "Hats", price: 100 });
console.log(cartMerge);
cartMerge.pop();

let total=0;

for (let item of cartMerge){
  total += item.price;
}

console.log(cartMerge);
console.log("Total:", total);

//Task 2: User Profile Management

let user = {name: "Naveen",role: "Trainee",salary: 20000
}

let update = {role: "Developer",salary: 50000
}
let updatedUser = {...user, ...update};
console.log(updatedUser);
let {name,role,salary} = updatedUser;
console.log(`${name} is now a ${role} earning ${salary}`);

//Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName, ...scores){
console.log("Teams:", teamName);
console.log("Scores:", scores);
let total1 = 0;
let highest =scores[0];
for(let score of scores){
  total1 += score;
  if(score>highest){
    highest = score;
  }

}
console.log("Total:", total1);
console.log("Highest:",highest);
}

teamScore("Sun Rises", 10,30,40,60,20);

//Task 4: Nested Data Extraction
let apiData = {
  user: {
    name1: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
}
let {user: {name1,address:{city,pincode}}} = apiData;
console.log(`${name1} lives in ${city} - ${pincode}`);

//Task 5: Array Dashboard 
let users = ["A", "B", "C", "D", "E"];

users.splice(2,2,"X", "Y");
console.log(users);

let threeUsers = users.slice(0,3);
console.log(threeUsers);

console.log(users.includes("B"));

console.log(users.indexOf("E"));

//Task 6: Data Cleaning

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

let flat =messyData.flat(Infinity);

flat.splice(5,2);
console.log(flat);

//Task 7: Sorting Bug Fix

let prices = [1000, 200, 50, 5000];
prices.sort((a, b) => a - b);
console.log(prices);   //JavaScript converts numbers to strings and sorts based on ASCII (Unicode) values by using default sort()

//Task 8: Analytics Report Generator

let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
]

let tot = orders.reduce((acc, currentValue) => {
  //  console.log(currentValue.amount);
  return acc+currentValue.amount ;  
}, 0);
console.log("Total",tot);

let avg = tot /orders.length;
console.log("Average:", avg);

//Task 9: Inventory System

let inventory = ["Shoes", "Bags", "Purses", "Hats"];
let inventory1 = ["Apple", "Banana", "orange"];
inventory.push("Watches", "Phones");
console.log(inventory);
inventory.pop();
inventory.splice(2,1, "Dress");
console.log(inventory.includes("Shirts"));

let finalInventory = [...inventory, ...inventory1];
console.log(finalInventory);
 

//Task 10: Interview Level Challenge
let flatdata;
function processData(...data){
  flatdata = data.flat(Infinity);
  console.log(flatdata);
  filterArry = flatdata.filter((item,index) => {
    return flatdata.indexOf(item) === index
  })
flatdata.sort((a,b)=>a-b);

}
processData(1,2,[3,4],[5,[6]]);
