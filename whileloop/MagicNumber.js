const prompt = require('prompt-sync')();
console.log("Think a number");
let start = 1;
let end = 100;
let bfound = false;
while(!bfound ){
    let mid = parseInt((start + end)/2);
    console.log(" Enter 1 if your number is equal to "+mid+
    "\n Enter 2 if your number is greater than "+mid+"\n Enter 3 if your number is less than "+mid+"\n");
    let askUser = parseInt(prompt("Enter your response :" ));
    if(askUser==1){
        bfound=true;
        console.log("Your magic number is "+mid);
    }
    else if(askUser ==2){  
        start=mid;
    }
    else
        end=mid;
}
      

