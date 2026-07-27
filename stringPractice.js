// 1. convert given string to capitalise 
strPara = "small efforts today lead to big achievements tomorrow"

function convertToUpperCase(str){
    return str.toUpperCase()
}
strUpperCase = convertToUpperCase(strPara)

console.log(strUpperCase)

// 2. convert given string to lower Case
strPara1 = "small efforts today lead to big achievements tomorrow"

function convertToLowerCase(str){
    return str.toLowerCase()
}
strLowerCase = convertToLowerCase(strPara1)

console.log(strLowerCase)

// 3. Extract the first word of a sentence

strPara2 = "small efforts today lead to big achievements tomorrow"

const extractFirstWord = (str) => {
    return str.charAt(0)
}

firstLetter = extractFirstWord(strPara2)
console.log(firstLetter)

// 4. split a string into an array of words
strPara4 = "small efforts today lead to big achievements tomorrow"
function splitWords(str){
    return str.split(" ")
}
console.log(splitWords(strPara4))

// 5. Replace all spaces in  a string with hypens

strPara5 = "small efforts today lead to big achievements tomorrow"

function replaceAll (str){
    return str.replaceAll(" ", "_")
}
console.log(replaceAll(strPara5))

console.log("-----------------------")
// 6. Check if string is Palindrom or not
strPara6 = "madam"
let reversed = ''
function checkPalindrom(str){
    for(let i=str.length-1; i>=0; i-- ){
       reversed = reversed + str[i]
       
    }
    if (reversed === str){
           console.log("It's Palindrom")
       }
       else{
        console.log("It's not Palindrome")
       }
}
checkPalindrom(strPara6)
console.log("-----------------------")
// 7. Check if a string starts and ends with the same character

function matchFirstAndLast(str){
    firstchar = str.charAt(0)
    lastchar = str.charAt(str.length -1)
    if(firstchar == lastchar){
        return'a string starts and ends with the same character'
    }else{
        return'a string starts and ends with the different character'
    }

}
matchSTR = matchFirstAndLast(strPara)
console.log(matchSTR)


// 8. Reverse the character in a string manually (without built-in functions)
function reverseString(str){
    reverseSTR = ''
    for(i=str.length-1; i>=0; i--){
        reverseSTR = reverseSTR +str[i]
    }
     return reverseSTR
}
reverseOutput = reverseString(strPara)
console.log(reverseOutput)

// 9. Remove all non-alphanumeric characters from string
alphaNumeric = "Hello, manishaveer2511@gmail.com"

function removeNonAlphaNumericChar(str){
    let result = ''
    for(i=0; i<str.length; i++){
        if((str[i]>="a" && str[i]<="z") || (str[i]>="A" && str[i]<="Z") || (str[i])<="0" && str[i]>="9"){
            result = result + str[i]
        }

    }
    return result
}
console.log(removeNonAlphaNumericChar(alphaNumeric))

// 10. Count the number of occurrences of a Specific Character
name="Manisha Sagar Dhaware"
function countNoOfOccurrenceChar(str, char){
    let count=0
    for(let i=0; i<str.length; i++){
        if (str[i] === char){
            count++
        }
    }
    return count
}
console.log(countNoOfOccurrenceChar(name, "a"))


// 11. convert the first word each in string to uppercase 
let str111 = "small efforts today lead to big achievements tomorrow";

function capitalizeWords(str) {
    let words = str.split(" ");  //make array
    let result = [];             //create empty array

    for (let i = 0; i < words.length; i++) { //iteration step by step
        result.push(
            words[i].charAt(0).toUpperCase() + words[i].slice(1)
        );
    }

    return result.join(" ");
}

console.log(capitalizeWords(str111));

// 12. Count the number of Vowels in a given string

let fullName = "Manisha Sagar Dhaware"
function countVowels(str){
    let count = 0 
    let vowels = "aeiouAEIOU"
    for(i=0; i<str.length; i++){
        
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}
console.log("count vowels : ", countVowels(fullName))