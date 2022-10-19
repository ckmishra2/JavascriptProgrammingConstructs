/*Write a program that takes a command-line argument n and prints the nth harmonic
number.  */
function harmonicNumber(){
    const prompt = require("prompt-sync")({sigint: true});
    const number = parseInt(prompt('Enter a number'));
            let harmonic = 1;
            for(let i=1;i<=number;i++) {
                let x=1/i;
                harmonic+=x;
    
                }
                console.log('harmonic number of '+number+' = '+harmonic);
           

}
harmonicNumber();