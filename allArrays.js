//Assignments of Array
//Assignment 1
let fruits = ["Apple", "Banana", "Chiku", "Dragonfruit", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

let cities = ["Beed", "Dharashiv", "Nanded", "Pune", "Mumbai"];

//Assignment 2
console.log(fruits.push("Orange"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

console.log(cities.unshift("Latur"));
console.log(cities);


//Assignment 3
console.log(fruits.includes("Dragonfruit"));
console.log(cities.indexOf("Dharashiv"));
console.log(cities.join("-"));
console.log(cities.reverse());

let subjects = ["HTML", "CSS", "Bootstrap", "Javascript", "Python"]

console.log(subjects)
console.log(subjects.reverse())

//Assignment 4
let students = ["Manisha", "Akash", "Anisha", "Nisha", "Prakash", "Sagar"]

students.forEach((fruit)=>{
    console.log(fruit)
})

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number.forEach((num)=>{console.log(num*2)})


console.log(cities)
const upperCities1 = []
cities.forEach((city)=>{
     upperCities1.push(city.toUpperCase())
})
console.log(upperCities1)
// const upperCities = cities.map((city)=>{
//     return city.toUpperCase()
// })
// console.log(upperCities)

//Assignment 5

let square = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sqrOfNo = square.map((n)=>{
    return n**2
})
console.log(sqrOfNo)


const upperName = students.map((stud)=>{
     return stud.toUpperCase();
})
console.log(upperName)

const addNum = square.map((n)=>{
    return n+5
})
console.log(addNum)

const newStud = students.map((nstud)=>{
    return nstud.length
})
console.log(newStud)

let prices = [300, 50, 150, 270, 999]

const disPrice = prices.map((price)=>{
    offer = price/10
    return price -= offer
})
console.log(disPrice)


//Assignment 6
let numbers = [29, 44, 19, 78, 44, 72, 56, 32, 17, 23]

const evenNum = numbers.filter((num)=>{
   return num%2==0
})
console.log(evenNum)

const oddNum = numbers.filter((num)=>{
    return num%2 !=0
})
console.log(oddNum)

const greatNum = numbers.filter((num)=>{
    return num>50
})
console.log(greatNum)

const more5Char = students.filter((s)=>{
    return s.length>5
})
console.log(more5Char)

const startWiths = students.filter((s)=>{
    return s.startsWith("S")
})
console.log(startWiths)

//Assignment 7
//every()
let nmbr =[1, 8, 9, 7, 5] 
const positive = nmbr.every((num)=>{
    return num>0
})
console.log(positive)


let nmbr1 = [-1, -2, 3, -4]

const negative = nmbr1.every((num)=>{
    return num>0
})
console.log(negative)

let marks = [82, 70, 55, 37, 75]
const marksPass = marks.every((mark)=>{
    return mark>35
})
console.log(marksPass)
let marks1 = [21, 34, 51, 37, 75]
const marksPass1 = marks1.every((mark)=>{
    return mark>35
})
console.log(marksPass1)

const checkThreeChar = students.every((name)=>{
    return students.length>=3
})
console.log(checkThreeChar)
console.log("************************")
//some
const divByFive = marks1.some((sm=>sm%5))
console.log(divByFive)

const startWithP = cities.some((city)=>{
    return city.startsWith("P")
})
console.log(startWithP)