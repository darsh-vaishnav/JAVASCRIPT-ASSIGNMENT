
//   1. WHAT IS AN ARRAY?


// Q1. An array is an ordered collection of values
//     stored in a single variable.

// Q2. The position of a value is called an index.

// Q3. Array indexing starts at 0.

// Q4.
var numbers = [10, 20, 30, 40];
console.log(numbers[2]);
// Output: 30

// Q5. The index of 40 is 3.
console.log(numbers[3]);
// Output: 40



//   2. CREATING ARRAYS


// Q1. Two ways:
//     1. Array literal []
//     2. Array constructor new Array()

// Q2. Array literal is recommended.

// Q3.
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// Q4.
var marks = new Array(85, 90, 78);

// Q5. The new keyword is used with the constructor.

console.log(students);
console.log(marks);

// Output:
// ["Jenil", "Mahir", "Priyesha", "Yashvi"]
// [85, 90, 78]



//   3. ACCESSING VALUES IN AN ARRAY


// Q1. Use the index inside square brackets [].

// Q2 and Q3.
var students2 = ["Jenil", "Mahir", "Priyesha"];

console.log(students2[0]);
// Output: Jenil

console.log(students2[2]);
// Output: Priyesha

// Q4. A nonexistent array index returns undefined.
console.log(students2[10]);
// Output: undefined

// Q5.
var colors = ["Red", "Blue", "Green"];
console.log(colors[0]);
// Output: Red


//  4. UPDATING VALUES

// Q1. Assign a new value using the index.

// Q2.
var marks2 = [80, 75, 90];
marks2[1] = 95;

// Q3.
console.log(marks2);
// Output: [80, 95, 90]

// Q4. False. No special update() method is required.

// Q5. Yes, you can assign a value at a higher index.
//     JavaScript increases the array length and leaves
//     empty slots between the existing elements.

var numbers2 = [10, 20, 30];
numbers2[5] = 60;

console.log(numbers2);
console.log(numbers2.length);

// Output:
// [10, 20, 30, <2 empty items>, 60]
// 6



// Q1.
//  The built-in property is length.

// Q2.
var arr = [1, 2, 3, 4];
console.log(arr.length);
// Output: 4

// Q3.
var emptyArray = [];
console.log(emptyArray.length);
// Output: 0

// Q4. 
// length helps determine the number of elements
//     and control loops.

// Q5. 
// length is a property, not a function.
//     Correct: arr.length
//     Incorrect: arr.length()




// Q1. The two loops are for and while.

// Q2. Use i < array.length.

// Q3. In a while loop, i++ is placed after
//     the array access statement.

// Q4. Print every student using a for loop.

var students3 = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

for (var i = 0; i < students3.length; i++) {
    console.log(students3[i]);
}

// Output:
// Jenil
// Mahir
// Priyesha
// Yashvi

// Q5. Using <= accesses one extra index.
//     The extra access returns undefined.

for (var j = 0; j <= students3.length; j++) {
    console.log(students3[j]);
}

// Output:
// Jenil
// Mahir
// Priyesha
// Yashvi
// undefined
