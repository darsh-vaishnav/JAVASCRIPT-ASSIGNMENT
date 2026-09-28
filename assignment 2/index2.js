// console.log(7==7);  //true
// console.log(7!=7); //false
// console.log(7==70); //fals4
// console.log(7==07); //true
// console.log(7=="7") //true
// console.log(7==1) //false
// console.log(0== false) //true
// console.log(1==false) //false
// console.log(null =="") //fals

//1
// let scannedId ="Da@2008"
// let storedId = "Da@2008"
// let isMatch = (scannedId===storedId)
// console.log("The product Id is:",isMatch)

//2
//let selectedPayment ="Online"
// let savedPayment = "oNLINE"
// let isMatch = (selectedPayment===savedPayment)
// console.log("The product Id is:",isMatch )

//3
// let selectedCountryCode ="+91"
// let savedCountryCode = "+19"
// let isDifferent = (selectedCountryCode===savedCountryCode)
// console.log("The country code are different from each other:",isDiffernt )

//4
// let currentDeviceType ="lavender"
// let registeredDeviceType = "lavender"
// let isSame = (currentDeviceType===registeredDeviceType)
// console.log("The Registered Device Type is Same as Current Device Type:",isSame )

//true=>1
// //false => 0
// console.log(false==0);//true
// console.log(true==1);//true
// console.log(false==1);//false
// console.log(true==0);//false
// //null => 0
// //undefined => NaN
// console.log(null==0);//false
// console.log(undefined==NaN);//false
// console.log(null==undefined);//true
// //[] => 0
// //{} => 1
// console.log([]==0);//true
// console.log({}==NaN);//false
// console.log([]=={});//false

let prompt=require('prompt-sync')();

let n1=prompt('enter first num: ');
let n2=prompt('enter second num: ');

console.log (n1==n2)

