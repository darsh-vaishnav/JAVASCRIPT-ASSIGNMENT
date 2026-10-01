const prompt = require('prompt-sync')();

// //1.if
// // 1
// let num1 = Number(prompt("Enter a number:"));

// if (num1 % 5 === 0) {
//     console.log("Divisible by 5");
// }


// // 2
// let age2 = Number(prompt("Enter your age:"));

// if (age2 >= 60) {
//     console.log("Senior Citizen");
// }


// // 3
// let num3 = Number(prompt("Enter a number:"));

// if (num3 > 100) {
//     console.log("Big Number");
// }


// // 4
// let temperature4 = Number(prompt("Enter temperature:"));

// if (temperature4 < 10) {
//     console.log("Very Cold");
// }


// // 5
// let marks5 = Number(prompt("Enter your marks:"));

// if (marks5 === 100) {
//     console.log("Perfect Score");
// }


// // 6
// let num6 = Number(prompt("Enter a number:"));

// if (num6 < 0) {
//     console.log("Negative Number");
// }


// // 7
// let input7 = prompt("Enter something:");

// if (input7 === "") {
//     console.log("No input provided");
// }


// // 8
// let year8 = Number(prompt("Enter a year:"));

// if (year8 % 100 === 0) {
//     console.log("Century Year");
// }


// // 9
// let num9 = Number(prompt("Enter a number:"));

// if (num9 > 0 && num9 % 2 === 0) {
//     console.log("Positive Even Number");
// }


// // 10
// let marks10 = Number(prompt("Enter marks:"));

// if (marks10 >= 35 && marks10 <= 100) {
//     console.log("Valid Marks");
// }

// //2.if...else
// // 1
// let num1 = Number(prompt("Enter a number:"));

// if (num1 % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// // 2
// let age2 = Number(prompt("Enter your age:"));

// if (age2 >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }


// // 3
// let num3 = Number(prompt("Enter a number:"));

// if (num3 >= 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }


// // 4
// let marks4 = Number(prompt("Enter your marks:"));

// if (marks4 >= 35) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// // 5
// let char5 = prompt("Enter a character:");

// if (char5 >= "A" && char5 <= "Z") {
//     console.log("Uppercase Letter");
// } else {
//     console.log("Not an Uppercase Letter");
// }


// // 6
// let num6 = Number(prompt("Enter a number:"));

// if (num6 % 3 === 0) {
//     console.log("Divisible by 3");
// } else {
//     console.log("Not Divisible by 3");
// }


// // 7
// let password7 = prompt("Enter password:");

// if (password7 === "admin123") {
//     console.log("Login Successful");
// } else {
//     console.log("Incorrect Password");
// }


// // 8
// let year8 = Number(prompt("Enter a year:"));

// if (year8 % 4 === 0) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }


// // 9
// let num9a = Number(prompt("Enter first number:"));
// let num9b = Number(prompt("Enter second number:"));

// if (num9a > num9b) {
//     console.log("Greater number:", num9a);
// } else {
//     console.log("Greater number:", num9b);
// }


// // 10
// let num10 = Number(prompt("Enter a number:"));

// if (num10 >= 0) {
//     if (num10 === 0) {
//         console.log("Zero");
//     } else {
//         console.log("Positive");
//     }
// } else {
//     console.log("Negative");
// }

// 3. IF ELSE IF...ELSE

// //1.
// let month = Number(prompt("Enter the month:"))

// if (month==12 || month==1 || month==2){
//     console.log("winter")
// }else if (month==3 || month ==4 || month==5){
//     console.log("Summer")
// }else if (month==6 || month==7 || month==8){
//     console.log("Monsoon")
// }else if(month==9 || month==10 || month==11){
//     console.log("Autumn")
// }else{
//     console.log("Invalid Month")
// }


// //2
// let income = Number(prompt("Enter the income:"))

// if (income<300000){
//     console.log("No Tax")
// }else if (income>=300000 && income<=700000){
//     console.log("5% Tax")
// }else if (income>=700000 && income<=1000000){
//     console.log("10% Tax")
// }else if (income<=1000000){
//     console.log("15% Tax")
// }

//3
// let marks = Number(prompt("Enter the marks:"))

