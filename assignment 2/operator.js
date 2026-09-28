// 1. Addition (+)


// Q1: School Collection
const class1Collection = 15000;
const class2Collection = 12500;
const totalCollection = class1Collection + class2Collection;
console.log("Total School Collection: ₹" + totalCollection);

// Q2: Pages Read
const morningPages = 18;
const eveningPages = 25;
const totalPagesRead = morningPages + eveningPages;
console.log("Total Pages Read: " + totalPagesRead);

// Q3: Items Sold
const mondaySales = 125;
const tuesdaySales = 178;
const totalItemsSold = mondaySales + tuesdaySales;
console.log("Total Items Sold: " + totalItemsSold);

//Q4
// let a = "10";
// let b = 5;
// let result = a + b;
// console.log(result);//105

//Q5
// let x = 5;
// let y = "3";
// let result = x + y;
// console.log(result);//53

//Q6
// let p = "Hello";
// let q = "World";
// let result = p + " " + q;
// console.log(result);//Hello World

// //Q7
// let m = 0;
// let n = false;
// let result = m + n;
// console.log(result);//0

// //Q8
// let val1 = 100;
// let val2 = "200";
// let val3 = val1 + val2;
// console.log(val3);//100200



// 2. Subtraction (-)


// Q1: Bus Seats
const totalSeats = 80;
const occupiedSeats = 53;
const emptySeats = totalSeats - occupiedSeats;
console.log("Empty Seats: " + emptySeats);

// Q2: Final Marks
const totalMarks = 500;
const lostMarks = 35;
const finalMarks = totalMarks - lostMarks;
console.log("Final Marks: " + finalMarks);

// Q3: Warehouse Boxes
const initialBoxes = 2500;
const sentBoxes = 875;
const remainingBoxes = initialBoxes - sentBoxes;
console.log("Remaining Boxes in Warehouse: " + remainingBoxes);

// // Q4
// let a = "10";
// let b = 3;
// let result = a - b;
// console.log(result);//7

// //Q5
// let x = "20";
// let y = "5";
// let result = x - y;
// console.log(result);//15

// //Q6
// let p = "abc";
// let q = 1;
// let result = p - q;
// console.log(result);//NaN

// //Q7
// let m = 10;
// let n = 0;
// let result = m / n;
// console.log(result);//Infinity

// //Q8
// let val = 0 / 0;
// console.log(val);//NaN


// 3. Multiplication (*)


// Q1: Cost of Notebooks
const notebookPrice = 45;
const notebookQuantity = 8;
const totalNotebookCost = notebookPrice * notebookQuantity;
console.log("Total Cost of Notebooks: ₹" + totalNotebookCost);

// Q2: Factory Production
const bottlesPerHour = 120;
const hoursWorked = 6;
const totalProduction = bottlesPerHour * hoursWorked;
console.log("Total Bottles Produced: " + totalProduction);

// Q3: Garden Plants
const rows = 7;
const plantsPerRow = 15;
const totalPlants = rows * plantsPerRow;
console.log("Total Plants in Garden: " + totalPlants);

// Q4
// let a = "5";
// let b = 4;
// let result = a * b;
// console.log(result);//20

// Q5
// let x = "10";
// let y = "2";
// let result = x * y;
// console.log(result);//20

// Q6
// let p = "hello";
// let q = 2;
// let result = p * q;
// console.log(result);//NaN

// //Q7
// let m = 5;
// let n = "0";
// let result = m * n;
// console.log(result);//0

// // Q8
// let val1 = 3;
// let val2 = "4";
// let val3 = val1 * val2;
// console.log(val3);//12


// 4. Division (/)


// Q1: Pencil Distribution
const totalPencils = 144;
const totalStudents = 12;
const pencilsPerStudent = totalPencils / totalStudents;
console.log("Pencils per Student: " + pencilsPerStudent);

