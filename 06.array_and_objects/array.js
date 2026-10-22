// // Creating Arrays
// // a . using the square brackets ;
// // let students = ["Jenil","Mahir","Priyesh"]
// // console.log(students)

// // b . using the Array  construcor ;
// // var marks = new Array(85, 90, 78);

// // ---------3. Accessing Values in an Array-------------//

// var students = ["Jenil", "Mahir", "Priyesha"];

// console.log(students[0]); // Jenil
// console.log(students[2]); // Priyesha

// //---------------  4. Updating Values ----------------//
// var marks = [80, 75, 90];
// marks[1] = 95;

// console.log(marks); // [80, 95, 90]

// let students = ["Darsh", "Mayank","Yash","Lavya","Tarang","Dev","Darshit"]
// students[1] = "Jainam"

// console.log(students) //["Darsh", "Jainam","Yash","Lavya","Tarang","Dev","Darshit"]

// //------------------- 5. Array Length ----------------//

// //Every array has a built-in property called length.

// let arr =[1,2,3];
// console.log(arr.length);


// //------------  6. Looping Through Arrays ----------------//

// // let users=["John","Jainam","Jarvis","Thanos"]

// // for(let i=0; i<=3; i++){
// //     console.log(users[i])
// // }

// // example 1
// let users=["John","Jainam","Jarvis","Thanos","Demon"]

// // for(let i=0; i<users.length-1; i++){
// //     console.log(users[i]);
// // }
// while(i<users.length-1){
//     console.log(users[i]);
//     i++;
// }

// Syntax=>
//     for(cost variable of iterable){
//         code
//     }
//  const students = ["Jenil","Mahir", "Krishna","Yashvi"];
 
//  for(const student of students){
//     console.log(student)
//  }

// que 1
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//------------ 7. Adding Elements to Arrays ------------//

// let nums = [4,6,8]
// nums.push(20);
// nums.push(12);
// console.log(nums);
// nums.unshift(2);
// nums.unshift(0);
// console.log(nums)

//-------------- 8. Removing Elements---------------------//


// let nums =[100, 200, 300, 400, 500]

// nums.pop();
// console.log(nums);

// nums.shift();
// console.log(nums);