// if (marks>=90 && marks<=100){
//     console.log("Outsanding")
// }else if (marks>=70 && marks<=89){
//     console.log("Good")
// }else if (marks>=40 && marks<=69){
//     console.log("Average")
// }else if (marks<40){
//     console.log("Fail")
// }else{
//     console.log("Invalid Marks")
// }

//4
// let speed = Number(prompt("Enter the speed:"))

// if (speed>=80){
//     console.log("Fast")
// }else if (speed>=40 && speed<=80){
//     console.log("Normal")
// }else if (speed>=0 && speed<40){
//     console.log("Slow")
// }else{
//     console.log("Invalid speed")
// }

//5
// let height = Number(prompt("Enter the height:"))

// if (height>=170){
//     console.log("Tall")
// }else if (height>=150 && height<=170){
//     console.log("Average")
// }else if (height>=0 && height<150){
//     console.log("Short")
// }else{
//     console.log("Invalid Heghit")
// }


//6
// let day = Number(prompt("Enter the day:"))

// if (day>=1 && day<=5){
//     console.log("Weekday")
// }else if (day>=6 && day<=7){
//     console.log("Weekend")
// }else{
//     console.log("Invalid Input")
// }

//7
// let units = Number(prompt("Enter electricity units:"));
// let bill;

// if (units <= 50) {
//     bill = units * 2;
// } else if (units <= 150) {
//     bill = units * 4;
// } else {
//     bill = units * 6;
// }

// console.log("Total Electricity Bill = ₹" + bill);

//8
// let attendance = Number(prompt("Enter attendance percentage:"));

// if (attendance >= 90) {
//     console.log("Excellent");
// } else if (attendance >= 75) {
//     console.log("Good");
// } else if (attendance >= 50) {
//     console.log("Satisfactory");
// } else {
//     console.log("Poor");
// }

//9
// let mark1 = Number(prompt("Enter first subject mark:"));
// let mark2 = Number(prompt("Enter second subject mark:"));
// let mark3 = Number(prompt("Enter third subject mark:"));

// if (mark1 >= mark2 && mark1 >= mark3) {
//     console.log("Highest mark: " + mark1);
// } else if (mark2 >= mark1 && mark2 >= mark3) {
//     console.log("Highest mark: " + mark2);
// } else {
//     console.log("Highest mark: " + mark3);
// }

//10
// let num = Number(prompt("Enter a number:"));

// if (num === 0) {
//     console.log("Zero");
// } else if (num > 0 && num % 2 === 0) {
//     console.log("Positive Even");
// } else if (num > 0 && num % 2 !== 0) {
//     console.log("Positive Odd");
// } else if (num < 0 && num % 2 === 0) {
//     console.log("Negative Even");
// } else {
//     console.log("Negative Odd");
// }

//D.Nested if

//1
// let num = Number(prompt("Enter a number:"));

// if (num > 10) {
//     if (num % 3 === 0) {
//         console.log("Number is greater than 10 and divisible by 3");
//     } else {
//         console.log("Number is greater than 10 but not divisible by 3");
//     }
// } else {
//     console.log("Number is not greater than 10");
// }

//2
// let age = Number(prompt("Enter your age:"));
// let voterID = prompt("Do you have a voter ID? (yes/no)");

// if (age >= 18) {
//     if (voterID === "yes") {
//         console.log("Can Vote");
//     } else {
//         console.log("Cannot Vote - No Voter ID");
//     }
// } else {
//     console.log("Cannot Vote - Under 18");
// }

//3
// let marks = Number(prompt("Enter marks:"));

// if (marks >= 40) {
//     if (marks >= 80) {
//         console.log("Passed with Distinction");
//     } else {
//         console.log("Passed");
//     }
// } else {
//     console.log("Failed");
// }

//4
// let correctPIN = 1234;
// let pin = Number(prompt("Enter PIN:"));
// let balance = 10000;

// if (pin === correctPIN) {
//     let withdrawal = Number(prompt("Enter withdrawal amount:"));

//     if (withdrawal <= balance) {
//         balance = balance - withdrawal;
//         console.log("Withdrawal Successful");
//         console.log("Remaining Balance: ₹" + balance);
//     } else {
//         console.log("Insufficient Balance");
//     }
// } else {
//     console.log("Incorrect PIN");
// }