// Q2: Train Average Speed
const totalDistance = 360; // in km
const totalTime = 6;       // in hours
const averageSpeed = totalDistance / totalTime;
console.log("Average Distance per Hour: " + averageSpeed + " km/h");

// Q3: Department Funds
const totalAmount = 72000;
const departmentCount = 9;
const amountPerDepartment = totalAmount / departmentCount;
console.log("Amount per Department: ₹" + amountPerDepartment);

//Q4
// let a = "20";
// let b = 4;
// let result = a / b;
// console.log(result);//5

//Q5 
// let x = "100";
// let y = "5";
// let result = x / y;
// console.log(result);//20

//Q6
// let p= "10";
// let q = "0";
// let result = p / q;
// console.log(result);//Infinity

// //Q7
// let m = -10;
// let n = 0;
// let result = m / n;
// console.log(result);//-Infinity

//Q8
// let val = 0 / 0;
// console.log(val);//NaN



// 5. Modulus (%)


// Q1: Student Groups
const totalGroupStudents = 53;
const groupSize = 5;
const leftoverStudents = totalGroupStudents % groupSize;
console.log("Students Leftover: " + leftoverStudents);

// Q2: Unpacked Candies
const totalCandies = 128;
const candiesPerBox = 10;
const unpackedCandies = totalCandies % candiesPerBox;
console.log("Unpacked Candies: " + unpackedCandies);

// Q3: Even or Odd Check
const checkNum = 17; // Example number to check
if (checkNum % 2 === 0) {
    console.log(checkNum + " is an Even number.");
} else {
    console.log(checkNum + " is an Odd number.");
}
// Q4
const totalToysProduced = 128;
const toysPerBox = 10;
const ToysleftPerBox = totalToysProduced % toysPerBox;
console.log("Unpacked Toys: " + ToysleftPerBox);


//Q5
const totalPeopleWaiting = 185;
const personPerBus = 40;
const PeopleLeftOver = totalPeopleWaiting % personPerBus;
console.log("People Left Over: " + PeopleLeftOver);

//Q6
// let a = 10;
// let b = 0;
// let result = a % b;
// console.log(result);//NaN

// //Q7
// let x = 0;
// let y = 5;
// let result = x % y;
// console.log(result);//0

// //Q8
// let p = -10;
// let q = 3;
// let result = p % q;
// console.log(result);//-1

// //Q9
// let m = 10;
// let n = -3;
// let result = m % n;
// console.log(result);//1

//Q10
// let val1 = -10;
// let val2 = -3;
// let val3 = val1% val2;
// console.log(val3);//-1


// 6. Exponentiation (**)


// Q1: Cube Volume
const sideLength = 6;
const cubeVolume = sideLength ** 3;
console.log("Volume of Cube: " + cubeVolume + " cm³");

// Q2: Bacteria Growth (Doubling per hour: 2^hours)
const growthFactor = 2;
const hours = 4;
const bacteriaCount = growthFactor ** hours;
console.log("Total Bacteria after 4 hours: " + bacteriaCount);

// Q3: Square Grid Cells
const gridSide = 9;
const totalCells = gridSide ** 2;
console.log("Total Cells in Square Arrangement: " + totalCells);

// Q4
const value = 5;
const total = value ** 4;
console.log("Total Cells in Square Arrangement: " + total);

// Q5
const pixel = 5;
const totalpixels = pixel ** 2;
console.log("Total Cells in Square Arrangement: " + totalpixels);

// // Q6
// let side = -2;
// let area = side ** 2;
// console.log(area);//4

// // Q7
// let base = 2;
// let power = -1;
// let result = base ** power;
// console.log(result);//0.5

//Q8
// let val = 2 ** -2;
// console.log(val);//0.25

// //Q9
// let x = 3;
// let y = 2;
// let z = x ** y;
// console.log(z);//9

// //Q10
// let a = 10;
// let b = 0;
// let result = a ** b;
// console.log(result);//1

