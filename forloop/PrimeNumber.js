
//program that takes a input and determines if the number is a prime.
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number : "));
if (number >= 2) {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            console.log(number + " Is Not a prime number");
            break;
        }
        else
        console.log(number + " Is a Prime number");
        break;
    }
}
   
