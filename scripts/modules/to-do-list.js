////////////////////////
//// To-do List

//Variables
const newTask = document.querySelector('#addTask')
const addBtn = document.querySelector('#addBtn')
const taskList = document.querySelector('.task__list')

let taskNumber = 0

if(taskNumber < 0) {
    taskNumber = 0
} else if(taskNumber > 5) {
    taskNumber = 5
}
console.log(taskNumber)

// Functions
function addTask() {

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task__container')
        taskContainer.classList.add('active-task')
    
        const taskInput = document.createElement('p')
        taskInput.innerText = newTask.value
    
        taskContainer.appendChild(taskInput)

        // Add to local storage 
        saveLocalTasks(newTask.value)

        const btnsContainer = document.createElement('div')
        btnsContainer.classList.add('btns')
    
        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<i class="fas fa-check"></i>'
        checkBtn.classList.add('checkBtn')
        btnsContainer.appendChild(checkBtn)
    
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        deleteBtn.classList.add('deleteBtn')

        btnsContainer.appendChild(deleteBtn)
    
        taskContainer.appendChild(btnsContainer)
        taskList.appendChild(taskContainer)
    
        newTask.value = ''
}

function clickBtns(e) {
    // console.log(e.target)
    const item = e.target

    if(item.classList[0] === 'deleteBtn') {
        const taskToRemove = item.parentElement.parentElement
        taskToRemove.remove()
        removeLocalTasks(taskToRemove)
        newTask.value = ''
    }

    if(item.classList[0] === 'checkBtn') {
        const taskToRemove = item.parentElement.parentElement
        taskToRemove.classList.toggle('completed')
        
    }
    console.log(taskNumber)
}

function saveLocalTasks(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    taskNumber++
}

function getLocalTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task__container')
        taskContainer.classList.add('active-task')
    
        const taskInput = document.createElement('p')
        taskInput.innerText = task
    
        taskContainer.appendChild(taskInput)
    
        const btnsContainer = document.createElement('div')
        btnsContainer.classList.add('btns')
    
        const checkBtn = document.createElement('button')
        checkBtn.innerHTML = '<i class="fas fa-check"></i>'
        checkBtn.classList.add('checkBtn')
        btnsContainer.appendChild(checkBtn)
    
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        deleteBtn.classList.add('deleteBtn')

        btnsContainer.appendChild(deleteBtn)
    
        taskContainer.appendChild(btnsContainer)
        taskList.appendChild(taskContainer)
        
        taskNumber++
    })

    console.log(taskNumber)

}   

function removeLocalTasks(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    const taskIndex = task.children[0].innerText
    tasks.splice(tasks.indexOf(taskIndex), 1)
    taskNumber--
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


//Events

addBtn.addEventListener('click', () => {
   if(newTask.value.trim() != '') {
       if(taskNumber < 5) {
           addTask()
       } else {
           newTask.value = 'No more than 5 tasks!'
           setTimeout(function(){
               newTask.value = ''
           }, 1500)
       }
       console.log(taskNumber)
   }
})

taskList.addEventListener('click', clickBtns)

document.addEventListener('DOMContentLoaded', getLocalTasks)