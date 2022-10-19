//Write a function to check if the two numbers are Palindromes
function isPalindrome(number1,number2) {
    let reverse1 = getReverse(number1);
    if (number1 == reverse1) {
        console.log(number1 + " is palindrome.");
    } else {
        console.log(number1 + " is not palindrome.");
    }
    let reverse2 = getReverse(number2);
    if (number2 == reverse2) {
        console.log(number2 + " is palindrome.");
    } else {
        console.log(number2 + " is not palindrome.");
    }
}
function getReverse(number)
{   
    let reverse = 0;
    let temp = number;
    while (temp > 0) {
        reverse = reverse * 10 + temp % 10;
        temp = parseInt(temp / 10);
    }
    return reverse;
}
const prompt = require('prompt-sync')({ sigint: true });
let number1 = parseInt(prompt("Enter a number "));
let number2 = parseInt(prompt("Enter a number "));

isPalindrome(number1,number2); 