//Part b
//01.Simple Assignment=
// Q1
let age = 18;
console.log(age);

// Q2
let penPrice = 15;
console.log(penPrice);

// Q3
let daysInWeek = 7;
console.log(daysInWeek);

// Q4
let city = "Kalol";
console.log(city);

// Q5
let piValue = 3.14159;
console.log(piValue);

//Q6
let a, b, c;
a = b = c = 10;
console.log(a, b, c);//10 10 10

//Q7
let x = 5;
let y = x;
x = 10;
console.log(x, y);//10 5

//Q8
let p = 100;
let q = p;
let r = q;
console.log(p, q, r);//100 100 100

//Q9
let m = "Hello";
let n = m;
m = "World";
console.log(m, n);//World Hello

//Q10
let val1 = 25;
let val2 = val1;
let val3 = val2;
console.log(val1, val2, val3);//25 25 25


//2. Add and Assign +=
// Q1
let marks = 200;
marks += 35;
console.log(marks);

// Q2
let balance = 5000;
balance += 1200;
console.log(balance);

// Q3
let battery = 45;
battery += 30;
console.log(battery);

// Q4
let score = 1250;
score += 375;
console.log(score);

// Q5
let books = 840;
books += 160;
console.log(books);

// Q6
// let a= "10";
// a += 5;
// console.log(a);//105

// Q7
// let x = 5;
// x += "3";
// console.log(x);//53

//Q8
// let p = 0;
// p += false;
// console.log(p);//

//Q9
// let m = 10;
// m += true;
// console.log(m);//11

//Q10
// let val = "Hello";
// val += "World";
// console.log(val);//HelloWorld

//3. Subtract and Assign -=
// Q1
let water = 1000;
water -= 375;
console.log(water);

// Q2
let money = 500;
money -= 180;
console.log(money);

// Q3
let phoneBattery = 90;
phoneBattery -= 45;
console.log(phoneBattery);

// Q4
let boxes = 2400;
boxes -= 950;
console.log(boxes);

// Q5
let gamePoints = 2000;
gamePoints -= 625;
console.log(gamePoints);

//Q6
// let a = "20";
// a -= 5;
// console.log(a);

//Q7
// let x = "100";
// x -= "50";
// console.log(x);

//Q8
// let p = 10;
// p -= "abc";
// console.log(p);

//Q9
// let m = 5;
// m -= true;
// console.log(m);

//Q10
// let val = 20;
// val -= false;
// console.log(val);

//4. Multiply and Assign *=
// Q1
let population = 5000;
population *= 3;
console.log(population);

// Q2
let production = 120;
production *= 4;
console.log(production);

// Q3
let savings = 2000;
savings *= 2;
console.log(savings);

// Q4
let plants = 50;
plants *= 5;
console.log(plants);

// Q5
let bonusScore = 150;
bonusScore *= 3;
console.log(bonusScore);

//Q6
// let a = "10";
// a *= 2;
// console.log(a);//20

//Q7
// let x = "5";
// x *= "4";
// console.log(x);//20

//Q8
// let p = "hello";
// p *= 2;
// console.log(p);//NaN

//Q9
// let m = 5;
// m *= "0";
// console.log(m);//0

//Q10
// let val = 3;
// val *= "4";
// console.log(val);//12

//5. Divide and Assign /=
// Q1
let cloth = 1200;
cloth /= 4;
console.log(cloth);

// Q2
let budget = 80000;
budget /= 8;
console.log(budget);

// Q3
let sugar = 960;
sugar /= 6;
console.log(sugar);

// Q4
let distance = 450;
distance /= 5;
console.log(distance);

// Q5
let totalMrks = 2500;
totalMrks /= 10;
console.log(totalMrks);


//Q6
// let a = "100";
// a /= 5;
// console.log(a);//20

//Q7
// let x = "200";
// x /= "4";
// console.log(x);//50