//5
// let year = Number(prompt("Enter a year:"));

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("Leap Year");
//         } else {
//             console.log("Not a Leap Year");
//         }
//     } else {
//         console.log("Leap Year");
//     }
// } else {
//     console.log("Not a Leap Year");
// }

//6
// let email = prompt("Enter your email:");

// if (email.includes("@")) {
//     if (email.endsWith(".com")) {
//         if (email.length > 10) {
//             console.log("Valid Email");
//         } else {
//             console.log("Email length is too short");
//         }
//     } else {
//         console.log("Email must end with .com");
//     }
// } else {
//     console.log("Email must contain @");
// }

//7
// let cartTotal = Number(prompt("Enter cart total:"));
// let premium = prompt("Are you a premium member? (yes/no)");
// let discount;
// let finalAmount;

// if (cartTotal >= 1000) {
//     if (premium === "yes") {
//         discount = cartTotal * 0.20;
//     } else {
//         discount = cartTotal * 0.10;
//     }

//     finalAmount = cartTotal - discount;

//     console.log("Discount: ₹" + discount);
//     console.log("Final Amount: ₹" + finalAmount);
// } else {
//     console.log("No discount");
//     console.log("Final Amount: ₹" + cartTotal);
// }

//8
// let num = Number(prompt("Enter a number:"));

// if (num > 0) {
//     if (num % 2 === 0) {
//         if (num % 4 === 0) {
//             console.log("Positive Even and Divisible by 4");
//         } else {
//             console.log("Positive Even but not Divisible by 4");
//         }
//     } else {
//         console.log("Positive Odd");
//     }
// } else {
//     console.log("Number is not positive");
// }

//9
// let age = Number(prompt("Enter your age:"));
// let degree = prompt("Do you have a graduation degree? (yes/no)");
// let experience = Number(prompt("Enter years of experience:"));

// if (age >= 21 && age <= 30) {
//     if (degree === "yes") {
//         if (experience >= 2) {
//             console.log("Eligible for Interview");
//         } else {
//             console.log("Not Eligible - Less than 2 years experience");
//         }
//     } else {
//         console.log("Not Eligible - No Graduation Degree");
//     }
// } else {
//     console.log("Not Eligible - Age must be between 21 and 30");
// }

//10
// let present = prompt("Is the student present? (yes/no)");
// let internalMarks = Number(prompt("Enter internal marks:"));
// let externalMarks = Number(prompt("Enter external marks:"));

// if (present === "yes") {
//     if (internalMarks >= 30) {
//         if (externalMarks >= 35) {
//             console.log("Eligible for Final Exam");
//         } else {
//             console.log("Not Eligible - External marks are less than 35");
//         }
//     } else {
//         console.log("Not Eligible - Internal marks are less than 30");
//     }
// } else {
//     console.log("Not Eligible - Student is absent");
// }

// 5.Switch statement

// 1.
// let month = Number(prompt("Enter the month:"));

// switch(month){
//     case 1:
//         console.log("January")
//         break;
    
//     case 2:
//         console.log("February")
//         break;  
    
//     case 3:
//         console.log("March")
//         break;
    
//     case 4:
//         console.log("April")
//         break;
        
//     case 5:
//         console.log("May")
//         break;

//     case 6:
//         console.log("June")
//         break;

//     case 7:
//         console.log("July")
//         break;

//     case 8:
//         console.log("August")
//         break;

//     case 9:
//         console.log("September")
//         break; 

//     case 10:
//         console.log("October")
//         break; 

//     case 11:
//         console.log("November")
//         break; 

//     case 12:
//         console.log("December")
//         break; 
        
//     default:
//         console.log("Invalid input")    
                                                             
// }      

// //2.
// let ch = prompt("Enter a character:");

// switch (ch.toLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
// }

// let ch = prompt("Enter a character:");

// switch (true){
//     case (ch=="a" || ch=="A"):
//         console.log("vowels")
//         break;
        
//     case (ch=="e" || ch=="E"):
//         console.log("vowels")
//         break;

//     case (ch=="i" || ch=="I"):
//         console.log("vowels")
//         break;
        
//     case (ch=="o" || ch=="O"):
//         console.log("vowels")
//         break;
        
