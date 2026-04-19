let product =[];
let apiKey = "https://fakestoreapi.com/products";
let main = document.getElementById("main");

let loader = document.getElementById("loader");
loader.style.display = "block";

fetch(apiKey).then((data) => {
  return data.json()
}).then((jsData) => {
  //let api = document.querySelector(".api")
  product = jsData;
  displayProduct(jsData);
})
.catch((error)=>{
  let api = document.querySelector(".api");
  api.innerText = "Error loading data";

    api.style.color = "red"

    console.log(error.message);
    
})
 .finally(() => {
    loader.style.display = "none";
    main.style.display = "block";
  });



function displayProduct(prod) {
  let api = document.querySelector(".api");
  api.innerHTML= "";

  if (prod.length === 0) {
    api.innerHTML = "<h2>No products found!!</h2>";
    return;
  }

  prod.forEach((element) => {
    // console.log(element);
    let ApiChild = document.createElement("div");

    ApiChild.innerHTML = `<h1>${element.title.slice(0,20) + " ..."}</h1> <img src="${element.image}" />  <p>${element.description.slice(0,60)+" ..."}</p> <button onclick="viewDetails(${element.id})" > View More </button>`;
    api.append(ApiChild);
  });
}

let search = document.querySelector("#search");

search.addEventListener("input", () => {
  let value = search.value.toLowerCase();

  let filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(value)
  );

  displayProduct(filteredProducts);
});

function low(){
  let sort = product.sort((a,b) => a.price - b.price);
  displayProduct(sort);
}

function high(){
  let sort = product.sort((a,b) => b.price - a.price);
  displayProduct(sort);
}

let categoryFilter = document.querySelector("#category");

categoryFilter.addEventListener("change", () => {
  let value = categoryFilter.value;

  if(value === "all") {
    displayProduct(product);
  } else{
    let filtered = product.filter((c) => c.category === value);
    displayProduct(filtered);
  }
  
});

function viewDetails(id) {
  let selected = product.find((item) => item.id === id);

  document.querySelector("#title").innerText = selected.title;
  document.querySelector("#image").src = selected.image;
  document.querySelector("#description").innerText = selected.description;
  document.querySelector("#price").innerText = "₹ " + selected.price;

  document.querySelector("#modal").style.display = "block";
}

document.querySelector("#closeBtn").onclick = function () {
  document.querySelector("#modal").style.display = "none";
};








