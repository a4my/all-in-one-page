let darkMode = localStorage.getItem('darkMode')

const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.querySelector('i').classList.remove('fa-moon')
    darkModeToggle.querySelector('i').classList.add('fa-sun')

    localStorage.setItem('darkMode', 'enabled')
} 

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.querySelector('i').classList.remove('fa-sun')
    darkModeToggle.querySelector('i').classList.add('fa-moon')

    localStorage.setItem('darkMode', null)
} 

if(darkMode === 'enabled') {
    enableDarkMode()
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        enableDarkMode()
        // console.log(darkMode)
    } else {
        disableDarkMode()
        // console.log(darkMode)
    }
})


