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

    const dateDisplay = document.querySelector('.date__container')
    let date = new Date()
    let day = date.getUTCDay()
    let number = date.getUTCDate()
    let month = date.getUTCMonth()
    let year = date.getUTCFullYear()

    if(day === 0) { day = 'Sunday'}
    if(day === 1) { day = 'Monday'}
    if(day === 2) { day = 'Tuesday'}
    if(day === 3) { day = 'Wednesday'}
    if(day === 4) { day = 'Thursday'}
    if(day === 5) { day = 'Friday'}
    if(day === 6) { day = 'Saturday'}
    
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




//////////////////////////////
// Wheather API

link = 'https://api.openweathermap.org/data/2.5/weather?q=cahors&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5'
var request = new XMLHttpRequest()
request.open('GET', link, true)
request.onload = function() {
    var obj = JSON.parse(this.response)
    // console.log(obj)
    document.getElementById('weather').innerHTML = obj.weather[0].description
    // document.getElementById('location').innerHTML = obj.name
    document.getElementById('temp').innerHTML = (obj.main.temp - 273.15).toFixed(1) + '°C'
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + '.png'
}
request.send()



//////////////////////////////////
// Crypto APIs

// BTC stock

let btcWS = new WebSocket('wss://stream.binance.com:9443/ws/btcgbp@trade')
const btcPrice = document.querySelector('.btc__price')
const btcPercent = document.querySelector('.btc__percent')

btcWS.onmessage = (e) => {
    let stockObject = JSON.parse(e.data)
    btcPrice.innerHTML = parseFloat(stockObject.p).toFixed(2)
    // btcPercent.innerHTML = parseFloat(stockObject.q).toFixed(2)
} 

// ETH stock

let ethWS = new WebSocket('wss://stream.binance.com:9443/ws/ethgbp@trade')
const ethPrice = document.querySelector('.eth__price')
const ethPercent = document.querySelector('.eth__percent')

ethWS.onmessage = (e) => {
    let stockObject = JSON.parse(e.data)
    ethPrice.innerHTML = parseFloat(stockObject.p).toFixed(2)
    // ethPercent.innerHTML = parseFloat(stockObject.q).toFixed(2)
} 

// DOGE stock

let dogeWS = new WebSocket('wss://stream.binance.com:9443/ws/dogegbp@trade')
const dogePrice = document.querySelector('.doge__price')
const dogePercent = document.querySelector('.doge__percent')

dogeWS.onmessage = (e) => {
    let stockObject = JSON.parse(e.data)
    dogePrice.innerHTML = parseFloat(stockObject.p).toFixed(2)
    // ethPercent.innerHTML = parseFloat(stockObject.q).toFixed(2)
} 

// ada stock

let adaWS = new WebSocket('wss://stream.binance.com:9443/ws/adagbp@trade')
const adaPrice = document.querySelector('.ada__price')
const adaPercent = document.querySelector('.ada__percent')

adaWS.onmessage = (e) => {
    let stockObject = JSON.parse(e.data)
    adaPrice.innerHTML = parseFloat(stockObject.p).toFixed(2)
    // ethPercent.innerHTML = parseFloat(stockObject.q).toFixed(2)
} 

///////////////////////////////
// Refresh page 

// window.setInterval('refresh()', 3600000); 

//   // Refresh or reload page after an hour
//   function refresh() {
//     window .location.reload();
// }

