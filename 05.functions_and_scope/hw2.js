
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



// Q11. 

let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

displayAge();
// console.log(age); // ReferenceError: age is not defined

function displayCourse() {
    console.log("Course:", course);
}

displayCourse();

// Output:
// Age: 20
// Course: JavaScript


// Q12.

function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
        " with average " + average;
}

console.log(analyzeStudent("Darsh", 85, 90, 80));
console.log(analyzeStudent("Mohit", 70, 75, 65));

// Output:
// Darsh scored total 255 with average 85
// Mohit scored total 210 with average 70


// Q13. 

function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }

    return name + " total marks: " + total();
}

console.log(studentReport("Darsh", 85, 90, 80));

// Output:
// Darsh total marks: 255


// Q14. 

function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return "Student: " + name +
        "\nTotal Marks: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nResult: " + result;
}

console.log(generateReport("Darsh", 85, 90, 80));
console.log(generateReport("Mohit", 30, 35, 25));

// Output:
// Student: Darsh
// Total Marks: 255
// Average: 85.00
// Result: Pass
//
// Student: Mohit
// Total Marks: 90
// Average: 30.00
// Result: Fail


// Q15. 

function sumOfThree(a, b, c) {
    return a + b + c;
}

function averageOfTwo(x, y) {
    return (x + y) / 2;
}

function maxOfTwo(a, b) {
    return a > b ? a : b;
}

function fullName(first, last) {
    return first + " " + last;
}

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(40, 60));
console.log(maxOfTwo(25, 15));
console.log(fullName("Darsh", "Vaishnav"));

// Output:
// 60
// 50
// 25
// Darsh Vaishnav


// Q16. 

const calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));

// Output:
// A+
// A
// C
// D
// F


// Q17.

function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));

// Output:
// 2125
// 1080


// Q18.

const celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));

// Output:
// 32
// 212
// 0
// 100


// Q19(a).

const square = function(n) {
    return n * n;
};

console.log(square(5));

// Calling square before its const declaration executes
// causes a ReferenceError.

// Output:
// 25


// Q19(b)

function calculateBill(price, quantity) {
    function getTotal() {
        return price * quantity;
    }

    return "Total bill: " + getTotal();
}

console.log(calculateBill(100, 3));

// Output:
// Total bill: 300


// Q20

function processStudent(name, m1, m2, m3) {
    function calculateTotal() {
        return m1 + m2 + m3;
    }

    let total = calculateTotal();
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return "Student: " + name +
        "\nTotal: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nResult: " + result;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher";
    } else if (avg2 > avg1) {
        return "Second average is higher";
    } else {
        return "Both averages are equal";
    }
}

console.log(processStudent("Darsh", 85, 90, 80));
console.log(processStudent("Mohit", 70, 75, 65));
console.log(processStudent("Krish", 30, 35, 25));

console.log(compareAverages(85, 70));
console.log(compareAverages(60, 60));

// Output:
// Student: Darsh
// Total: 255
// Average: 85.00
// Result: Pass
//
// Student: Mohit
// Total: 210
// Average: 70.00
// Result: Pass
//
// Student: Krish
// Total: 90
// Average: 30.00
// Result: Fail
//
// First average is higher
// Both averages are equal
