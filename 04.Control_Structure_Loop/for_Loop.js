////////////    for loop     /////////////

// => Syntax
// for (initialization; condition; increment/decrement) {
//     // Code to repeat
// }

// 1. Example:Print Numbers from 1 to 5

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     console.log(i);
//     sum+=i;
// }
// console.log("Sum:"+sum);

// for(let i=1; i<=10; i++){
//     console.log(i*7);
// }

// let num = Number(prompt("Enter the number:"));
// let factorial = 1;

// for (let i=num; i>1; i--){
//     factorial *=i;
// }

// console.log(factorial)

// //Que 1
// // Print numbers from 1 to 5 in the same line using the while loop;
// let bag = "";
// for (let i=1; i<=5; i++){
//     bag += i + " ";
// }
// console.log(bag);

//Que 2
//print * five times in different lines 

// let star = "";
// for (let i=1; i<=5; i++){
//     star += "*\n";
// }
// console.log(star);
//print * five times in same lines 

// let star = "";
// for (let i=1; i<=5; i++){
//     star += "* ";
// }
// console.log(star);

// //Que 3
// //Find the sum of first 10 natural numbers using for loop
// let sum =0;
// for (let i=1; i<=10; i++){
//     sum += i;
// }
// console.log(sum);

// //Que 4
// //Find the multiplication of first five natural numbers.
// let product = 1;
// for (let i=1; i<=5; i++){
//     product *= i;
// }
// console.log(product);

// let n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log("Factorial of " + n + " is " + factorial);
// // Output: Factorial of 5 is 120


//Que 5
// //print the multiplication table of the 9 
// let table =9;
// for (let i=1; i<=10; i++){
//     console.log(table+" * "+i+" = "+(table*i));
// }

//Que 6
// Give an array [10 , 20, 30 , 40, 50], print all the elements using a for loop.
// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
// }

//Que 7
// Given a string "CodingGita" , print each character of the string using a for loop.
// let str = "Coding Gita";
// for (let i = 0; i <=str.length-1; i++) {
//     console.log(str[i])
     
// }
// let str = "Coding Gita";
// for (let i = 0; i <=str.length-1; i++) {
//     if(str[i]==" "){
//         continue;
//     }
//      console.log(str[i])
// }

//Que 8
//print numbers from 1 to 15 but skip all multiples of 3 (Continue).
// for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// // Print numbers from 1 to 20 but stop complet when you reach 13 .
// for (let i=1; i<=20; i++){
//       if (i==13){
//         break;
//       }
//       console.log(i);
// }

// //print numbers from 1 to 30 . stop the loop as soon as you find a number that it is divisible by both 3 and 7

// for( let i=1; i<=30; i++){
//     console.log(i)
//     if (i%3==0 && i%7==0){
//         break;
//     }
   
// }
// // Print numbers from 1 to 15 but skip all the multiples of 3

// for (let i=1; i<=15; i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i)
// }

// //print only odd numbers from 1 to 20 using continue

// for (let i=1; i<=20; i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i)
// } 

//print numbers from 1 to 25 but skip all numbers that are perfect squares (1,4,9,16,25).
// for (let i=1; i<=25; i++){
//     if(i%(i**0.5)==0){
//         continue;
//     }
//     console.log(i)
// }
// for (let i=1; i<=15; i++){
//     let sqRoot = Math.sqrt(i);
//     if (Number.isInteger(sqRoot)){
//         continue;
//     }
//     console.log(i,sqRoot)
// }

//Syntax=>
// for(let i = startingValue; i>= endingValue; i--){
///   code
//}

// for (let i=5;i>=1;i--){
//     console.log(i)
// }

// for (let i=20;i>=1;i--){
//     if(i%2==0){
//     console.log(i)
//     }
// }

//for (let i=20;i>=1;i-=2){
//     console.log(i)
//     }

//// //print the multiplication table of the 9 
// let table = 8;
// for (let i=10; i>=1; i--){
//     console.log(table+" * "+i+" = "+(table*i));
// }

// for (let i=10; i>=1; i--){
//     console.log()
// }
// for (let i=1;i<=5;i++){
//     let row =""
//     for (let j=1; j<=5;j++){
//       row+="*"+" ";
//     }
// console.log(row)
// }


// for (let i=1;i<=5;i++){
//     let row =""
//     for (let j=1; j<=5;j++){
//       row+=i+" ";
//     }
// console.log(row)
// }

// for (let i=1;i<=5;i++){
//     let row =""
//     for (let j=1; j<=5;j++){
//       row+=j+" ";
//     }
// console.log(row)
// }

// for (let i=1; i<=5; i++){
//     let bag ="";
//     for(let j=1;j<=i;j++){
//         bag += "* "
//     }bag
//     console.log(bag)
// }


// for (let i=1; i<=5; i++){
//     let bag ="";
//     for(let j=1;j<=i;j++){
//         bag += j
//     }bag
//     console.log(bag)
// }

// for (let i=1; i<=5; i++){
//     let bag ="";
//     for(let j=1;j<=i;j++){
//         bag += i
//     }bag
//     console.log(bag)
// }

// for (let i = 0; i < mat.length; i++) {
//     let bag = "";
//     for (let j = 0; j < mat[i].length; j++) {
//         bag += mat[i][j] + " ";
//     }
//     console.log(bag.trimEnd());
// }

// let arr = [10, 20, 30];
// console.log(arr[0]);

// let mat = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];

// console.log(mat[0][1]);
// console.log(mat[2][2]);
// console.log(mat[2][0]);



// let arr  =[10,20,30];
// let bag=""
// for (let i=0; i<=arr.length-1; i++){
//    bag += arr[i]+" ";
// }
// console.log(bag)



// let mat = [
//     [10, 20, 30, 35],
//     [40, 50, 60, 45],
//     [70, 80, 90 ,75]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// for(let i=0; i<rows; i++){
//     for(let j=0; j<columns; j++){
//         console.log(mat[i][j])
//     }
// }



// let mat = [
//     [10, 20, 30, 35],
//     [40, 50, 60, 45],
//     [70, 80, 90 ,75]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// for(let i=0; i<rows; i++){
//     let bag =""
//     for(let j=0; j<columns; j++){
//         console.log(mat[i][j])
//     }
// }


// let mat = [
//     [10, 20, 30, 35],
//     [40, 50, 60, 45],
//     [70, 80, 90 ,75]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// for(let i=0; i<rows; i++){
//     let bag =""
//     for(let j=0; j<columns; j++){
//         console.log(mat[i][j])
//     }
// }


// let matrix = [
//     [1, 2 ,3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let row = matrix.length;
// let columns = matrix[0].length;
// for(let i=0; i<row; i++){
//     let bag = ""
//     for (j=0; j<columns; j++){
//         // console.log(matrix[i][j])
//         bag += matrix[i][j];
//     }
//     console.log(bag)
// }



// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// let row = matrix.length;
// let columns = matrix[0].length;
// for (let i = 0; i < row; i++) {
//     let bag = "";
//     for (let j = 0; j < columns; j++) {
//         bag += matrix[i][j] + " ";
//     }
//     console.log(bag.trimEnd());
// }

// let matrix =[
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9]
// ];

// for (let i=0; i<row;i++){
//      let arr=[];
//      for(let j=0; j<coll; j++){
//         let collValue = (i+1)*(j+1);
//         arr[j]= collValue;
//      }
//      matrix.push(arr)
//     }
//     console.log(matrix)
