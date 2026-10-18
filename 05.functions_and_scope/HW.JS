// QUE 1
function multiply(a, b) {
    return a * b;
}

// QUE 2
console.log(multiply(5, 4)); // 20


function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// QUE 3

function fullName(first, last) {
    return first + " " + last;
}

console.log(fullName("Darsh", "Vaishnav"));


// QUE 4

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maxOfTwo(25, 40)); // 40


// QUE 5

function studentSummary(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
           " and average " + average;
}

console.log(studentSummary("Darsh", 80, 90, 70));


// QUE 6

function greet() {
    console.log("Hello!");
}

console.log(greet());


// QUE 7

const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // 5


// QUE 8

function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student Name: " + name +
           "\nTotal Marks: " + total +
           "\nAverage: " + average.toFixed(2) +
           "\nResult: " + result;
}

console.log(generateReport("Darsh", 80, 90, 70));
console.log(generateReport("Het", 30, 35, 25));
