// Write function that reverse each word in a sentence while maintaining the original word order

function reverse(sentence) {
    let reversedSentence = sentence.split(" ")
        .map(word => word
            .split("")
            .reverse()
            .join("")
        ).join(" ")
    return reversedSentence
}
console.log(reverse("Hello World From Wisdom Sprouts IT Training Hub"))

//Write a function that takes a paragraph of text
let result = {}
function paraOfText(para) {
    let newPara = para.toLowerCase().replace(/[^\w\s]/g, "").split(" ")

    newPara.map(word => {
        result[word] = (result[word] || 0)
            + 1
    })
    return newPara
}
console.log(paraOfText("Learning Javascript is fun! Fun and easy to learn Javascript."))
console.log(result)

//

function userData(users) {
    return users.filter(user => user.age > 18)
}
console.log(userData([{ name: "Alice", age: 22 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 19 }]))

//

function productData(products) {
    return products.sort((a, b) => a.price - b.price)
}
console.log(productData([{ name: "Keyboard", price: 499 }, { name: "Monitor", price: 8999 }, { name: "Mouse", price: 299 }]))

//
function urlSlug(url) {
    let getUrl = url.toLowerCase().replace(/[^\w\s]/g, "").replace(/ /g, "-")
    return getUrl
}
console.log(urlSlug("Learn Javascript in 30 Days!"))

function wordsArray(retObj) {
    let resultt = retObj.reduce((acc, word) => {
        let length = word.length

        if (!acc[length]) {
            acc[length] = []
        }

        acc[length].push(word)

        return acc
    }, {})

    return resultt
}
console.log(wordsArray(["dog", "apple", "sun", "table", "cat", "pie"]))

//
// // Debounce function
// function debounce(func, delay) {

//     let timer
//     return function (...args) {

//         // Cancel previous timer
//         clearTimeout(timer)

//         // Start a new timer
//         timer = setTimeout(() => {

//             func.apply(this, args)

//         }, delay)
//     }
// }


// // Get input element
// const searchInput = document.getElementById("search")

// const result1 = document.getElementById("result")


// // Add input event
// searchInput.addEventListener(
//     "input",

//     debounce(function (event) {

//         const searchValue = event.target.value

//         console.log("Search triggered:", searchValue)

//         result.innerText = "Searching for: " + searchValue

//     }, 300)
// )

// //


function deepCopy(obj) {

    // If value is not an object or is null,
    // return it directly
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}


// Original object
const original = {
    name: "John",
    address: {
        city: "New York",
        coordinates: {
            lat: 40.7128, lng: -74.006
        }
    }
}

// Create deep copy
const copiedObject = deepCopy(original);

// Change nested values in copied object
copiedObject.address.city = "Mumbai";

console.log("Original Object:");
console.log(original);

console.log("Copied Object:");
console.log(copiedObject);


//

function task(name) {
    return new Promise((resolve) => {

        // Random delay between 0.5 and 2 seconds
        const delay = Math.floor(Math.random() * 1500) + 500

        setTimeout(() => {
            console.log(`Task ${name} completed in ${delay}ms`)
            resolve()
        }, delay)

    })
}
async function runTasks() {
    console.log("Task A started")
    await task("A")
    
    console.log("Task B started")
    await task("B")
     
    console.log("Task C started")
    await task("C")
    

    console.log("All tasks completed")
}
runTasks()

//

function calculator(expression) {

    // Split expression into numbers and operators
    let tokens = expression.match(/\d+(\.\d+)?|[+\-*/]/g);

    // First handle * and /
    for (let i = 0; i < tokens.length; i++) {

        if (tokens[i] === "*" || tokens[i] === "/") {

            let num1 = Number(tokens[i - 1]);
            let num2 = Number(tokens[i + 1]);

            let result;

            if (tokens[i] === "*") {
                result = num1 * num2;
            } else {
                if (num2 === 0) {
                    return "Cannot divide by zero";
                }

                result = num1 / num2;
            }

            // Replace number, operator, number
            tokens.splice(i - 1, 3, result.toString());

            // Go back one position
            i--;
        }
    }

    // Then handle + and -
    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {

        let operator = tokens[i];
        let number = Number(tokens[i + 1]);

        if (operator === "+") {
            result = result + number;
        } 
        else if (operator === "-") {
            result = result - number;
        }
    }

    return result;
}


// Examples
console.log(calculator("3 + 5 * 2 - 4/2"));
console.log(calculator("2 + 3 * 4"));
console.log(calculator("10 + 20 / 5"));
console.log(calculator("10 - 2 * 3"));
console.log(calculator("100 / 5 + 10"));