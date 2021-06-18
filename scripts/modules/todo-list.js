////////////////////////
//// To-do List

//Variables
const tasks = []
const newTask = document.querySelector('#addTask')
const addBtn = document.querySelector('#addBtn')
const delBtn = document.querySelector('.deleteBtn')

let taskList = document.querySelector('.task__list')


// Functions
function addTask() {
    if(newTask.value.trim() != '') {
        tasks.push(newTask.value.trim())
        displayTask()
        newTask.value = ''
    }
}

function displayTask() {
    taskList.innerHTML = "" 

    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += `
        <div id="task-${i}" class="task__container">
            <p>${tasks[i]}</p>
            <div class="btns">
                <button><i class="fas fa-check"></i></button>
                <button class="deleteBtn" onclick="deleteTask()"><i class="fas fa-trash"></i></button>
            </div>
        </div>
        `  
    }  
}

function deleteTask(index) {
    // console.log('clicked')

    // for (let index = 0; index < tasks.length; index++) {
    //     const element = document.getElementById(`task-${index}`)
    //     // console.log(element)
    //     // tasks.splice(element[index], 1)
    //     element.remove(element)
    //     // displayTask()
    // }
    
    tasks.splice(index, 1)
    console.log(tasks)
    displayTask()
}

//Events

addBtn.addEventListener('click', () => {
    if(tasks.length <= 4 ) {
        addTask()
    } else {
        newTask.value = 'No more than 5 tasks!'
    }
})


