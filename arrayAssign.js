// 1. To reverse an array manually
fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Papaya']
const revFruits =[];
let len = fruits.length;
for(let i=len-1; i>=0; i--){
    revFruits.push(fruits[i])
}
console.log("Fruits Array : " +fruits)
console.log("Reverse Fruits Array : " +revFruits)

// 2. To find the second largest number in an array

let arr = [84, 4, 8, 21, 41, 34];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);


// 3. To merge two arrays without duplicates
arr1 = [11, 43, 99, 75]
arr2 = [23, 11, 95, 43]
const result = [...arr1];
function mergeArray(){
    for(let i=0; i<arr2.length; i++){
        if(!result.includes(arr2[i])){
            result.push(arr2[i]);
        }
    }
}
mergeArray();
console.log(result);


// 4. To find the frequency of each element in an array
//this question meaning means count of duplicate but in output shows frequency 

arr = [1, 2, 3, 4, 3, 3] //o/p '1': 1, '2': 1, '3': 3, '4': 1
function frequencyCount(arr){
    let freq = {};
    for(let i=0; i<arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }else{
            freq [arr[i]]=1
        }
    }
    return freq
}
console.log(frequencyCount(arr))
// 5. Implement a manual version of the includes method
//withoud including includes()
function myIncludes(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            return true
        }
    }
    return false
}
console.log(myIncludes([1, 2, 3], 3))
console.log(myIncludes([1, 2, 3], 5))
// 6. To shift elements in an array to the left by one position

function shiftLeft(arr){
    let first = arr[0]
    for(let i=0; i<arr.length-1; i++ ){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=first
    return arr
}
console.log(shiftLeft([1, 2, 3, 4, 5]))

// 7. To create a function that rotates an array to the right by k steps

function rotateRight(arr, k){
    k=k%arr.length
    for (let i=0; i<k; i++){
        let last = arr[arr.length-1]
        for(let j=arr.length-1; j>0; j--){
            arr[j]=arr[j-1]
        }
        arr[0]=last
    }
    return arr
}
console.log(rotateRight([1, 2, 3, 4, 5], 2))
// 8. To remove all duplicate elements in an array

function removeDuplicates(arr){
    let result = []
    for(let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([1, 2, 2, 4, 5, 6, 6]))
// 9. To create a 2D array representing a multiplication table for numbers 1 to 10

function multiplicationTable(){
    let table = []
    for(let i=1; i<=10; i++){
        let row = []
        for(let j=1; j<=10; j++){
            row.push(i*j)
        }
        table.push(row)
    }
    return table
}
console.log(multiplicationTable())
// 10.write a function that finds the intersection of two arrays

function intersection(arr1, arr2){
    let result = []
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
            result.push(arr1[i])
        }
    }
    return result
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]))




