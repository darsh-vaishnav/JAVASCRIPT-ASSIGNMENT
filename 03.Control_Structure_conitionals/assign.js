const prompt = require('prompt-sync')();
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


// let character = "d";
// if (character=="a" || character=="e" || character=="i" || character=="o" || character=="u" ){
//     console.log("Is Vowel")
// }else{
//     console.log("Is Consonent")
// };    


// SYNTAX=>

// if(Condition1){

// }else if(Condition2) {

// }else{

// }    


// let num = 0
// if(num>0){
//     console.log("positive")
// }else if(num<0){
//     console.log("negative")
// }else{
//     console.log("Zero")
// }

// let marks = Number(prompt("Enter a marks:"));
// if(marks<0 || marks>100){
//     console.log("Invalid marks")
// }
// else{
//     if(marks>35){
//         console.log("passed")
//     }else if(marks<35){
//         console.log("failed")
//     }else{
//         console.log("just passed")
//     }
// }    

let age = Number(prompt("Enter a age:"));
if(age<12){
    console.log("Child Ticket Price is: 100 ")
}else if(age>=12 && age<=35){
    console.log("Adult Ticket Price is: 200")
}else{
    console.log("Senior Ticket Price is: 150")
}