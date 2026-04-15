//Task 1: Order System (setTimeout)
console.log("Order Placed!");
setTimeout(()=>{
  console.log("Preparing Food");
 },2000)

 setTimeout(()=>{
 console.log("Food Ready!!");
 },4000)

setTimeout(()=>{
 console.log("Delivered!!");
 },6000)

//Task 2: Digital Clock (setInterval)
let count = 0;
let clock = setInterval(()=>{
  let time = new Date()
  console.log(time.toLocaleTimeString());
  count++;
  if (count === 10){
    clearInterval(clock);
    console.log("Clock stopped!!")
  }
},1000)

//Task 3: Callback Hell Simulation
function loginUser(callback){
  setTimeout(()=>{
  console.log("User Logged in!!");
  callback();
 },1000)
}
function getUserData(callback){
setTimeout(()=>{
  console.log("User Data Fetched");
  callback();
 },1000)
}
function getUserPosts(callback){
 setTimeout(()=>{
  console.log("User Posts Fetched");
 },1000)
}

loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});

//Task 4: Fake API Promise
function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(() => reject("API Failed"));
    }, 2000);
  });
}

getProducts()
  .then(data => {
    console.log("Products:", data);
  })
  .catch(err => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Request Completed");
  });