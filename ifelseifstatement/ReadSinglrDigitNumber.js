//Read a single digit number and write the number in word
const prompt = require("prompt-sync")({sigint: true});
const number = parseInt(prompt('Enter a single digit number'));
if(number==0)
    console.log("ZERO");
else if(number==1)
    console.log("ONE");
else if(number==2)
    console.log("TWO");
if(number==3)
    console.log("THREE");
else if(number==4)
    console.log("FOUR");
else if(number==5)
    console.log("FIVE");
else if(number==6)
    console.log("SIX");
else if(number==7)
    console.log("SEVEN");
else if(number==8)
    console.log("EIGHT");
else
    console.log("NINE")

