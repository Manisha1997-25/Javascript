let fruits = ["Banana", "Mango", "Apple", "Orange"]
let numArray = [2, 8, 6, 7, 9, 1]


// forEach()
fruits.forEach ((fruit, i)=>{
    console.log(fruit);
    console.log(i);
}) 

numArray.forEach((num)=>{
    console.log(num);
})

numArray.forEach((num)=>{
    console.log(num*2);
})

console.log("*************************************");

numArray.forEach((num)=>{
    console.log(num**2);
})

// map()

fruits.map((fruit)=>{
    console.log("I Like to Eat ", fruit);
})

// using for loop for filter is too lengthy

evenNum = [];
oddNum = [];

for(let i=0; i<numArray.length; i++){
    if(numArray[i]%2==0){
        console.log(numArray[i]);
        evenNum.push(numArray[i]);
        

    }else{
        oddNum.push(numArray[i])
       
    }
    
}
console.log("evenNum Array = ", evenNum);
console.log("oddNum Array = ", oddNum);

// filter
evenNumberArr = numArray.filter((num)=>num%2==0);
console.log("evenNum Array = ",evenNumberArr);
oddNumberArr = numArray.filter((num)=>num%2!=0);
console.log("oddNum Array = ",oddNumberArr);

mulOfNoThree = numArray.filter((num)=>num%3==0);
console.log("Multiple of Three = ",mulOfNoThree );

//find
const apple = fruits.find(el=>el == "Apple");
console.log(apple)

let sumElmt = 0;

for( let i=0; i<numArray.length; i++){
    //  sumElmt = sumElmt + numArray[i];
    sumElmt += numArray[i];
}
console.log(sumElmt);

const sumOfNumFromReduce = numArray.reduce((sumOfNumbers, num)=>{
        return sumOfNumbers + num;
}, 0)
console.log(sumOfNumFromReduce);

const res = numArray.some((n)=>n%2 ==0);
console.log(res);

const res1 = numArray.every((n)=>n%2 ==0);
console.log(res1);

console.log(fruits.sort());
console.log(numArray.sort());

arr1 = [11, 2, 89];
arr2 = [45, 9, 43];

const sortedArr = arr1.concat(arr2);
console.log(sortedArr);
console.log(sortedArr.sort((a,b)=>a-b));