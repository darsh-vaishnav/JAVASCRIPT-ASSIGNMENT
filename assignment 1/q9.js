// Declare without assigning a value
let message;

console.log("Before assignment:", message);

// Assign value later
message = "Hello, World!";

console.log("After assignment:", message);

// Declare and assign together
let userName = "Alice";

let userAge = 25;

let isStudent = true;

// Declare constant
const MAX_USERS = 100;

// Print all variables
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Is Student:", isStudent);
console.log("Maximum Users:", MAX_USERS);


// ============================================================
// ASSIGNMENT 9: BEST PRACTICES REFACTORING
// ============================================================

/*
BAD CODE:

let x;
let a = 1, b = 2, c = 3;
let pi = 3.14159;
let username = "John";
let itemcount = 0;
*/


// Use a meaningful variable name instead of x
let count = 0;

// Separate variables and give meaningful names
let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

// PI should not change, so use const
// Constants are commonly written in uppercase
const PI_VALUE = 3.14159;

// Use camelCase
let userName2 = "John";

// Use camelCase
let itemCount = 0;


// Print improved variables
console.log("Count:", count);
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Third Number:", thirdNumber);
console.log("PI:", PI_VALUE);
console.log("User Name:", userName2);
console.log("Item Count:", itemCount);