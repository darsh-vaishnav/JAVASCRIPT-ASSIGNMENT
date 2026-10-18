// // Function declaration
// function addition(p1, p2, p3) {
//     return p1 + p2 + p3;
// }

// function greeting(name) {
//     return `Welcome ${name}`;
// }

// console.log(greeting("Pravin"));

// function average(n1, n2, n3) {
//     let avg = (n1 + n2 + n3) / 3;
//     return { avg };
// }

// console.log(average(5, 10, 15));

// let ans = average(15, 20, 15);
// console.log(ans);

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(4));
// console.log(isEven(7));

// function percentage(marks, total) {
//     return (marks / total) * 100;
// }

// console.log(percentage(33, 50));

// const percentageValue = function (marks, total) {
//     return (marks / total) * 100;
// };

// console.log(percentageValue(75, 100));


// function greeting(name) {
//     return ("Welcome to Codinggita ,"+name);
// }

// console.log(greeting("Pravin")); // Pravin => Argument

// function addition(a,b) {
//     return a+b;
// }
// console.log(addition (2,3))

// function multiplication(a,b) {  // a,b are parameters
//     return a*b; //
// }
// console.log(multiplication (2,3)) // 2,3 are arguments


// function average(n1, n2, n3) {
//     let avg = (n1 + n2 + n3) / 3;
//     return avg.toFixed(2) ;
// }


// let marksOfStudent1= average(77, 80, 85);
// let marksOfStudent2 = average(73, 86, 75);
// console.log(marksOfStudent1,marksOfStudent2);


// function showMarks() {
//     let marks = 90;
//     console.log(marks);
// }

// showMarks();
// console.log(marks); // Error: marks is not defined

// let batch = "CSE";

// function printBatch() {
//     console.log(batch);
// }

// printBatch(); // CSE

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(4));
// console.log(isEven(7));

// function averageofTwo(x,y){
//     let avg = (x+y)/2;
//     return avg;
// };
// console.log(averageofTwo.apply(50,70))

// function showMarks(){
//     console.log(marks);
// }

// showMarks();
// console.log(marks);
// function displayAge(){
//     let age=20;
//     console.log(age);
// };

// console.log(age)

// let course = "JavaScript"

// function printCourse(){
//     console.log(course)
// }
// printCourse();

// function calculateMarksAndAverage(name,m1,m2,m3){
//     let total = m1+m2+m3;
//     let average = total/3;
//     return `The student ${name} gets a total marks = ${total} and an average marks = ${average}`
// }
// console.log(calculateMarksAndAverage("Aniket",77,85,92));

// function reportCard(name,m1,m2){
//     let total = m1+m2;
//     let average = total/3;
//     return `The student ${name} gets a total marks = ${total} and an average marks = ${average}`
// }
// console.log(calculateMarksAndAverage("Tarang",77,85));

// function checkPass(avg){
//     if (avg){
//         return "Pass"
//     }else{
//         return "Fail"
//     };
// }

// function studentReport(name,m1,m2){
//     function total(m1,m2){
//         return m1+m2;
//     };
//     let totalMarks = total(m1,m2);
//     return ` The student ${name} gets a total marks =${totalMarks}`
// };
// console.log(studentReport("Lavya",89,90))

// function main(){
//     function helper(){
//         return "Helper function called"
//     };
//     let res = helper();
//     return res;

// };

// console.log(main())

// function processMarks(m1,m2){
//     function sum(){
//         let total = m1+m2;
//         return total;
//     };
//     return sum();
// };
// console.log(processMarks(10,20))

// function studentSummary(name,m1,m2,m3){
//     function findTotal(){
//         let total = m1+m2+m3;
//         return total;
//     };
//     function findAverage(){
//         let average = findTotal()/3;
//         return average;
//     };
//     // return {
//     //     name,
//     //     total: findTotal(),
//     //     average: findAverage()
//     // };
//     let res1 =findTotal();
//     let res2 = findAverage();
//     return ` The student ${name} gets a total marks = ${res1} and average marks =${res2}`
// };
// console.log(studentSummary("Aniket",77,85,92))

// var collage = "Coding gita";

// function myFunc(){
//     console.log(collage);
// }
// showCollage();
// console.log(collage)

// var x = 10;

// function myFunc(){
//     console.log(x)
// };

// myFunc();
// console.log(myFunc())

// if(true){
//     var y = 20 ;
//     console.log(y);
// }
// console.log(y);
// function test() {
//     for (var i = 1; i <= 3; i++) {
//         console.log("Inside:", i);
//     }

//     console.log("After loop inside function:", i);
// }

// test();
// console.log(i); // Errori0

// function myFunc(){
//     for (var i=1; i<=5; i++){
//         console.log("Inner i",i)
//     };
// }
// myFunc();
// console.log("Outer i",i)

// var => hoisted with undefined 
// let & const => hoisted in TDZ (Temp Dead Zone)

// var x=10
// function x(){
//     console.log("Hello")
// }

var x = function(){
    co
}
let a=7;

function outer(){
    let b=a;
    function inner(){let c = 9;
        console.log(c); //9
        console.log(b); //8
        console.log(a); //7
        console.log(x); 
    };
    inner();
}
outer();

var name ="Daksh";
 function studentInfo(){
    var name = "Darshan"; // Darshan => this name variable overides the global variable name
    console.log(name);
 };
 console.log(name) // Daksh => Again print global variable;

 