// // let roomTemperature = 30;
// // let requiredTemperature = 24;
// // let isTemperature = roomTemperature>requiredTemperature;
// // console.log("Is the Room temperature is same=>",isTemperature)


// // let employeeWorkinghours = 9;
// // let actuallWorkinghours = 8;
// // let WorkingHours = employeeWorkinghours>=actuallWorkinghours;
// // console.log("The actual Time is:",WorkingHours)


// // let uploadedSize = 9;
// // let actuallSize = 8;
// // let Work= employeeWorkinghours>=actuallWorkinghours;
// // console.log("The actual Time is:",Work)

// // let emailVerified=true;
// // let phoneVerified=true;
// // let isVerified = emailVerified && phoneVerified;
// // console.log(`Is the user verified? ${isVerified}`);

// // let newUser=true;
// // let hasNotPurchased=false;
// // let isBought = newUser || hasNotPurchased;
// // console.log(`Special offer applicable? :${isBought}`);


// // 1. Logical AND &&

// //Que 1
// //// let Username=admin;
// // //let Password="1234";
// // //let isSame = Username==admin && Password=="1234";
// // //console.log(`Do the credentials match? :${isSame}`);

// //Que 2
// // let isLoggedIn=true;
// // let hasPermission=true;
// // let isPermitted = isLoggedIn && hasPermission;
// // console.log(`Is the user permitted? :${isPermitted}`);

// //Que 3
// // let isStock=true;
// // let price=800;
// // let isbought = isStock && price==800;
// // console.log(`Is the item bought? :${isbought}`);

// //Que 4
// // let studentMarks=75;
// // let studentAttendance=80;
// // let iseligible = studentMarks==75 && studentAttendance==80;
// // console.log(`Is the student eligible? :${iseligible}`);

// //Que5
// // let isWeekend=true;
// // let isHoliday=false;
// // let isparty = isWeekend && isHoliday;
// // console.log(`Is it party time? :${isparty}`);

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


// // 2. Logical OR //
// //Que 1
// // let passwordCorrect = true;
// // let otpValid = false;
// // let isallowed = passwordCorrect || otpValid;
// // console.log(`Is the user allowed? :${isallowed}`);

// //Que 2
// // let age = 16;
// // let height = 155;
// // let isEntryallowed = age >= 18 || height >= 150;
// // console.log(`Is the Student eligible for entry? :${isEntryallowed}`);

// //Que 3
// // let emailGiven = true;
// // let phoneGiven = false;
// // let isFormValid = emailGiven || phoneGiven;
// // console.log(`Is the form valid? :${isFormValid}`);

// //Que 4
// // let score = 900;
// // let timeBonus = true;
// // let isGameLevel = score >= 1000 && timeBonus;
// // console.log(`Is the game level complete? :${isGameLevel}`);

// //Que 5
// // let isBanned = false;
// // let timeBonus = true;
// // let isGameLevel = score >= 1000 && timeBonus;
// // console.log(`Is the game level complete? :${isGameLevel}`);

// //Que 1
// //let marks =32;
// // if(marks>=35){
// //     console.log("Passed")
// // }

// // //Que 2
// // let isLoggedIn = true;
// // if(isLoggedIn==true){
// //     console.log("Welcome")

// // }
// // if(isLoggedIn){
// //     console.log("Welcome")
// // }


// // //Que 3
// // let isLoggedIn = false;
// // if(isLoggedIn==false){
// //     console.log("User is not logged in")

// // }
// // if(!LoggedIn){
// //     console.log("User is not logged in")
// // }

// // //Que 4

// // let num = 99;
// // if (num%2==0){
// //     console.log("Even")
// // }

// // //Que 5
// // let temperature= 35;
// // if (temperature>30){
// //     console.log("its Hot")
// // }


// let num = 99;
// if (num%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }


// let year = 2000;
// if (year%4==0){
//     console.log("Is leap Year")
// }else{
//     console.log("Is not leap year")
// };


let character = "d";
if (character=="a" || character=="e" || character=="i" || character=="o" || character=="u" ){
    console.log("Is Vowel")
}else{
    console.log("Is Consonent")
};    