//Q8
// let p = 10;
// p /= 0;
// console.log(p);//Infinity

//Q9
// let m = -10;
// m /= 0;
// console.log(m);//-Infinity

//Q10
// let val = 0;
// val /= 0;
// console.log(val);//0

//6.Modulus and Assign %=
// Q1
let candies = 137;
candies %= 10;
console.log(candies);

// Q2
let students = 250;
students %= 7;
console.log(students);

// Q3
let projectDays = 1000;
projectDays %= 7;
console.log(projectDays);

// Q4
let chairs = 89;
chairs %= 5;
console.log(chairs);

// Q5
let loanMonths = 365;
loanMonths %= 12;
console.log(loanMonths);

//Q6
// let a = 10;
// a %= 0;
// console.log(a);//NaN

//Q7
// let x = 0;
// x %= 5;
// console.log(x);//0

//Q8
// let p = -10;
// p %= 3;
// console.log(p);//-1

//Q9
// let m = 10;
// m %= -3;
// console.log(m);//1

//Q10
// let val = -10;
// val %= -3;
// console.log(val);//-1

//7.Exponentiation and Assign **=
// Q1
let gardenSide = 10;
gardenSide **= 2;
console.log("The area of Gardenside",gardenSide,"meter square");

// Q2
let cubeEdge = 4;
cubeEdge **= 3;
console.log(cubeEdge);

// Q3
let imageFactor = 3;
imageFactor **= 2;
console.log(imageFactor);

//Q4
// let side = -2;
// side **= 2;
// console.log(side);//4

//Q5
// let base = 2;
// base **= -1;
// console.log(base);//0.5

//Q6
// let val = 2;
// val **= -2;
// console.log(val);//0.25

//Q7
// let x = 3;
// x **= 0;
// console.log(x);//1

//Q8
// let a = 10;
// a **= 1;
// console.log(a);//10

//Part c: Comparsion operator

///1.LOOSE EQUALITY (==)
// 1
let storedPassword = 1234;
let enteredPassword = "1234";
console.log(storedPassword == enteredPassword); // true

// 2
let userAnswer = 0;
let defaultAnswer = false;
console.log(userAnswer == defaultAnswer); // true

// 3
let userInput = "";
let submittedFlag = false;
console.log(userInput == submittedFlag); // true

// 4
let backendValue = null;
let frontendValue = undefined;
console.log(backendValue == frontendValue); // true

// 5
let deviceScore1 = 500;
let deviceScore2 = "500";
console.log(deviceScore1 == deviceScore2); // true

// // 6
// let a = 0;
// let b = false;
// console.log(a == b); // true

// // 7
// let x = "";
// let y = false;
// console.log(x == y); // true

// // 8
// let p = "0";
// let q = 0;
// console.log(p == q); // true

// // 9
// let m = [];
// let n = 0;
// console.log(m == n); // true

// // 10
// let val1 = [];
// let val2 = false;
// console.log(val1 == val2); // true

///2. Loose Inequality !=
// 1
let discountCode1 = "SAVE10";
let discountCode2 = "SAVE20";
console.log(discountCode1 != discountCode2); // true

// 2
let userRole = "admin";
let defaultRole = "guest";
console.log(userRole != defaultRole); // true

// // 3
// let correctAnswer = 42;
// let userAnswer = "40";
// console.log(correctAnswer != userAnswer); // true

// 4
let emailInput = "";
let emptyFlag = false;
console.log(emailInput != emptyFlag); // false

// 5
let userId = null;
let validId = 101;
console.log(userId != validId); // true

// // 6
// let a = 0;
// let b = false;
// console.log(a != b); // false

// // 7
// let x = "";
// let y = false;
// console.log(x != y); // false

// // 8
// let p = "0";
// let q = 0;
// console.log(p != q); // false

// // 9
// let m = null;
// let n = undefined;
// console.log(m != n); // false

// // 10
// let val1 = [];
// let val2 = 0;
// console.log(val1 != val2); // false

