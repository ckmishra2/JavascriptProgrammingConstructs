/*a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.*/
const prompt = require("prompt-sync")({sigint: true});
//take input
let date = parseInt(prompt('Enter date'));
date = new Date();
let march=date.setMonth(3, 20);
const date2 = new Date();
let june = date.setMonth(6, 20);
if(date >march<june )
console.log(true)
else
console.log(false)