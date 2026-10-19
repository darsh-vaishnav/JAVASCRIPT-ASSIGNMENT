
// SECTION 1: WHAT IS SCOPE?

// Q1
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
// Output:
// Surat
// India
// city: global, country: function-scoped

// Q2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
// Output:
// 550
// 500

// Q3
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}
// Scope:
// college: global
// name, age: function-scoped in student()
// subject: function-scoped in teacher()

// Q4
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
// second(); // ReferenceError: number is not defined

// Q5
var country = "India";
function displayCountry() {
    var localCity = "Surat";
    console.log(country);
    console.log(localCity);
}
displayCountry();
console.log(country);
// Output:
// India
// Surat
// India


// SECTION 2: GLOBAL SCOPE

// Q6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
// Output:
// I like Cricket
// Cricket

// Q7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
// Output:
// English
// Gujarati
// Gujarati

// Q8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
// Output:
// 75

// Q9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
// Output:
// Favorite color: Red
// Red
// console.log(message); // ReferenceError

// Q10
var school = "Sunrise School";
function showSchool() {
    console.log(school);
}
function updateSchool() {
    school = "Green Valley School";
}
showSchool();
updateSchool();
showSchool();
console.log(school);
// Output:
// Sunrise School
// Green Valley School
// Green Valley School


// SECTION 3: FUNCTION SCOPE

// Q11
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
// Output: 300
// console.log(first); // ReferenceError

// Q12
function employee() {
    var salary = 30000;
}
employee();
// console.log(salary); // ReferenceError

// Q13
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
// Output:
// 25
// 15

// Q14
function calculateResult() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculateResult();
calculateResult();
// Output:
// 50
// 50

// Q15
function calculateArea() {
    var length = 8;
    var width = 4;
    var area = length * width;
    console.log(area);
}
calculateArea();
// Output: 32


// SECTION 4: NO BLOCK SCOPE WITH var

// Q16
if (10 > 5) {
    var result = "Success";
}
console.log(result);
// Output: Success

// Q17
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
// Output: 2

// Q18
var message = "Start";
{
    var message = "End";
}
console.log(message);
// Output: End

// Q19
if (false) {
    var result = 100;
}
console.log(result);
// Output: undefined

// Q20
if (true) {
    let secret = "Hidden";
    console.log(secret);
}
// Output: Hidden
// console.log(secret); // ReferenceError


// SECTION 5: BLOCK SCOPE WITH LOOPS

// Q21
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
// Output:
// 2
// 4
// 6
// Final: 8

// Q22
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
// Output:
// 1
// 2
// 3
// Count: 4

// Q23
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
// Output:
// 5
// 4
// 3
// After loop: 2

// Q24
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
// Output:
// Item: 1
// Item: 2
// Item: 3
// Last item: 4

// Q25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
// Output:
// 1
// 2
// 3
// 4
// console.log(step); // ReferenceError


// SECTION 6: FUNCTION SCOPE INSIDE LOOPS

// Q26
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
// Output:
// 10
// 20
// 30
// Final: 4

// Q27
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
// Output:
// 60
// 70
// 80
// 90
// console.log(marks); // ReferenceError outside student()

// Q28
function testLoop() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
testLoop();
// Output:
// 5
// 6
// 7
// Final value: 8

// Q29
function calculateLoop() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
// console.log(i); // ReferenceError
calculateLoop();
// Output:
// 1
// 2

// Q30
function printNumbers() {
    for (var number = 1; number <= 5; number++) {
        console.log(number);
    }
    console.log("After loop:", number);
}
printNumbers();
// Output:
// 1
// 2
// 3
// 4
// 5
// After loop: 6
// console.log(number); // ReferenceError outside function


// SECTION 7: HOISTING WITH var

// Q31
console.log(score);
var score = 90;
console.log(score);
// Output:
// undefined
// 90

