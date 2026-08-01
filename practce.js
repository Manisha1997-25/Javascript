let x="10";
let y=2;



// 

let value="20";
value = Number(value);
console.log(typeof(value));

//
let age=29;

if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

//

let ta = 90;
if(ta > 100){
    ta-= ta * 0.10;
}
console.log("Discoun = ", ta);

//

let number=5;
let fact=1;

for(let i=1; i<=number; i++){
    fact=fact*i;
    console.log(i , fact);
}

console.log("Factorial of", number, "is", fact);

if (fact < 10){
    console.log("The factorial is small");
}
else if(fact >= 10 && fact <= 100){
    console.log("Tha Factorial is Moderate");
}
else{
    console.log("The Factorial is Large")
}
