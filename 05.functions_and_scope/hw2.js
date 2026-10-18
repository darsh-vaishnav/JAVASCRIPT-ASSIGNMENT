
// Q1.
// Function: A reusable block of code that
// performs a specific task.
//
// Four advantages:
// 1. Code reusability
// 2. Less code repetition
// 3. Easy debugging
// 4. Better code organization

// Q2. 

function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}

console.log(greetStudent("Darsh"));
console.log(greetStudent("Het"));

// Output:
// Hello Darsh, welcome to CodingGita!
// Hello Het, welcome to CodingGita!



// Q3. HOISTING


greet();

function greet() {
    console.log("Hello Student!");
}

// Output:
// Hello Student!


// Q4. 

const calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
};

console.log(calculateAverage(80, 90, 70));

// Output: 80


// Q5. 

function multiply(x, y) {
    return x * y;
}

console.log(multiply(12, 5));

// Output: 60



// Q6.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(24));
console.log(isEven(17));

// Output:
// true
// false



// Q7. 

function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));

// Output: 91.2



// Q8.

function sayHello() {
    console.log("Hello!");
}

let result = sayHello();

console.log(result);

// Output:
// Hello!
// undefined



// Q9. 


const calculateSimpleInterest = function(principal, rate, time) {
    return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));

// Output: 1000

// Q10(a). DECLARATION VS EXPRESSION
//
// Declaration:
// function greet() {}
//
// Expression:
// const greet = function() {};
//
// Difference:
// Function declarations can be called before
// their definition. Function expressions
// assigned to const/let cannot be called
// before the variable is initialized.


// Q10(b). STUDENT MESSAGE

function studentMessage(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentMessage("Darsh", 90));
console.log(studentMessage("Het", 85));

// Output:
// Student Darsh has scored 90 marks.
// Student Het has scored 85 marks.
