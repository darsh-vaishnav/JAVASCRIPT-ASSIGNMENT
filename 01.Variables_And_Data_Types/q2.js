// q2.js

// let is used because score will change
let score = 0;

console.log("Initial score:", score);

// Increase by 10
score += 10;
console.log("After +10:", score);

// Increase by 5
score += 5;
console.log("After +5:", score);

// Subtract 3
score -= 3;
console.log("After -3:", score);

// const cannot be reassigned
const maxScore = 100;

console.log("Maximum score:", maxScore);

// This will produce an error:
// maxScore = 120;