//3. Strict Equality ===
// // 1. Password comparison
// let storedPassword = 1234;
// let enteredPassword = "1234";
// console.log(storedPassword === enteredPassword); // false

// 2. Account numbers
let accountNumber1 = 1234567890;
let accountNumber2 = 1234567890;
console.log(accountNumber1 === accountNumber2); // true

// 3. Boolean and number
let featureFlag = true;
let requiredState = 1;
console.log(featureFlag === requiredState); // false

// 4. Null and undefined
let databaseValue = null;
let cacheValue = undefined;
console.log(databaseValue === cacheValue); // false

// 5. Scores
let score1 = 85;
let score2 = 85;
console.log(score1 === score2); // true

// // 6
// let a = 0;
// let b = false;
// console.log(a === b); // false

// // 7
// let x = "";
// let y = false;
// console.log(x === y); // false

// // 8
// let p = "0";
// let q = 0;
// console.log(p === q); // false

// // 9
// let m = null;
// let n = undefined;
// console.log(m === n); // false

// // 10
// let val = NaN;
// console.log(val === val); // false

//4. Strict Inequality !==
// 1. String and number ID
let stringId = "101";
let numberId = 101;
console.log(stringId !== numberId); // true

// 2. Boolean and number
let booleanStatus = true;
let numericStatus = 1;
console.log(booleanStatus !== numericStatus); // true

// 3. Passwords
let password = "abc123";
let confirmPassword = "abc124";
console.log(password !== confirmPassword); // true

// 4. Null and undefined
let serverData = null;
let localData = undefined;
console.log(serverData !== localData); // true

// 5. Player IDs
let playerId1 = 10;
let playerId2 = 20;
console.log(playerId1 !== playerId2); // true

// // 6
// let a = 0;
// let b = false;
// console.log(a !== b); // true

// // 7
// let x = "";
// let y = false;
// console.log(x !== y); // true

// // 8
// let p = "0";
// let q = 0;
// console.log(p !== q); // true

// // 9
// let m = null;
// let n = undefined;
// console.log(m !== n); // true

// // 10
// let val = NaN;
// console.log(val !== val); // true

//5. Greater Than >

// // 1. Voting age
// let age = 20;
// let votingAge = 18;
// console.log(age > votingAge); // true

// 2. Free shipping
let cartTotal = 650;
let freeShippingLimit = 500;
console.log(cartTotal > freeShippingLimit); // true

// 3. Level unlock
let playerScore = 1200;
let requiredScore = 1000;
console.log(playerScore > requiredScore); // true

// 4. Loan requirement
let monthlyIncome = 40000;
let minimumIncome = 30000;
console.log(monthlyIncome > minimumIncome); // true

// 5. Steps target
let stepsToday = 11000;
let stepTarget = 10000;
console.log(stepsToday > stepTarget); // true

// // 6
// let a = 5;
// let b = 5;
// console.log(a > b); // false

// // 7
// let x = "10";
// let y = "2";
// console.log(x > y); // false

// // 8
// let p = "5";
// let q = 10;
// console.log(p > q); // false

// // 9
// let m = null;
// let n = 0;
// console.log(m > n); // false

// // 10
// let val = undefined;
// console.log(val > 0); // false

//6. Less Than <

// // 1. Failing marks
// let marks = 30;
// let failThreshold = 35;
// console.log(marks < failThreshold); // true

// // 2. Budget
// let expenses = 8000;
// let budget = 10000;
// console.log(expenses < budget); // true

// 3. Low stock
let itemsLeft = 7;
let lowStockLimit = 10;
console.log(itemsLeft < lowStockLimit); // true

// 4. Vehicle speed
let vehicleSpeed = 40;
let minimumSpeed = 50;
console.log(vehicleSpeed < minimumSpeed); // true

// 5. Remaining time
let remainingTime = 4;
let warningLimit = 5;
console.log(remainingTime < warningLimit); // true

