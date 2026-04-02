                        //Section 1: Printing & User Interaction

//Print your name and designation in the console.
console.log("SnehaLatha M - MERN Stack Developer")

//Show an alert saying "Welcome to JavaScript Session".
alert("Welcome to JavaScript Session")

//Ask the user: "Do you like coding?" using confirm() and print the result.
let result = confirm("Do you like coding?")
console.log(result)

//Take user input for favorite food using prompt() and print it.
let food = prompt("What's your favourite food?")
console.log("Favourite food :", food)

//Display "Good Evening Team" on the UI using document.writeln()

document.writeln("Good Evening Team!!")


                        // Section 2: Console Methods

//Print a number using console.log().
console.log(20)

//Print a warning message: "This is a warning".
console.warn("This is a warning!")

//Print an error message: "Something went wrong!".
console.error("Something went wrong!!")

// //Clear the console after printing 3 messages.
 console.clear()


                          //Section 3: Data Types

//Create a variable with your name and print its type.
let myname = "Sneha"
console.log(typeof(myname))

//Store your age and print the datatype.
const age= 28
console.log(typeof(age))

//Store a boolean value (true/false) and print it
let boo  = false 
console.log(typeof(boo))

//Declare a variable without value and print it.
let x
console.log(x)

//Assign null to a variable and print it.
let y= null
console.log(y)


                          //Section 4: Arrays
                        
//Create an array of 5 fruits and print it.
let fruits = ["Apple","Banana","Orange","Strawberry","PineApple"]
console.log(fruits)

//Print the first and last element of the array.
console.log(fruits[0])
console.log(fruits[fruits.length - 1])

//Add one more fruit dynamically and print updated array.
fruits.push("Mango")
console.log(fruits)

//Remove the last element and print array.
console.log("remove last fruit:" ,fruits.pop())
console.log(fruits)

//Find the length of the array.
console.log(fruits.length)

                            //Section 5: Objects

//Create an object for a student (name, age, course).
let student = {
  stdname : "Sneha",
  stdage : 27,
  stdcourse : "Computers",
  fruit : ["Apple","mango","Orange"]
}
console.log(student)

// Print the student name.
console.log("Student Name: ", student.stdname)

// Add a new property (college) dynamically.
student.college = "UEL"
console.log(student)

// Access nested array inside object (like your fruit example).
console.log(student.fruit)

// Update a property value.
student.stdage = 28;
console.log("updated value is age:",student.stdage);


                                //Section 6: Operators

//Add two numbers and print result.
let a= 10;
let b=20;
console.log(a+b)

// Subtract two numbers.
console.log(a-b);

// Multiply two numbers.
console.log(a*b);

// Divide two numbers.
console.log(a/b);

// Find remainder using %.
console.log(a%b)

// Use exponent operator (**) to find power.
console.log(a**b)


                              //Section 7: Increment & Decrement

//Create a variable and use post increment.
let c=2;
c++;
console.log(c)

// Create a variable and use pre increment.
let d=3;
++d;
console.log(d)

// Show difference between num++ and ++num.
let num = 5;

let post = num++; // use first, then increment
console.log(post); // 5
console.log(num);  // 6

let pre = ++num; // increment first, then use
console.log(pre); // 7
console.log(num); // 7

// Use decrement operator and print values.
let num1 = 10;

let postDec = num1--; // use first, then decrease
console.log(postDec); // 10
console.log(num1);       // 9

let preDec = --num1; // decrease first, then use
console.log(preDec); // 8
console.log(num1);      // 8

// Predict output before running (important logic task 👇)
let e = 5;
let f = e++;
let c2 = ++e;

console.log(e);  // 7
console.log(f);  // 5
console.log(c2); // 7

                                       // Section 8: Real-Time Logic Tasks

//Ask user age and check if eligible to vote.
let userage = Number(prompt("what is your age?"));
if (userage >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
// Ask user name and greet: "Hello Naveen".
let username = prompt("Enter your name:");
console.log("Hello " + username);

// Store marks in array and print highest value.
let marks = [75, 88, 92, 67, 81];
let highest = Math.max(...marks);
console.log("Highest marks:", highest);

// Create object for fruits category (like your example) and access values.
let fruitsObj = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};
console.log(fruitsObj.tropical);
console.log(fruitsObj.berries[0]);

// Combine prompt + array:
// Ask user to enter 3 favorite fruits

let f1 = prompt("Enter first favorite fruit:");
let f2 = prompt("Enter second favorite fruit:");
let f3 = prompt("Enter third favorite fruit:");

// Store in array
let favFruits = [f1, f2, f3];

// Print them
console.log("Your favorite fruits are:", favFruits);