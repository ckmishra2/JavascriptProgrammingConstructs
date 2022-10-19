/*Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...*/ 
const prompt = require("prompt-sync")({sigint: true});
const number= parseInt(prompt('Enter a  number '));

let unit = (number >= 1 && number <= 9);
let ten = (number >= 10 && number <= 99);
let hundred = (number >= 100 && number <= 999);
let thousand = (number >= 1000 && number <= 9999);
let TenThousand = (number >= 10000 && number <= 99999);
let lakh = (number >= 100000 && number <= 999999);
let invalid = "Invalid Number";
    console.log(number)
    switch(true){
        case unit:
            console.log("its unit");
            break;
        case ten:
            console.log("its ten");
            break;
        case hundred:
                console.log("its hundred");
                break;
        case thousand:
                console.log("its thousand");
                break;
        case TenThousand:
                console.log("its TenThousand");
                break;
        case lakh:
                console.log("its lakh");
                break;
        case invalid:
            console.log(invalid);
            break;
    }

   