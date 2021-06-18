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
// console.log(taskNumber)

// Functions
function addTask() {

        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task__container')
    
        const taskInput = document.createElement('p')
        taskInput.innerText = newTask.value
    
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
        // deleteBtn.setAttribute('onclick', 'deleteTask()')
        btnsContainer.appendChild(deleteBtn)
    
        taskContainer.appendChild(btnsContainer)
        taskList.appendChild(taskContainer)
    
        newTask.value = ''
}

function deleteTask(e) {
    // console.log(e.target)
    const item = e.target

    if(item.classList[0] === 'deleteBtn') {
        const taskToRemove = item.parentElement.parentElement
        taskToRemove.remove()
        taskNumber--
        newTask.value = ''
    }
    // console.log(taskNumber)

}

//Events

addBtn.addEventListener('click', () => {
   if(newTask.value.trim() != '') {
       if(taskNumber < 5) {
           addTask()
           taskNumber++
       } else {
           newTask.value = 'No more than 5 tasks!'
           setTimeout(function(){
               newTask.value = ''
           }, 1500)
       }
    //    console.log(taskNumber)
   }
})

taskList.addEventListener('click', deleteTask)