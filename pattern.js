//Square Pattern

// n=5
function sqrPattern(n) {

    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= n; j++) {
            line = line + " *"
        }
        console.log(line)
    }
}
sqrPattern(5)

console.log("=====================================")

//Right Angled Triangle

function rightAngledTringle(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += " *"
        }
        console.log(line)
    }
}
rightAngledTringle(5)

console.log("=====================================")

//Inverted Right Angled Tringle

function invertedRightAngledTringle(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = n; j >= i; j--) {
            line += "* "
        }
        console.log(line)

    }
}
invertedRightAngledTringle(5)

console.log("=====================================")

//Right side Inverted Right Angled Tringle
function rightSideRightAngledTringle(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= n - i; j++) {
            line += ' '
        }
        for (let k = 1; k <= i; k++) {
            line += "*"
        }
        console.log(line)
    }
}
rightSideRightAngledTringle(5)

console.log("============================")

//Pyramid

function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= n - i; j++) {
            line += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*"
        }
        console.log(line)

    }
}
printPyramid(5)

console.log("============================")
//Pyramid but space between star

function spacePyramid(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= n - i; j++) {
            line += " "
        }
        for(let k=1; k <= i; k++){
            line += "* "
        }
        console.log(line)
    }

}
spacePyramid(5)

console.log("============================")

//Diamond

function printDiamond(n){
    for(let i=1; i<=n; i++){
        let line = ''
        for(let j=1; j<=n-i; j++){
            line += " "
        }
        for(let k=1; k<=2*i-1; k++){
            line += "*"
        }
        console.log(line)
    }
    for(let i=n-1; i>=1; i--){
        let line = ''
        for(let j=1; j<=n-i; j++){
            line += " "
        }
        for(let k=1; k<=2*i-1; k++){
            line += "*"
        }
        console.log(line)
    }
}
printDiamond(5)