const inputElement = document.getElementById("inputPara")
const resultElement = document.getElementById("result")
const inputValue = inputElement.value

// 1. Convert into Upper Case
function convertToUpperCase(){
    const inputValue = inputElement.value
    outputText = inputValue.toUpperCase()
    resultElement.textContent = outputText
}


// 2. Convert into Lower Case
function convertToLowerCase(){
    const inputValue = inputElement.value
    outputText = inputValue.toLowerCase()
    resultElement.textContent = outputText
}


// 3. Convert into Camel Case
function camelCase(){
   const inputValue = inputElement.value
   let words = inputValue.toLowerCase().trim().split(" ")
   let result = words[0]
   
   for (let i=1; i<words.length; i++){
    words[i].charAt(0).toUpperCase()+words[i].slice(1)
   }

   resultElement.textContent = outputText
}

// 4. Extra First Word
function extractFirstWord(){
    const inputValue = inputElement.value
    const outputText = inputValue.split(" ")[0]
    resultElement.textContent = outputText
}

// 5. Count No of Words
function countNoOfWords(){
    const inputValue = inputElement.value
    let words = inputValue.trim().split(/\s+/)
    if (inputValue.trim()=== ""){
        outputText = 0
    }
    else{
        outputText = words.length
    }
    resultElement.textContent = "Count no of words : "+outputText

}

// 6. Count Vowels
function countVowels(){
    const inputValue = inputElement.value

    count = 0
    vowels = 'aeiouAEIOU'

    len = inputValue.length

    for(i=0; i<len; i++){
        inputValue[i]

        if(vowels.includes(inputValue[i])){
            count++
        }
    }

    resultElement.textContent = "vowels : "+ count
}


// 7. Count Consonants
function countConsonents(){
    const inputValue = inputElement.value

    let count = 0
    const vowels = 'aeiouAEIOU'

    len = inputValue.length

    for(let i=0; i<len; i++){
       let ch = inputValue[i]

        if(ch.match(/[a-zA-Z]/) && !vowels.includes(ch)){
            count++
        }
    }

    resultElement.textContent = "consonents count : "+ count
}


// 8. Extra Special Characters
function extraSpecialCharacters(){
    const inputValue = inputElement.value
    let special = inputValue.match(/[^a-zA-Z0-9\s]/g)
    outputText = special ? special.join("") : "No Special Characters"

    resultElement.textContent = outputText
}

// 9. Check palindrome
function checkPalindrome(){
    const inputValue = inputElement.value

    reverseSTR = ''
    for(let i=inputValue.length-1; i>=0; i--){
        reverseSTR = reverseSTR + inputValue[i]
    }
    console.log(reverseSTR)
    if (inputValue == reverseSTR){
        outputText = "Yes it's Palindrom " +reverseSTR
    }
    else{
       outputText = "It is not Palindrom"
    }
    resultElement.textContent = outputText

}

// 10. Count Spaces

function countSpace(){
    const inputValue = inputElement.value
    let count = 0
    for (let ch of inputValue)
        if (ch === " "){
            count++
        }
    

resultElement.textContent = "Count Space : "+count

}

//11. Replace Spaces With Hyphens

function replaceSpaces(){
    const inputValue = inputElement.value
    outputText = inputValue.replaceAll(" ", "_")

resultElement.textContent = outputText
}

// 12. Sort words Alphabetically

function sortWordsAlpha(){
     const inputValue = inputElement.value
     let word=inputValue.trim().split(/\s+/)
     word.sort()
     outputText = word.join(" ")

     resultElement.textContent = outputText

    }




