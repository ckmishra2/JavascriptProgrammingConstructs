//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let zero = 0;
let flipcoin = Math.floor(Math.random() * 10)% 2;
if(flipcoin==zero)
console.log("its tail")
else
console.log("its head")