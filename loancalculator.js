//User Input 

let name = prompt("Enter User Name:");
let age = prompt("Enter your age:");
let monthlysalary = prompt("Enter your monthly salary:");
let loanamount = prompt("Enter loan amount:");

//Type conversion

age= Number(age);
monthlysalary= Number(monthlysalary);
loanamount= Number(loanamount);

//Eligibility Check 

if(age >= 21 && age <= 60 && monthlysalary >= 25000) {
      console.log("You are Eligible!")
}else{
  console.log("You are not Eligible!!")
}

// EMI Calculation

let emi = loanamount;
emi /= 12;
console.log("EMI:", emi);

//Loan Category

if(loanamount>500000){
  console.log("High Loan Amount");
}else if(loanamount>200000){
  console.log("Medium Loan amount");
}else{
  console.log("Low Loan Amount");
}

//Risk Level

monthlysalary>50000 ? console.log("Low Risk") : console.log("High Risk");

//Customer Type

switch(true){
  case (emi > 40000):
    console.log("Customer Type: Premium Customer");
    break;

  case (emi > 20000):
    console.log("Customer Type: Standard Customer");
    break;

  default:
    console.log("Customer Type: Basic Customer");
}