// // 6
// let a = 5;
// let b = 5;
// console.log(a < b); // false

// // 7
// let x = "10";
// let y = "2";
// console.log(x < y); // true

// // 8
// let p = null;
// let q = 1;
// console.log(p < q); // true

// // 9
// let m = null;
// let n = 0;
// console.log(m < n); // false

// // 10
// let val = undefined;
// console.log(val < 0); // false

//7. Greater Than or Equal >=

// 1. Voting eligibility
// let age = 18;
// let votingAge = 18;
// console.log(age >= votingAge); // true

// 2. Scholarship
let percentage = 75;
let minimumPercentage = 75;
console.log(percentage >= minimumPercentage); // true

// 3. Subscription age
let userAge = 14;
let minimumAge = 13;
console.log(userAge >= minimumAge); // true

// 4. Player score
let currentScore = 500;
let minimumScore = 500;
console.log(currentScore >= minimumScore); // true

// 5. Experience
let experience = 3;
let requiredExperience = 2;
console.log(experience >= requiredExperience); // true

// // 6
// let a = 5;
// let b = 5;
// console.log(a >= b); // true

// // 7
// let x = null;
// let y = 0;
// console.log(x >= y); // true

// // 8
// let p = undefined;
// let q = 0;
// console.log(p >= q); // false

// // 9
// let m = "5";
// let n = 5;
// console.log(m >= n); // true

// // 10
// let val = "10";
// let limit = 5;
// console.log(val >= limit); // true

//8. Less Than or Equal <=

// 1. Lift capacity
let peopleInLift = 7;
let maximumCapacity = 8;
console.log(peopleInLift <= maximumCapacity); // true

// 2. File upload
let fileSize = 5;
let maximumFileSize = 5;
console.log(fileSize <= maximumFileSize); // true

// 3. Junior age
let participantAge = 12;
let maximumJuniorAge = 12;
console.log(participantAge <= maximumJuniorAge); // true

// 4. Data usage
let dataUsed = 9.5;
let dataLimit = 10;
console.log(dataUsed <= dataLimit); // true

// 5. Class capacity
let classStrength = 40;
let maximumStrength = 40;
console.log(classStrength <= maximumStrength); // true

// // 6
// let a = 5;
// let b = 5;
// console.log(a <= b); // true

// // 7
// let x = null;
// let y = 0;
// console.log(x <= y); // true

// // 8
// let p = undefined;
// let q = 0;
// console.log(p <= q); // false

// // 9
// let m = "5";
// let n = 5;
// console.log(m <= n); // true

// // 10
// let val = "3";
// let limit = 5;
// console.log(val <= limit); // true

//Part D:Logical Operators
// // 1. Logical AND &&

//Que 1
//// let Username=admin;
// //let Password="1234";
// //let isSame = Username==admin && Password=="1234";
// //console.log(`Do the credentials match? :${isSame}`);

//Que 2
// let isLoggedIn=true;
// let hasPermission=true;
// let isPermitted = isLoggedIn && hasPermission;
// console.log(`Is the user permitted? :${isPermitted}`);

//Que 3
// let isStock=true;
// let price=800;
// let isbought = isStock && price==800;
// console.log(`Is the item bought? :${isbought}`);

//Que 4
// let studentMarks=75;
// let studentAttendance=80;
// let iseligible = studentMarks==75 && studentAttendance==80;
// console.log(`Is the student eligible? :${iseligible}`);

//Que5
// let isWeekend=true;
// let isHoliday=false;
// let isparty = isWeekend && isHoliday;
// console.log(`Is it party time? :${isparty}`);

// //Que 6
// let a = 0;
// let b = false;
// console.log(a == b);// true

// //Que 7
// let x = "";
// let y = false;
// console.log(x == y);//true

// //Que 8
// let p = "0";
// let q = 0;
// console.log(p == q);//true

