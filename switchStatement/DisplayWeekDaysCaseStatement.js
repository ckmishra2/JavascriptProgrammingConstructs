/*Read a Number and Display the week day (Sunday, Monday,...)*/

const prompt = require("prompt-sync")({sigint: true});
const number= (parseIntprompt('Enter a  number between 1 to 7'));
switch(number){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THRUSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;

}