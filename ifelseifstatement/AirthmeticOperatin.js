var prompt = require('prompt-sync')();
var a = prompt("Enter the value of a : ");
var b = prompt("Enter the value of b : ");
var c = prompt("Enter the value of c : ");

let firstOperation = (a + b * c);
console.log("value1 is : " + firstOperation);
let secondOperation = (c + a / b);
console.log("value2 is : " +  secondOperation);
let thirdOperation = (a % b + c);
console.log("value3 is : " + thirdOperation);
let fourthOperation = (a * b + c);
console.log("value4 is : " + fourthOperation );

let valuearray = [firstOperation, secondOperation, thirdOperation, fourthOperation ];

let maxvalue = Math.max.apply(null, valuearray);
console.log("Maximum value is : " + maxvalue);

let minvalue = Math.min.apply(null, valuearray);
console.log("Maximum value is : " + minvalue);

