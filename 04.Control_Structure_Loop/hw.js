
// PART I: 


// Q1. 
/*
let temperatures = [28, 32, 25, 40, 18, 35];
let count = 0;
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 30) count++;
}
console.log("Hot days:", count);
*/

// Q2. 
/*
let num = Math.abs(Number(prompt("Enter number:")));
let sum = 0;
for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
}
console.log("Sum:", sum);
*/

// Q3.
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
        console.log(i);
    }
}
*/

// Q4. 
/*
let str = "JavaScript", result = "";
for (let i = 0; i < str.length; i++) {
    if (!"aeiou".includes(str[i].toLowerCase())) {
        result += str[i];
    }
}
console.log(result);
*/

// Q5. 
/*
let arr = [10, 45, 23, 45, 8, 32];
let largest = -Infinity, second = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
    } else if (arr[i] < largest && arr[i] > second) {
        second = arr[i];
    }
}
console.log(second === -Infinity ? "No second largest" : second);
*/

// Q6.
/*
let num = Number(prompt("Enter number:"));
let sum = 0;
for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
}
console.log(num > 1 && sum === num ? "Perfect" : "Not perfect");
*/

// Q7.
/*
let value = 1, series = "";
for (let i = 1; i <= 8; i++) {
    series += value + " ";
    value *= 2;
}
console.log(series.trim());
*/

// Q8. 
/*
let a = 0, b = 1;
for (let i = 1; i <= 20; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
*/

// Q9. 
/*
let scores = [45, 78, 90, 32, 56, 88];
let sum = 0, count = 0;
for (let i = 0; i < scores.length; i++) sum += scores[i];
let average = sum / scores.length;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) count++;
}
console.log("Average:", average);
console.log("Above average:", count);
*/

// Q10. Decimal to binary
/*
let num = Number(prompt("Enter non-negative integer:"));
let binary = "";
if (Number.isInteger(num) && num >= 0) {
    if (num === 0) binary = "0";
    for (; num > 0; num = Math.floor(num / 2)) {
        binary = (num % 2) + binary;
    }
    console.log(binary);
} else console.log("Invalid input");
*/

// PART I-a


// Q1. 
/*
let arr = [2, 5, 9, 7, 3, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        console.log("Index:", i);
        break;
    }
}
*/

// Q2
/*
let correctPassword = "Java123", granted = false;
for (let i = 1; i <= 5; i++) {
    let password = prompt("Attempt " + i + ": Enter password");
    if (password === correctPassword) {
        console.log("Access granted");
        granted = true;
        break;
    }
}
if (!granted) console.log("Account locked");
*/

// Q3
/*
let sum = 0;
for (let i = 1; ; i++) {
    sum += i;
    if (sum > 100) {
        console.log("Last number added:", i);
        console.log("Previous number:", i - 1);
        console.log("Sum:", sum);
        break;
    }
}
*/

// Q4.
/*
let names = ["Amit", "Riya", "Sahil", "Sneha", "Jay"];
for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("S")) {
        console.log(names[i]);
        break;
    }
}
*/

// Q5.
/*
for (let i = 1; i <= 50; i++) {
    if (i > 20 && Number.isInteger(Math.sqrt(i))) {
        console.log("First matching square:", i);
        break;
    }
    console.log(i);
}
*/


// PART I-b

// Q1
/*
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) continue;
    console.log(i);
}
*/

// Q2.
/*
let arr = [10, -5, 8, -2, 15, -9], sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) continue;
    sum += arr[i];
}
console.log(sum);
*/

// Q3. 
/*
let str = "Hello World";
for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    console.log(str[i]);
}
*/

// Q4. 
/*
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;
    if (product % 5 === 0) continue;
    console.log(`6 x ${i} = ${product}`);
}
*/

// Q5. 
/*
let ages = [12, 18, 25, 15, 30, 17, 22];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) continue;
    console.log(ages[i]);
}
*/



// PART I-c:


// Q1. 
/*
for (let i = 50; i >= 1; i--) {
    if (i % 3 === 0 && i % 9 !== 0) console.log(i);
}
*/

// Q2.
/*
let arr = [12, 45, 7, 23, 56, 89, 34];
let largest = -Infinity;
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 50 && arr[i] > largest) largest = arr[i];
}
console.log(largest);
*/

// Q3. 
/*
let num = Math.abs(Number(prompt("Enter integer:")));
let product = 1, found = false;
for (; num > 0; num = Math.floor(num / 10)) {
    let digit = num % 10;
    if (digit % 2 !== 0) {
        product *= digit;
        found = true;
    }
}
console.log(found ? product : 0);
*/

// Q4. 
/*
let str = "Programming", result = "";
for (let i = str.length - 1; i >= 0; i--) {
    if (!"aeiou".includes(str[i].toLowerCase())) result += str[i];
}
console.log(result);
*/

// Q5.
/*
let a = 0, b = 1, fib = [];
for (let i = 0; i < 15; i++) {
    fib[i] = a;
    let next = a + b;
    a = b;
    b = next;
}
for (let i = 14; i >= 0; i--) console.log(fib[i]);
*/

