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

// let age = Number(prompt("Enter a age:"));
// if(age<12){
//     console.log("Child Ticket Price is: 100 ")
// }else if(age>=12 && age<=59){
//     console.log("Adult Ticket Price is: 200")
// }else{
//     console.log("Senior Ticket Price is: 150")
// }


// let num1 = Number(prompt("Enter number 1:"));
// let num2 = Number(prompt("Enter number 2:"));
// let num3 = Number(prompt("Enter number 3:"));
// if((num1>num2) && (num1>num3)){
//     console.log(num1,"number 1 is largest")
// }else if((num2>num1)  && (num2>num3) ){
//     console.log(num2,"number 2 is largest")
// }else{
//     console.log(num3,"number 3 is largest")
// }



//4. Nested if =>

    // if(condition1){
    //     if(condition2)
    // }

    // 1
// let num1 = Number(prompt("Enter a number:"));

// if (num1 >=0) {
//     if (num1 % 2 == 0){
//         console.log("The number is positive and even")
//     }else{
//          console.log("The number is positive and odd")
//     }
// } else {
//      if (num1 % 2 == 0){
//         console.log("The number is negative and even")
//     }else{
//          console.log("The number is negative and odd")
//     }
// }


// let marks = Number(prompt("Enter a marks:"));

// if(marks>=35){
//         if(marks>=35){
//             console.log("passed")
//         }else{
//             console.log("Excellent")
//         }
            
// }else (marks<35)
// {
//         console.log("failed")
// }
    
// 5.Switch case

// syntax=>

//     switch(expression){
//         case value1:
//             //code
//             break;
//         case value2;
//             //code
//             break;
//         default:
//             //code        
//     }

// let day = Number(prompt("Enter the day:"));

// switch(day){
//     case 1:
//         console.log("Monday")
//         break;
    
//     case 2:
//         console.log("Tuesday")
//         break;  
    
//     case 3:
//         console.log("Wednesday")
//         // break;
    
//     case 4:
//         console.log("Thursday")
//         // break;
    
//     case 5:
//         console.log("Friday")
//         // break;
    
//     case 6:
//         console.log("Saturday")
//         // break;   
//     case 7:
//         console.log("Sunday")
//         // break;                  
// }                   


// let food = Number(prompt("Enter the food:"));

// switch(food){
//     case 1:
//         console.log("Pizza")
//         break;
    
//     case 2:
//         console.log("Burger")
//         break;  
    
//     case 3:
//         console.log("Pasta")
//         break;
    
//     default:
//         console.log("Selected items")
    
                  
// }                   



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

//3 
let percentage = Number(prompt("Enter the number:"))

switch(true){
    case(percentage>=90 && percentage<=100):
        console.log("A")
        break;
    case(percentage>=75 && percentage<=89):
        console.log("B")
        break;
    case(percentage>=60 && percentage<=74):
        console.log("C")
        break;
    case(percentage>=36 && percentage<=59):
        console.log("D")
        break; 
    case(percentage>=0 && percentage<=35):
        console.log("F")
        break;   
    default:
        console.log("Invalid output")

}

// ternary operator=> shortcut way to write if_else [ES6/ES]

//syntax => condition ? if condition is true: if condition is false;    

