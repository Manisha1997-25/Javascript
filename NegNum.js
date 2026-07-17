//Negative Number Checks
let a=-3;

if(a<0){
    console.log("Number is negative");
}
else{
    console.log("Number is Positive")
}

//Print Even Numbers
let b=17

if(b%2==0){
    console.log("This is Even number");
}
else{
    console.log("This is Odd number")
}

//FOR LOOP
//Multiplication Table enter number by user
const prompt = require("prompt-sync")();

let num=Number(prompt("enter a number : "));

for(let i=1; i<=10; i++){
    console.log(num, "*",i,"=",(num*i));
}


// print even number up to 20


// for(let i=2; i<=20; i++){
//     if(i%2===0){
//        console.log(i);
//     }
    
// }

for(let i=2; i<=20; i+=2){
    console.log(i);
}


//sum of digits using do while

let n=Number(prompt("Enter a number : "));
let sum=0;
do{
    let digit = n % 10;
    sum=sum+digit;
    n =Math.floor (n / 10);
}while(n>0);

console.log("Sum of Digits = " +sum)

//print fizz for 3, buzz for 5 and fizzbuzz for multiples of 3 & 5 

for(i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}

//Switch Case
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wenseday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
        
}

console.log(day);