// Q32
var a = 10;
function testHoisting() {
    console.log(a);
    var a = 20;
    console.log(a);
}
testHoisting();
// Output:
// undefined
// 20

// Q33
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
// Output:
// undefined
// undefined
// 100
// 200

// Q34
function calculateHoisting() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculateHoisting();
// Output:
// undefined
// 50
// Hoisted equivalent:
// var total;
// console.log(total);
// total = 50;
// console.log(total);

// Q35
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
// Output:
// undefined
// 100


// SECTION 8: FUNCTION DECLARATION HOISTING

// Q36
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
// Output:
// Hello from CodingGita

// Q37
display();
function display() {
    console.log("Function is hoisted completely");
}
// Output:
// Function is hoisted completely

// Q38
// greet(); // TypeError: greet is not a function
var greet = function() {
    console.log("Hi");
};
// Calling greet() before assignment fails because
// the hoisted variable initially contains undefined.

// Q39
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
// Output:
// function
// I am hoisted

// Q40
var welcomeMessage = "Welcome to CodingGita";
showMessage();
function showMessage() {
    console.log(welcomeMessage);
}
// Output:
// Welcome to CodingGita


// SECTION 9: SCOPE CHAIN

// Q41
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
// Output:
// 2025
// CSE
// CodingGita

// Q42
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        // console.log(innerVar); // ReferenceError
    }
    inner();
}
outer();
// Output:
// I am global
// I am outer

// Q43
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
// Output: 1 2 3

// Q44
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);
// Output:
// first
// global

// Q45
var country = "India";
function outer() {
    var state = "Gujarat";
    function middle() {
        var city = "Surat";
        function inner() {
            var area = "Adajan";
            console.log(area);
            console.log(city);
            console.log(state);
            console.log(country);
        }
        inner();
    }
    middle();
}
outer();
// Output:
// Adajan
// Surat
// Gujarat
// India


// SECTION 10: VARIABLE SHADOWING

// Q46
var score = 50;
function testScore() {
    var score = 90;
    console.log(score);
}
testScore();
console.log(score);
// Output:
// 90
// 50

// Q47
var name = "Global Name";
function showName() {
    var name = "Local Name";
    console.log(name);
}
showName();
console.log(name);
// Output:
// Local Name
// Global Name

// Q48
var value = 10;
function update() {
    value = 20;
    console.log(value);
}
update();
console.log(value);
// Output:
// 20
// 20

// Q49
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
// Output:
// Inside: Red
// Outside: Blue

// Q50
var marks = 70;
function showMarks() {
    var marks = 95;
    console.log("Inside:", marks);
}
showMarks();
console.log("Outside:", marks);
// Output:
// Inside: 95
// Outside: 70


// SECTION 11: NESTED FUNCTIONS

// Q51
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
// Output:
// Jenil
// Kartik Sir

// Q52
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
// Output:
// Parent
// Child
// Grandchild

// Q53
function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
    inner();
}
outer();
// Output:
// Hidden
// Calling inner() outside outer() causes ReferenceError
// because inner is local to outer().

// Q54
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
// Output:
// Hello students

// Q55
function studentInfo() {
    var name = "Rahul";
    var course = "JavaScript";
    function display() {
        console.log("Name:", name);
        console.log("Course:", course);
    }
    display();
}
studentInfo();
// Output:
// Name: Rahul
// Course: JavaScript


// SECTION 12: COMMON ERRORS WITH var

// Q56
function test() {
    x = 100;
}
test();
console.log(x);
// Output in a non-strict script:
// 100
// Missing declaration may accidentally create a global.
// In strict mode, x = 100 causes ReferenceError.

// Q57
if (true) {
    var x = 20;
}
console.log(x);
// Output: 20

// Q58
console.log(a);
var a = 10;
// Output: undefined

// Q59
var x = 10;
var x = 20;
console.log(x);
// Output: 20

// Q60
function calculate() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
// Output: 15
// console.log(total); // ReferenceError outside calculate()
