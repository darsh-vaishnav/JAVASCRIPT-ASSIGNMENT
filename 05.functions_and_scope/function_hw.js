// Que 1.What is a function in JavaScript? List any four advantages of using functions in a program.

// ans . A function is a reusable block of code designed to perform aspecific task.

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure

//----------- Que 2 .
// function greetStudent(name) {
//     return "Hello"+name+",Welcome to Coding Gita!";
    
// }
// console.log(greetStudent(Pavitra));

//--------Que.3-----------------//
// Hoisting in JavaScript
// Hoisting is a JavaScript behavior in which function declarations can be called before they are defined in the code.
// Example:
// greetStudent();

// function greetStudent() {
//     console.log("Hello, welcome to CodingGita!");
// }

// // Output:
// // Hello, welcome to CodingGita!


// Why does it work?
// JavaScript processes the function declaration before executing the code. Therefore, we can call greetStudent() before writing its definition.
// Remember for exams: Function declarations are hoisted, so they can be called before their definition.


// //------------------Que.4-----------------//
// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(calculateAverage(80,90,70)) //80


 //------------------Que.5-----------------//
// - Parameters: Variables written inside the function definition to receive values.
// - Arguments: Actual values passed to the function when it is called.
// Example
// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(12, 5));

// // Output: 60


// Identify the parameters and arguments
// - Parameters: x, y
// - Arguments: 12, 5
// - Return value: 60
// Remember for exams: Parameters are variables in the function definition, whereas arguments are values passed during the function call.

// //-----------------Que 6-----------------//
// function isEven(a){
//     if (number %2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(24)); //true
// console.log(isEven(17)); //false

// //-----------------Que 7-----------------//
// function findPercentage(obtainMarks,totalMarks){
//     return(obtainMarks/totalMarks)*100;
// }
// console.log(findPercentage(450,500)); //91.2

//-----------------Que 8-----------------//
// If a function does not contain a `return` statement, JavaScript automatically returns `undefined`.
//  Example

// function greetStudent() {
//     console.log("Hello, student!");
// }

// let result = greetStudent();

// console.log(result);

// // Output:
// // Hello, student!
// // undefined

// Explanation:

// - `console.log()` inside the function prints the greeting.
// - The function has no `return` statement.
// - Therefore, `result` stores `undefined`.

// Remember for exams: A function without a `return` statement returns `undefined` by default.


// //-----------------Que 9-----------------//
// function calculateSimpleInterest(principal,rate,time){
//     return(principal*rate*time)/100;
// }
// console.log(calculateSimpleInterest(1000,5,2))//100

// //-----------------Que 10-----------------//

// //---10.a
// A function declaration can be called before it is defined because it is hoisted, whereas a function expression cannot generally be called before its assignment is executed.

// Example:
// // Function declaration
// function greet() {
//     console.log("Hello!");
// }

// // Function expression
// const sayHello = function() {
//     console.log("Hi!");
// };

// //-----10.b
// function studentResult(name, marks) {
//     return "Student " + name + " has scored " + marks + " marks.";
// }

// console.log(studentResult("Darsh", 92));
// console.log(studentResult("Mohit", 85));

// // Output:
// // Student Darsh has scored 92 marks.
// // Student Mohit has scored 85 marks.

//------------ Que 11 ----------------//

//------11.a
// ### Local Scope vs Global Scope

// - Global Scope: A variable declared outside a function can be accessed both inside and outside the function.
// - Local Scope: A variable declared inside a function can be accessed only within that function.

// ### Example


// let name = "Darsh"; // Global variable

// function greet() {
//     let age = 18; // Local variable

//     console.log(name);
//     console.log(age);
// }

// greet();

// // Output:
// // Darsh
// // 18

// console.log(name); // Darsh
// // console.log(age); // Error: age is not defined


// Remember for exams: Global variables are accessible outside functions, while local variables are accessible only within their function.

// //------11.b
// let course = "JavaScript"; // Global variable

// function displayAge() {
//     let age = 20; // Local variable
//     console.log(age);
// }

// displayAge();

// // Output: 20

// // console.log(age);
// // Error: age is not defined

// function displayCourse() {
//     console.log(course);
// }

// displayCourse();

// // Output: JavaScript

// //---------Que 12--------//
// function analyzeStudent(name,m1,m2,m3){
//     total=m1+m2+m3;
//     average=total/3;
//     return name + " scored total"+total+"with average"+average; 

// }

// console.log(analyzeStudent("Darsh", 85, 90, 95));  // Darsh scored total 270 with average 90
// console.log(analyzeStudent("Mohit", 75, 80, 85)); // Mohit scored total 240 with average 80

// // ------------- Que 13 -------------
// ### a) What is a nested function?

// A nested function is a function defined inside another function. The inner function can be called from within the outer function.

// ### b) JavaScript Program

// ```
function studentReport(name, m1, m2, m3) {

    function total() {
        return m1 + m2 + m3;
    }

    return name + " total marks: " + total();
}

console.log(studentReport("Darsh", 85, 90, 95));
console.log(studentReport("Mohit", 75, 80, 85));

// // Output:
// // Darsh total marks: 270
// // Mohit total marks: 240
// ```


// - `studentReport()` is the outer function.
// - `total()` is the inner (nested) function.
// - `total()` adds the three subject marks and returns their sum.
// - The outer function returns the student's name along with the total marks.

//----------------- Que 14
