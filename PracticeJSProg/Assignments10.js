
// To Do List Task
const taskInputElmt = document.getElementById("taskInput")
const addBtnElmt = document.getElementById("addBtn")
const taskListElmt = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function displayTasks() {
    taskListElmt.innerHTML = ""

    tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.className = "task"

        // Create checkbox 
        const checkbox = document.createElement("input") 
        checkbox.type = "checkbox" 
        checkbox.checked = task.completed

        const span = document.createElement("span")
        span.className = "task-text"
        span.textContent = task.text

        if (task.completed) {
            span.classList.add("completed")
        }

        // Checkbox click 
        checkbox.addEventListener("change", () => { 
            tasks[index].completed = checkbox.checked 
            saveTasks() 
            displayTasks() })

        //complete task
        // span.addEventListener("click", () => {
        //     tasks[index].completed = !tasks[index].completed

        //     saveTasks()
        //     displayTasks()
        // })

        //Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.className = "delete-btn"

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1)

            saveTasks()
            displayTasks()
        })

        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(deleteBtn)

        taskListElmt.appendChild(li)
    })
}

function addTask() {
    const taskText = taskInputElmt.value.trim()

    if (taskText === "") {
        alert("Please enter a task")
        return
    }

    const newTask = {
        text: taskText,
        completed: false
    }

    tasks.push(newTask)

    saveTasks()

    taskInputElmt.value = ""

    displayTasks()
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

addBtnElmt.addEventListener("click", addTask)

taskInputElmt.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})



displayTasks()

//weather card
async function fetchData(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0566ebcfc613423ea774300e0669f3ba&units=metric`)
    .then(res=>res.json())
    .then(data=>renderInfo(data))
    .catch(error=>console.log(error))
}
function renderInfo(data){
    const sunrise = new Date(data.sys.sunrise * 1000)
    const sunset = new Date(data.sys.sunset * 1000)
    const sunriseTime = sunrise.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })

    const sunsetTime = sunset.toLocaleTimeString([], {
        hour:"2-digit",
        minute: "2-digit"
    })
    document.querySelector("#infoWeather").innerHTML = `
        <p><b>${data.name}</b> <i>${data.sys.country}</i></p>
        <p>Temp : ${data.main.temp} <sup>0</sup>C</p>
        <p><span>${data.weather[0].main}</span>
        :
        <span>${data.weather[0].description}</span></p>
        <img 
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img" />
        <p> Sunrise : ${sunriseTime}</p>
        <p> Sunset : ${sunsetTime}</p>
    `
}
function displayInfo(){
    const city = document.querySelector("#cityName").value
    fetchData(city)
}

// 0566ebcfc613423ea774300e0669f3ba
document.querySelector("#btnDisplay").addEventListener("click", displayInfo)
//Password strength checker

const password = document.getElementById("password");
const strength = document.getElementById("strength");

const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const special = document.getElementById("special");

password.addEventListener("input", () => {
  const value = password.value;

  // Conditions
  const hasLength = value.length >= 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  // Update checklist
  length.style.color = hasLength ? "green" : "red";
  uppercase.style.color = hasUppercase ? "green" : "red";
  lowercase.style.color = hasLowercase ? "green" : "red";
  number.style.color = hasNumber ? "green" : "red";
  special.style.color = hasSpecial ? "green" : "red";

  // Count conditions
  const score = [
    hasLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecial
  ].filter(Boolean).length;

  // Strength
  if (value === "") {
    strength.textContent = "";
  } else if (score <= 2) {
    strength.textContent = "Weak Password";
    strength.style.color = "red";
  } else if (score <= 4) {
    strength.textContent = "Medium Password";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strong Password";
    strength.style.color = "green";
  }
});