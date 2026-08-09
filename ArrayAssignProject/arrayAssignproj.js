// To Do List
let toDos = ["Projet1", "Project2"]

function renderToDos(){
    document.getElementById("lists").innerHTML = toDos.map((task, i)=>`
                        <li class="mb-2">
                        <b>${task}</b>
                        <button class="btn btn-danger" onclick="deleteTask(${i})"> Delete </button>
                        </li>
    `).join("")
}

renderToDos()

function addNewTask(){
    inputTaskElmt = document.getElementById("inputTask")
    newTask = inputTaskElmt.value
    toDos.push(newTask)
    // console.log(toDos)
    renderToDos()
    inputTaskElmt = ''
}

function clearAll(){
    toDos = []
    renderToDos()

}

function deleteTask(index){
    toDos.splice(index, 1)
    renderToDos()
}

//Students Marks Calculator
let marks = []
function addMarks(){
    let countElmt = document.getElementById("inputMarks")
    let newElmt = Number(countElmt.value)
    if(countElmt.value === ''){
        alert("Please enter marks")
        return
    }
    marks.push(newElmt)
    countElmt.value = ''
}

function calculate(){
    if(marks.length === 0){
        alert("Please add marks first.")
        return
    }
    let sum = 0
    for( let i = 0; i<marks.length; i++){
        sum += marks[i]
    }

    let avg =sum/marks.length
    let highest =Math.max(...marks)
    let lowest =Math.min(...marks)
    document.getElementById("total").innerHTML =`Total Marks :${sum}`
    document.getElementById("average").innerHTML =`Average Marks :${avg}`
    document.getElementById("highest").innerHTML =`Highest Marks :${highest}`
    document.getElementById("lowest").innerHTML =`Lowest Marks :${lowest}`
}

function reset(){
    marks=[]
    document.getElementById("inputMarks").value = ''
    document.getElementById("total").innerHTML = "Total Marks : 0"
    document.getElementById("average").innerHTML = "Average Marks :0"
    document.getElementById("highest").innerHTML = "Highest Marks :0"
    document.getElementById("lowest").innerHTML = "Lowest Marks :0"
}

// Search  in an Array
let vehicles = ["Audi", "Punch", "Scorpio", "Tigor",]
function addSearch(){
    let search = document.getElementById("inputSearch").value 
    let result = vehicles.map((vehicle) => {
       if(vehicle.toLowerCase() === search.toLowerCase()){
            return `<p>${vehicle}</p>`
       }else{
            return ""
       }
           
    }).join("")

    if(result === ""){
        result = `<p>No Matches Found</p>`
    }

    document.getElementById("result").innerHTML = result
}

//Filter Even and Odd Numbers
let numbers = []
function addNumbers(){
    let inputNmbr = document.getElementById("inputNumbers")
    let num = Number(inputNmbr.value)
    if(inputNmbr.value === ''){
        alert("Please enter marks")
        return
    }
    numbers.push(num)
    inputNmbr.value = ''
}
function showEven(){
    let evenNumbr = numbers.filter((num)=>{
        return num%2 ===0
    })
    
    document.getElementById("evenNumbers").innerHTML = evenNumbr.join(", ")
}

function showOdd(){
    let oddNumbr = numbers.filter((num)=>{
        return num%2 !==0
    })

        document.getElementById("oddNumbers").innerHTML = oddNumbr.join(", ")

}

function clearNumbers(){
    numbers = []

    document.getElementById("evenNumbers").innerHTML = "No numbers added"
    document.getElementById("oddNumbers").innerHTML = "No numbers added"

}




//Sort Name 
let nameArray = []
let sortedNames = []
function addName(){
    let inputNameElmt = document.getElementById("inputName")
    let newName = inputNameElmt.value
    nameArray.push(newName)


    document.getElementById("unsortedName").innerHTML = nameArray.map((name)=>`
    <span>${name}</span>
    `)
    inputNameElmt.value = ''

}

function sortArray(){
    let sortedNames = nameArray.sort()
    document.getElementById("sortedName").innerHTML = sortedNames.map((name)=>`
    <span>${name}</span>
    `)
    inputNameElmt.value = ''
    
}
function clearNames(){
    let nameArray = []
    let sortedNames = []
    document.getElementById("unsortedName").innerHTML = ''
    document.getElementById("sortedName").innerHTML = ''
    
}





