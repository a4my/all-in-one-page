/////////////
//Google search bar

//Variables

const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', function () {
    window.open('https://google.com/search?q=' + searchInput.value)
    searchInput.value = ''
})