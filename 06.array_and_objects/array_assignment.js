
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

//  5. Array Length
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

// 6. Looping Through Arrays


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

// Q6.
const subject = ["HTML", "CSS", "JavaScript", "Python"];

for (const sub of subject) {
    console.log(sub);
}

// // Q7.
// Answer: A for...of loop is simpler and easier 
//         to read because it directly accesses each 
//         value without needing an index variable.

// Q8.
const colors = ["Red", "Blue", "Green"];
for (const color of colors) {
    console.log(color, indexOf(color));
}

// Output:
// Red
// Blue
// Green

// 7 . Adding Elements to Arrays

// Q1.
// push() → Add at the end is ues to add the element

// Q2.
//unshift() → Add at the beginning is use to element at beginning

// Q3.
let nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// Q4.
nums.unshift(0);
console.log(nums); // [0, 1, 2, 3, 4]

// Q5.
// Both push() and unshift() modify the original array.
// - push() → adds an element to the end of the array.
// - unshift() → adds an element to the beginning of the array.

// 8 . Removing Elements

// Q1
//pop() → Remove last element of array

// Q2
//shift() → Remove first element of array

// Q3
//// let nums =[100, 200, 300, 400, 500]

// nums.pop();
// console.log(nums);

// Q4
// nums.shift();                                  
// console.log(nums);

// // Q5
// Answer: Both pop() and shift() return the removed element 
// and modify the original array. 
// - pop() → removes and returns the last element.
// - shift() → removes and returns the first element.

// 9.Searching in Arrays

// Q1.
//It returns the index (position) of the first matching 
// element. Array indexing starts at 0

// Q2.
//It returns -1.

// // Q3 Q4.
// const names = ["Jenil", "Mahir", "Arjun"];
// console.log(names.indexOf("Mahir")); // 1
// console.log(names.indexOf("Krishna")); // -1

// // Q5
// console.log(students.indexOf("Priyesha"));

// 10 .Array with Different Data Types

// // Q1.
// Answer: Yes. A JavaScript array can store numbers, strings, 
// booleans, null, and other data types in the same array.

// Q2
// const data = [100, "Hello", true, null];

// // Q3
// const data = [100, "Hello", true, null];

// console.log(typeof data[0]); // number
// console.log(typeof data[1]); // string
// console.log(typeof data[2]); // boolean
// console.log(typeof data[3]); // object

// Q4
// Answer: "number"
// Because data[0] contains 100.

// // Q5
// Answer: "boolean"
// Because data[2] contains true.
// Important MCQ fact: In JavaScript, typeof null returns "object".
//  This is a long-standing JavaScript quirk.