//     case (ch=="u" || ch=="U"):
//         console.log("vowels")
//         break;

//     default:
//         console.log("Consonant")   
//         break;
// }

// //3.
// let season =Number(prompt("Enter the season"));

// switch(true){
//     case (season==1 || season==2):
//         console.log ("Winter")
//         break;
    
//     case(season==3|| season==4):
//         console.log("Summer")
//         break;

//     default:
//         console.log("Invalid input")  
//         break;  

// }

// // 4.
// let marks = Number(prompt("Enter the number:"))

// switch(true){
//     case(marks>=75 && marks<=100):
//         console.log("Distinction")
//         break;
//     case(marks>=60 && marks<=74):
//         console.log("1st class")
//         break;
//     case(marks>=50 && marks<=59):
//         console.log("2nd class")
//         break;
//     case(marks>=35 && marks<=49):
//         console.log("3rd class")
//         break; 
//     case(percentage>=0 && percentage<35):
//         console.log("Failed")
//         break;   
//     default:
//         console.log("Invalid output")

// }

//5
let role = prompt("Enter your role:")

switch(role.toLowerCase()){
    case"admin":
      let action = prompt ("Enter the action:")

      switch(action.toLowerCase()){
        case"create":
          console.log("Admin can create")
          break
        case"edit":
          console.log("Admin can edit")
          break  
        case"delete":
          console.log("Admin can delete")
          break  
      }
      break;
    case"user":
      console.log("Limited Access")
      break;
    default:
        console.log("Invalid input")
        break;

}

//6.
let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
    break;
}

//7.
let value = "0";

switch (value) {
    case 0:
        console.log("This is the number 0");
        break;

    case "0":
        console.log("This is the string '0'");
        break;

    case false:
        console.log("This is false");
        break;

    case null:
        console.log("This is null");
        break;

    case undefined:
        console.log("This is undefined");
        break;

    default:
        console.log("Unknown value");
}

//8
let a = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /, %, **):");
let b = Number(prompt("Enter second number:"));

switch (operator) {
    case "+":
        console.log("Result:", a + b);
        break;

    case "-":
        console.log("Result:", a - b);
        break;

    case "*":
        console.log("Result:", a * b);
        break;

    case "/":
        if (b === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Result:", a / b);
        }
        break;

    case "%":
        if (b === 0) {
            console.log("Cannot find remainder with zero");
        } else {
            console.log("Result:", a % b);
        }
        break;

    case "**":
        console.log("Result:", a ** b);
        break;

    default:
        console.log("Invalid operator");
}

//9

let day = Number(prompt("Enter day number of the month:"));

switch (true) {
    case day >= 1 && day <= 10:
        console.log("Beginning of the month");
        break;

    case day >= 11 && day <= 20:
        console.log("Middle of the month");
        break;

    case day >= 21 && day <= 31:
        console.log("End of the month");
        break;

    default:
        console.log("Invalid day");
}

//10
let category = prompt("Enter category :");
let item = prompt("Enter item:");
let size = prompt("Enter size (half/full):");

let price;

switch (category) {

    case "veg":

        switch (item) {

            case "pizza":

                switch (size) {
                    case "half":
                        price = 150;
                        break;

                    case "full":
                        price = 280;
                        break;

                    default:
                        console.log("Invalid size");
                }

                break;

            case "burger":

                switch (size) {
                    case "half":
                        price = 80;
                        break;

                    case "full":
                        price = 140;
                        break;

                    default:
                        console.log("Invalid size");
                }

                break;

            default:
                console.log("Invalid veg item");
        }

        break;


    case "nonveg":

        switch (item) {

            case "pizza":

                switch (size) {
                    case "half":
                        price = 200;
                        break;

                    case "full":
                        price = 350;
                        break;

                    default:
                        console.log("Invalid size");
                }

                break;

            case "burger":

                switch (size) {
                    case "half":
                        price = 120;
                        break;

                    case "full":
                        price = 180;
                        break;

                    default:
                        console.log("Invalid size");
                }

                break;

            default:
                console.log("Invalid nonveg item");
        }

        break;


    default:
        console.log("Invalid category");
}


if (price !== undefined) {
    console.log("----- ORDER SUMMARY -----");
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Price: ₹" + price);
}