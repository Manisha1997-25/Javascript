const tasks = [
{
    id:101,
    title:"study basic of Programming",
    description:"Watch shorts or reels on Programming",
    status:"Pending"
},
{
    id:101,
    title:"study Advanced css",
    description:"For interview Preparations",
    status:"Completed"
}]

const titleElmt = document.getElementById("taskTitleInput")
const descriptionElmt = document.getElementById("taskDescriptionInput")
function renderTasks(ts){
    document.getElementById("renderTasks").innerHTML = ts.map((tsk, i)=>`
                            <tr>
                                <td>${i + 1}</td>
                                <td>${tsk.title}</td>
                                <td>${tsk.description}</td>
                                <td>${tsk.status}</td>
                                <td>
                                   <button class="btn btn-success" title="Edit task" 
                                   onclick="EditTask(${tsk.id})">
                                   <i class="fa-solid fa-pen-to-square"></i>
                                   </button>
                                   <button class="btn btn-danger" title="Delete task" 
                                   onclick="deleteTask(${tsk.id})">
                                   <i class="fa-solid fa-trash-can"></i>
                                   </button> 
                                </td>
                            </tr>
    `).join('')
}

function addNewTask(){
    titleInput =titleElmt.value
    descriptionInput = descriptionElmt.value

    const newTask = {
        id:Date.now(),  //return in milisecond
        title:titleInput,
        description:descriptionInput,
        status:"Pending"

    }
    

    const getFromLocalTasks = getFromLocal()
    getFromLocalTasks.push(newTask)
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)

    titleElmt.value = ''
    descriptionElmt.value =''
}

function deleteTask(ID){
   
    const getFromLocalTasks =getFromLocal()
    index = getFromLocalTasks.findIndex((t)=> t.id == ID)
    if(index == -1){
        alert("Task Not Found")
    }else{
        getFromLocalTasks.splice(index, 1)
    }
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)
}

function EditTask(ID){
    const getFromLocalTasks =getFromLocal()
    index = getFromLocalTasks.findIndex((t)=> t.id == ID)
    if(index == -1){
        alert("Task Not Found")
    }else{
        if(getFromLocalTasks[index].status == "Pending"){
            getFromLocalTasks[index].status = "Completed"
        }else{
            getFromLocalTasks[index].status = "Pending"
        }
    }
    saveToLocal(getFromLocalTasks)
    renderTasks(getFromLocalTasks)
}

function saveToLocal(ts=tasks){
    localStorage.setItem("b87Tasks", JSON.stringify(ts))
}

function getFromLocal(){
    return JSON.parse(localStorage.getItem("b87Tasks"))
}

window.addEventListener('load', () =>{
    firstGetFromLocal = getFromLocal()
    if(!firstGetFromLocal){
        saveToLocal()
    }
    renderTasks(firstGetFromLocal)
})