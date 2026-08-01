firstName = 'Manisha';
lastName  = "Veer";

// console.log(firstName + " " +lastName);
name = firstName + " " + lastName;

console.log(name)

console.log(name.length)
console.log()



str1 = "Hello"
str2 = "world"

msg = str1.concat(" ", str2, "!!!")
console.log(msg)

index1 = msg.indexOf("Hello")
console.log(index1)

index2 = msg.indexOf("hello")
console.log(index2)

console.log(msg.indexOf('o'))
console.log(msg.lastIndexOf('o'))


// returns boolean value true or false
console.log(msg.includes('Hello'))
console.log(msg.includes('iudftg'))

// startsWith and endsWith
console.log(msg.startsWith("Hello"))
console.log(msg.startsWith("hello"))

console.log(msg.endsWith("!!"))
console.log(msg.endsWith("world!!!"))

//slice(), substring(), substr()

substr = msg.slice(0, 4)
console.log(substr)

substr1 = msg.slice(1, 7)
console.log(substr1)

substr3 = msg.substring(0, 4)
console.log(substr3)
substr4 = msg.substring(1, 7)
console.log(substr4)

substr5 = msg.substr(0, 4)
console.log(substr5)
substr6 = msg.substr(1, 7)
console.log(substr6)

//start with specified index and go to it in the end of length

substr7 =msg.substr(5)
console.log(substr7)
substr8 =msg.substr(5)
console.log(substr8)
substr9 =msg.slice(5)
console.log(substr9)

// trim()  trimStart()  trimEnd()

msg1 = "       Hello              "
console.log(msg1.length)
console.log(msg1.trim().length)
console.log(msg1.trimStart().length)
console.log(msg1.trimEnd().length)

//replace()  replaceAll()
st = `I like to learn javascript`

st1 = st.replace('like', 'love')
console.log(st1)
console.log(st)
msg3 = "It's okay if you don't like computer Programming. It's smart people thing anyway."
msg4 = (msg3.replaceAll("It's", "Its"))
console.log(msg4)


//split()