// //Que 9
// let m = [];
// let n = 0;
// console.log(m == n);//false

// //Que 10
// let val1 = [];
// let val2 = false;
// console.log(val1 == val2);//false


// 2. Logical OR //
//Que 1
// let passwordCorrect = true;
// let otpValid = false;
// let isallowed = passwordCorrect || otpValid;
// console.log(`Is the user allowed? :${isallowed}`);

//Que 2
// let age = 16;
// let height = 155;
// let isEntryallowed = age >= 18 || height >= 150;
// console.log(`Is the Student eligible for entry? :${isEntryallowed}`);

//Que 3
// let emailGiven = true;
// let phoneGiven = false;
// let isFormValid = emailGiven || phoneGiven;
// console.log(`Is the form valid? :${isFormValid}`);

//Que 4
// let score = 900;
// let timeBonus = true;
// let isGameLevel = score >= 1000 && timeBonus;
// console.log(`Is the game level complete? :${isGameLevel}`);

//Que 5
// let isBanned = false;
// let timeBonus = true;
// let isGameLevel = score >= 1000 && timeBonus;
// console.log(`Is the game level complete? :${isGameLevel}`);

// // 6.
// let a = 0;
// let b = 10;
// let c = 20;
// let result = a || b && c;
// console.log(result); // 20


// // 7.
// let p = true;
// let q = false;
// let r = true;
// let result2 = p && q || r;
// console.log(result2); // true


// // 8.
// let x = 10;
// let y = 20;
// let result3 = !(x && y) || (x > 5 && y < 30) && true;
// console.log(result3); // true


// // 9.
// let a2 = 5;
// let b2 = 0;
// let c2 = 10;
// let result4 = a2 && b2 || c2;
// console.log(result4); // 10


// // 10.
// let val1 = false;
// let val2 = true;
// let val3 = false;
// let result5 = !(val1 || val2) && val3 || true;
// console.log(result5); // true

// 3. LOGICAL NOT (!)


// 1. User can login if they are not banned
let isBanned = false;
console.log(!isBanned); // true


// 2. Task is still pending if it is not completed
let isCompleted = false;
console.log(!isCompleted); // true


// 3. Check if the light is off
let isOn = true;
console.log(!isOn); // false


// 4. Check if premium access is not allowed
let isActive = false;
console.log(!isActive); // true


// 5. Check if file can be edited
let isReadOnly = false;
console.log(!isReadOnly); // true

// // 6.
// let a = 0;
// let b = 1;
// console.log(!a, !b); // true false


// // 7.
// let x = "Hello";
// let y = "";
// console.log(!x, !y); // false true


// // 8.
// let val = 5;
// let result = !val;
// console.log(result); // false


// // 9.
// let a2 = 10;
// let b2 = 20;
// let result2 = !(a2 && b2);
// console.log(result2); // false


// 10.
let x2 = 0;
let y2 = 1;
let result3 = !(x2 || y2);
console.log(result3); // false


// 4. MIXED LOGICAL OPERATORS (&&, ||, !)

// 1. Member AND not banned
let isMember = true;
let isBanned2 = false;

let canEnter = isMember && !isBanned2;
console.log(canEnter); // true


// 2. Student OR senior, but not banned
let isStudent = true;
let isSenior = false;
let isBanned3 = true;

let getsDiscount = (isStudent || isSenior) && !isBanned3;
console.log(getsDiscount); // false


// 3. Name AND (email OR phone)
let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;

let isFormValid = nameGiven && (emailGiven || phoneGiven);
console.log(isFormValid); // true


// 4. Admin OR token, AND not suspended
let isAdmin = true;
let hasToken = false;
let isSuspended = false;

let accessAllowed = (isAdmin || hasToken) && !isSuspended;
console.log(accessAllowed); // true


// // 5. Score above 1000 AND (time bonus OR extra life)
// let score = 1200;
// let timeBonus = false;
// let extraLife = true;

