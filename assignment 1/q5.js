// -------------------- PART A: OBJECT --------------------

// Create student object
let student = {
    name: "Darsh",
    age: 18,
    isEnrolled: true
};

// Print whole object
console.log("Student:", student);

// Print only name
console.log("Student Name:", student.name);

// Print only age
console.log("Student Age:", student.age);


// -------------------- PART B: ARRAY --------------------

// Array containing numbers
let numbers = [1, 2, 3, 4, 5];

// Mixed array
let mixed = [1, "hello", true, null];

// First element
console.log("First Element:", numbers[0]);

// Last element
console.log("Last Element:", numbers[4]);

// Print complete mixed array
console.log("Mixed Array:", mixed);

/*
Why is it better to keep arrays with one data type?

Keeping the same type of data makes the array
easier to understand and process.

Example:

let numbers = [10, 20, 30, 40];

This is easier to work with than:

let mixed = [10, "Hello", true, null];
*/


// -------------------- PART C: FUNCTION --------------------

// Create greet function
function greet(name) {
    return "Hello, " + name + "!";
}

// Call function twice
let message1 = greet("Darsh");
let message2 = greet("Rahul");

// Print messages
console.log(message1);
console.log(message2);
