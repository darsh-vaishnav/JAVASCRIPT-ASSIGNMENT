// q4.js

let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

/*
When is a variable undefined?

A variable is undefined when it has been declared
but no value has been assigned to it.

Example:
let x;


When do you use null?

null is used when we intentionally want to say
that a variable has no value.

Example:
let user = null;


Why are == and === different?

x == y
true

JavaScript allows type conversion with ==.

x === y
false

=== checks both value AND data type.
*/