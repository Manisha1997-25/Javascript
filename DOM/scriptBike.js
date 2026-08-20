const imgCardElmt =document.querySelector("#imgCard")
const badgeColorElmt = document.querySelector("#badgeColor")
const blueBTNElmt =document.querySelector("#blueBTN")
const redBTNElmt =document.querySelector("#redBTN")
const yellowBTNElmt =document.querySelector("#yellowBTN")
const btnViewElmt =document.querySelector("#btnView")


function changeToRed(){
    badgeColorElmt.classList.remove("bg-primary")
    badgeColorElmt.classList.add("bg-danger")
    badgeColorElmt.textContent = "red"

    btnViewElmt.classList.remove("btn-primary")
    btnViewElmt.classList.add("btn-danger")

    imgCardElmt.setAttribute("src", "./red.jpg")
}
redBTNElmt.addEventListener("click", changeToRed)

function changeToYellow(){
    badgeColorElmt.classList.remove("bg-danger")
    badgeColorElmt.classList.add("bg-warning")
    badgeColorElmt.textContent = "Yellow"

    btnViewElmt.classList.remove("btn-danger")
    btnViewElmt.classList.add("btn-warning")

    imgCardElmt.setAttribute("src", "./yellow.jpg")
}
yellowBTNElmt.addEventListener("click", changeToYellow)

function changeToBlue(){
    badgeColorElmt.classList.remove("bg-warning")
    badgeColorElmt.classList.remove("bg-danger")
    badgeColorElmt.classList.add("bg-primary")
    badgeColorElmt.textContent = "Blue"

    btnViewElmt.classList.remove("btn-warning")
    btnViewElmt.classList.remove("btn-danger")
    btnViewElmt.classList.add("btn-primary")

    imgCardElmt.setAttribute("src", "./blue.jpg")
}

blueBTNElmt.addEventListener("click", changeToBlue)