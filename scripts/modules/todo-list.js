const tasks = []
const newTask = document.querySelector('#addTask')
const addBtn = document.querySelector('#addBtn')

let taskList = document.querySelector('.task__list')

function addTask() {
    if(newTask.value.trim() != '') {
        tasks.push(newTask.value.trim())
        console.log(tasks)
        displayTask()
        newTask.value = ''
    }
}

function displayTask() {
    taskList.innerHTML = "" 

    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += `
        <div class="task__container">
            <p>${tasks[i]}</p>
            <div class="btns">
                <button><i class="fas fa-check"></i></button>
                <button><i class="fas fa-trash"></i></button>
            </div>
        </div>
        `  
    }  
}



addBtn.addEventListener('click', () => {
    if(tasks.length <= 4 ) {
        addTask()
    } else {
        newTask.value = 'No more than 5 tasks!'
    }
})