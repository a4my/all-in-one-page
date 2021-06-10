///////////////////////
// Time

setInterval(function() {
    const clock = document.querySelector('.clock__container')
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hour = time.getHours()
    let day = 'AM'

    if(hour > 12) {
        day = 'PM'
        hour = hour -12
    }

    if(hour == 0) { hour = 12}
    
    if(sec < 10) {sec = '0' + sec}
        
    if(min < 10) { min = '0' + min}

    if(hour < 10) { hour = '0' + hour}

    clock.textContent = hour + ':' + min + ':' + sec + ' ' + day
})


///////////////////////
// Time

// setInterval(function() {
    const dateDisplay = document.querySelector('.date__container')
    let date = new Date()
    let day = date.getUTCDay()
    let number = date.getUTCDate()
    let month = date.getUTCMonth()
    let year = date.getUTCFullYear()

    if(day === 1) { day = 'Monday'}
    if(day === 2) { day = 'Tuesday'}
    if(day === 3) { day = 'Wednesday'}
    if(day === 4) { day = 'Thursday'}
    if(day === 5) { day = 'Friday'}
    if(day === 6) { day = 'Saturday'}
    if(day === 7) { day = 'Sunday'}
    
    if(month === 0) { month = 'January'}
    if(month === 1) { month = 'February'}
    if(month === 2) { month = 'March'}
    if(month === 3) { month = 'April'}
    if(month === 4) { month = 'May'}
    if(month === 5) { month = 'June'}
    if(month === 6) { month = 'July'}
    if(month === 7) { month = 'August'}
    if(month === 8) { month = 'September'}
    if(month === 9) { month = 'October'}
    if(month === 10) { month = 'November'}
    if(month === 11) { month = 'December'}

    dateDisplay.textContent = day + ' ' + number + ' ' + month + ' ' + year
    console.log(number)
// })