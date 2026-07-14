let a =10;
let b =20;


//Numbers (Mathematical Operations)

console.log("Addition=", a+b);
console.log("Substract=", a-b);
console.log("Multiplication=", a*b);
console.log("Division=", a/b);
console.log("Modulus=", a%b);

// string
let fvrtMovie="Animal"
let description="I like this Movie which is "+ fvrtMovie;

console.log(fvrtMovie);
console.log(description);

// boolean
let ishungry =true;

if (ishungry){
    console.log("Go Eat");
}
else{
    console.log("You are full");
}

// Object

let fvrtAnimal={
    name:"Kukku",
    type:"Dog",
    age:3,
    isFriendly:true
};

console.log(fvrtAnimal);
console.log("Animal's Name = " + fvrtAnimal.name);

// Arrays

let colors =["red", "blue","white", "purple", "orange"];
console.log(colors);

// push method is used to add any thing in array
colors.push("pink");
console.log("After adding colors=", colors);

// pop is used to add remove last from array 
colors.pop();
console.log("After removing last colors =", colors);

// undefined

// let mystery;
// console.log("value:", mistery, "Type:", typeof mistery);

// null
// mystery = null;
// console.log("value:", mistery, "Type:", typeof mistery);

//BigInt

let bigNumber=123456789123456789n;
console.log(bigNumber);
console.log(bigNumber * 2n);

//Symbol

let symbol1=symbol("unique");
let symbol2=symbol("unique");
console.log(symbol1==symbol2);