// let levelOpens = score > 1000 && (timeBonus || extraLife);
// console.log(levelOpens); // true



// 6.
let a3 = 0;
let b3 = 10;
let c3 = 20;

let result4 = a3 || b3 && c3;
console.log(result4); // 20


// // 7.
// let p = true;
// let q = false;
// let r = true;

// let result5 = p && q || r;
// console.log(result5); // true


// 8.
let x3 = 10;
let y3 = 20;

let result6 = !(x3 && y3) || (x3 > 5 && y3 < 30) && true;
console.log(result6); // true


// 9.
let a4 = 5;
let b4 = 0;
let c4 = 10;

let result7 = a4 && b4 || c4;
console.log(result7); // 10


// // 10.
// let val1 = false;
// let val2 = true;
// let val3 = false;

// let result8 = !(val1 || val2) && val3 || true;
// console.log(result8); // true


// PART G: TYPE COERCION


// Part A

// 1. Convert string to number and add 10
let numberValue = Number("25");
console.log(numberValue + 10); // 35

// 2. Convert number to string
let rupees = String(100);
console.log(rupees + " rupees"); // 100 rupees

// 3. Convert 0 to boolean
console.log(Boolean(0)); // false

// 4. Convert "Hello" to boolean
console.log(Boolean("Hello")); // true

// 5. Unary + converts string to number
console.log(+"50" * 2); // 100


// Part B


// 6.
console.log("10" - 5); // 5
console.log("10" + 5); // 105
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// 7.
console.log("5" - "2"); // 3
console.log("5" + "2"); // 52
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5

// 8.
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 9.
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

// 10.
console.log(String(100)); // "100"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(100 + ""); // "100"


// 11.
console.log("5" + 3 + 2); // "532"
console.log(5 + 3 + "2"); // "82"
console.log("5" - 3 + 2); // 4
console.log(5 - "3" + "2"); // "22"

// 12.
console.log(true + true); // 2
console.log(true + false); // 1
console.log(true + "false"); // "truefalse"
console.log(false + "true"); // "falsetrue"

// 13.
console.log(null + 5); // 5
console.log(undefined + 5); // NaN
console.log(null + "5"); // "null5"
console.log(undefined + "5"); // "undefined5"

// 14.
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log({} + {}); // "[object Object][object Object]"

// // 15.
// let a = "10";
// let b = 5;
// let c = a + b;
// let d = a - b;
// let e = +a + b;

// console.log(c, typeof c); // 105 string
// console.log(d, typeof d); // 5 number
// console.log(e, typeof e); // 15 number

// 16.
console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); // false
console.log(!!undefined); // false

// 17.
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("0")); // 0
console.log(Number("  25  ")); // 25
console.log(Number("25px")); // NaN

// // 18.
// let val1 = "5";
// let val2 = 2;

// console.log(val1 + val2); // "52"
// console.log(+val1 + val2); // 7
// console.log(val1 - val2); // 3
// console.log(val1 * val2); // 10
// console.log(val1 / val2); // 2.5


// 19.
let count = 5;

console.log(typeof count++); // "number"
console.log(count); // 6
console.log(typeof ++count); // "number"
console.log(count); // 7

// // 20.
// let x = "10";
// let y = ++x;

// console.log(x, y, typeof x, typeof y);
// // 11 11 "number" "number"

// 21.
let a2 = "5";
let b2 = a2++;

console.log(a2, b2, typeof a2, typeof b2);
// 6 5 "number" "string"

// 22.
console.log(typeof (1 + "2")); // "string"
console.log(typeof (1 - "2")); // "number"
console.log(typeof (1 * "2")); // "number"
console.log(typeof (1 / "2")); // "number"

// 23.
let val = null;

console.log(typeof val); // "object"
console.log(val + 1); // 1
console.log(val - 1); // -1
console.log(val * 1); // 0
console.log(Boolean(val)); // false