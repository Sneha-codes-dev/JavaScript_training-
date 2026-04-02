
// 1
var a = 10;
a = 20;
var a = 30;
console.log(a);  //30 var uses both reuse,redeclaration

// 2
var a = 5;
var a = 15;
console.log(a);    //15 var uses redeclaration

// 3
var a = 1;
a = 2;
a = 3;
console.log(a);   //3 var uses reassignment

// 4
var a = 7;
a = 14;
var a = 21;
a = 28;
console.log(a);   // 28 var allows redeclaration and reassignment

// 5
var a = 100;
var a = 200;
a = 300;
console.log(a);   // 300 var allows redeclaration and reassignment

// 6
var a = 9;
console.log(a);   //// 9 var stores value and prints it

// 7
var a = 11;
a = 22;
console.log(a);   // 22 var allows reassignment

// 8
var a = 50;
var a = 60;
var a = 70;
console.log(a);    // 70 var allows multiple redeclarations

// 9
var a = 2;
a = 4;
a = 6;
var a = 8;
console.log(a);   // 8 var allows reuse and redeclaration

// 10
var a = 99;
a = 88;
console.log(a);   //// 88 var allows reuse


// 11
let b = 10;
b = 20;
console.log(b);   // 20 let allows reassignment

// 12
let b = 5;
b = 15;
b = 25;
console.log(b);   // 25 let allows reassignment

// 13
let b = 1;
console.log(b);   // 1 let stores value and prints it

// 14
let b = 7;
b = 14;
console.log(b);   // 14 let allows reassignment

// 15
let b = 100;
b = 200;
b = 300;
console.log(b);   // 300 let allows reassignment

// 16
let b = 9;
let b = 18;
console.log(b);   // Error let does not allow redeclaration

// 17
let b = 50;
b = 60;
let b = 70;
console.log(b);   // Error let does not allow redeclaration

// 18
let b = 2;
b = 4;
console.log(b);   // 4 let allows reassignment

// 19
let b = 99;
b = 88;
b = 77;
console.log(b);     // 77 let allows reassignment

// 20
let b = 11;
b = 22;
console.log(b);     // 22 let allows reassignment


// 21
const c = 10;
console.log(c);     // 10 const stores value and prints it

// 22
const c = 5;
c = 15;
console.log(c);      // Error const does not allow reassignment

// 23
const c = 1;
const c = 2;
console.log(c);      // Error const does not allow redeclaration

// 24
const c = 7;
console.log(c);    // 7 const stores value and prints it

// 25
const c = 100;
console.log(c);    // 100 const stores value and prints it

// 26
const c = 50;
c = 60;
console.log(c);    // Error const does not allow reassignment

// 27
const c = 9;
console.log(c);    // 9 const stores value and prints it

// 28
const c = 20;
const c = 30;
console.log(c);     // Error const does not allow redeclaration

// 29
const c = 99;
console.log(c);     // 99 const stores value and prints it

// 30
const c = 11;
c = 22;
console.log(c);    // Error const does not allow reassignment


// 31
var a = 1;
var a = 2;
var a = 3;
console.log(a);     // 3 var allows multiple redeclarations

// 32
var a = 10;
a = 20;
a = 30;
var a = 40;
console.log(a);    // 40 var allows reassignment and redeclaration

// 33
var a = 5;
a = 15;
console.log(a);     // 15 var allows reassignment

// 34
var a = 100;
var a = 200;
var a = 300;
a = 400;
console.log(a);     // 400 var allows redeclaration and reassignment

// 35
var a = 7;
console.log(a);    // 7 var stores value and prints it

// 36
let b = 3;
b = 6;
b = 9;
console.log(b);   // 9 let allows reassignment

// 37
let b = 12;
let b = 24;
console.log(b);    // Error let does not allow redeclaration

// 38
let b = 8;
b = 16;
console.log(b);   // 16 let allows reassignment

// 39
const c = 2;
console.log(c);   // 2 const stores value and prints it

// 40
const c = 4;
c = 8;
console.log(c);   // Error const does not allow reassignment