// Q6. 
/*
let original = Number(prompt("Enter non-negative integer:"));
let num = original, reversed = 0;
if (!Number.isInteger(num) || num < 0) {
    console.log("Invalid input");
} else {
    for (; num > 0; num = Math.floor(num / 10)) {
        reversed = reversed * 10 + num % 10;
    }
    console.log(original === reversed ? "Palindrome" : "Not palindrome");
}
*/

// Q7.
/*
let temperatures = [32, 28, 41, 19, 35, 27, 38], count = 0;
for (let i = temperatures.length - 1; i >= 0; i--) {
    if (temperatures[i] < 30) count++;
}
console.log(count);
*/

// Q8
/*
let num = Number(prompt("Enter non-negative integer:"));
let binary = "";
if (Number.isInteger(num) && num >= 0) {
    if (num === 0) binary = "0";
    for (; num > 0; num = Math.floor(num / 2)) binary += num % 2;
    console.log(binary);
} else console.log("Invalid input");
*/

// Q9
/*
let scores = [90, 85, 70, 95, 60, 88, 75];
for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] > 80) {
        console.log("Score:", scores[i], "Index:", i);
        break;
    }
}
*/

// Q10
/*
for (let i = 40; i >= 1; i--) {
    if (Number.isInteger(Math.sqrt(i))) continue;
    console.log(i);
}
*/


// PART I-d

// Q1. 
/*
let num = 1;
for (let row = 1; row <= 4; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) line += num++ + " ";
    console.log(line.trim());
}
*/

// Q2. 
/*
for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 0; col < row; col++) {
        line += String.fromCharCode(65 + col) + " ";
    }
    console.log(line.trim());
}
*/

// Q3. 
/*
let n = 5;
for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        if (row === n || col === 1 || col === row) line += "* ";
        else line += "  ";
    }
    console.log(line.trimEnd());
}
*/

// Q4. 
/*
for (let row = 5; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) line += "*";
    console.log(line);
}
*/

// Q5. 
/*
for (let row = 5; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) line += row + " ";
    console.log(line.trim());
}
*/

// Q6.
/*
for (let row = 5; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) line += col + " ";
    console.log(line.trim());
}
*/

// Q7.
/*
let num = 15;
for (let row = 5; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += String(num).padStart(2, " ") + " ";
        num--;
    }
    console.log(line.trimEnd());
}
*/

// Q8.
/*
let n = 5;
for (let row = n; row >= 1; row--) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        if (row === n || col === 1 || col === row) line += "* ";
        else line += "  ";
    }
    console.log(line.trimEnd());
}
*/


// Q9
/*
for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= 5; col++) {
        line += row === col ? "  " : "* ";
    }
    console.log(line);
}
*/

// Q10
/*
for (let table = 1; table <= 5; table++) {
    console.log("Table of " + table);
    for (let i = 1; i <= 10; i++) {
        let product = table * i;
        if (product % 2 === 0) console.log(`${table} x ${i} = ${product}`);
    }
}
*/

// Q11. 
/*
let n = Number(prompt("Enter matrix size:"));
for (let row = 0; row < n; row++) {
    let line = "";
    for (let col = 0; col < n; col++) line += Math.abs(row - col) + " ";
    console.log(line.trim());
}
*/

// Q12
/*
for (let i = 1; i < 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
        if (Number.isInteger(Math.sqrt(i + j))) console.log(`(${i}, ${j})`);
    }
}
*/



// Q13
/*
let n = 5;
for (let row = 1; row <= 2 * n - 1; row++) {
    let level = row <= n ? row : 2 * n - row;
    let line = " ".repeat(n - level);
    for (let col = 1; col <= level; col++) line += col;
    for (let col = level - 1; col >= 1; col--) line += col;
    console.log(line);
}
*/

// Q14
/*
let n = 6, matrix = [];
for (let row = 0; row < n; row++) {
    matrix[row] = [];
    for (let col = 0; col < n; col++) matrix[row][col] = 0;
}
let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;

while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) matrix[top][col] = num++;
    top++;
    for (let row = top; row <= bottom; row++) matrix[row][right] = num++;
    right--;
    if (top <= bottom) {
        for (let col = right; col >= left; col--) matrix[bottom][col] = num++;
        bottom--;
    }
    if (left <= right) {
        for (let row = bottom; row >= top; row--) matrix[row][left] = num++;
        left++;
    }
}
for (let row = 0; row < n; row++) {
    let line = "";
    for (let col = 0; col < n; col++) line += String(matrix[row][col]).padStart(2, " ") + " ";
    console.log(line);
}
*/

// Q15
/*
let n = 8;
for (let row = 0; row < n; row++) {
    let line = " ".repeat(n - row - 1);
    for (let col = 0; col <= row; col++) {
        let coefficient = 1;
        for (let k = 1; k <= col; k++) {
            coefficient = coefficient * (row - k + 1) / k;
        }
        line += coefficient + " ";
    }
    console.log(line);
}
*/

// Q16
/*
let rows = Number(prompt("Enter rows:"));
let cols = Number(prompt("Enter columns:"));

for (let row = 0; row < rows; row++) {
    let line = "";
    for (let col = 0; col < cols; col++) {
        let value;
        if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
            value = 1;
        } else {
            value = 0;
        }
        if ((row + col) % 3 === 0) value = 2;
        line += value + " ";
    }
    console.log(line.trim());
}
*/
