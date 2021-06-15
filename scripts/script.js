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


///////////////////////////////
// Music Player

let allMusic = [
    {
        name: 'Heart On The Run',
        artist: 'Damn Dice',
        img: 'music-1',
        src: 'music-1' 
    },
    {
        name: 'Caught In The Ride',
        artist: 'Damn Dice',
        img: 'music-2',
        src: 'music-2' 
    },
    {
        name: 'Stories I Write',
        artist: 'Damn Dice',
        img: 'music-3',
        src: 'music-3' 
    },
    {
        name: 'What Now?',
        artist: 'Damn Dice',
        img: 'music-2',
        src: 'music-4' 
    },
    {
        name: 'Fire Below',
        artist: 'Damn Dice',
        img: 'music-3',
        src: 'music-5' 
    },
    {
        name: 'Home',
        artist: 'Damn Dice',
        img: 'music-2',
        src: 'music-6' 
    },
    {
        name: 'Behind You',
        artist: 'Damn Dice',
        img: 'music-3',
        src: 'music-7' 
    },
    {
        name: 'Find Me',
        artist: 'Damn Dice',
        img: 'music-3',
        src: 'music-8' 
    },
    {
        name: 'Power',
        artist: 'Damn Dice',
        img: 'music-2',
        src: 'music-9' 
    },
    {
        name: 'Leaving With Nothing',
        artist: 'Damn Dice',
        img: 'music-3',
        src: 'music-10' 
    },
]

// Elements

const wrapper = document.querySelector('.music__card')
musicImg = wrapper.querySelector('.img-area img')
musicName = wrapper.querySelector('.song-details .name')
musicArtist = wrapper.querySelector('.song-details .artist')
mainAudio = wrapper.querySelector('#main-audio')
playPauseBtn = wrapper.querySelector('.play-pause')
prevBtn = wrapper.querySelector('#prev')
nextBtn = wrapper.querySelector('#next')
progressArea = wrapper.querySelector('.progress-area')
progressBar = wrapper.querySelector('.progress-bar')
repeatBtn = wrapper.querySelector('#repeat-plist')
musicList = wrapper.querySelector('.music-list')
showMoreBtn = wrapper.querySelector('#more-music')
hideMusicBtn = musicList.querySelector('#close')
ulTag = wrapper.querySelector('ul')

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1)

// Functions

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name
    musicArtist.innerText = allMusic[indexNumb - 1].artist
    musicImg.src = `img/${allMusic[indexNumb - 1].img}.jpg`
    mainAudio.src = `audio/${allMusic[indexNumb - 1].src}.mp3`
}

function playMusic() {
    wrapper.classList.add('paused')
    playPauseBtn.querySelector('i').classList.remove('fa-play')
    playPauseBtn.querySelector('i').classList.add('fa-pause')
    mainAudio.play()
}

function pauseMusic() {
    wrapper.classList.remove('paused')
    playPauseBtn.querySelector('i').classList.remove('fa-pause')
    playPauseBtn.querySelector('i').classList.add('fa-play')
    mainAudio.pause()
}

function nextSong() {
    musicIndex++
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

function prevSong() {
    musicIndex--
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()

}

////////////////////////////////////////////////
// Events

///////////////////////
// MUSIC PLAYER

window.addEventListener('load', () => {
    loadMusic(musicIndex)
    playingNow()
})

playPauseBtn.addEventListener('click', () => {
    const isMusicPaused = wrapper.classList.contains('paused')
    isMusicPaused ? pauseMusic() : playMusic()
    playingNow()
})

nextBtn.addEventListener('click', () => {
    nextSong()
})

prevBtn.addEventListener('click', () => {
    prevSong()
})

mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = `${progressWidth}%`

    let musicCurrentTime = wrapper.querySelector('.current')
    let musicDuration = wrapper.querySelector('.duration')

    mainAudio.addEventListener('loadeddata', () => {

        // Update song total duration
        let audioDuration = mainAudio.duration
        let totalMin = Math.floor(audioDuration / 60)
        let totalSec = Math.floor(audioDuration % 60)
        if(totalSec < 10) {
            totalSec = `0${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`

    })

    // Update playing current song time

    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if(currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`
})

//click on the progress bar to update song current time
progressArea.addEventListener('click', (e) => {
    let progressWidthVal = progressArea.clientWidth
    let clickedOffSetX = e.offsetX
    let songDuration = mainAudio.duration

    mainAudio.currentTime = (clickedOffSetX / progressWidthVal) * songDuration
    playMusic()
})


// repeat and shuffle btns - icon changes
let clickedRepeat = 0
repeatBtn.addEventListener('click', () => {
    clickedRepeat++
    if(clickedRepeat === 0) {
        repeatBtn.classList.remove('fa-exchange-alt')
        repeatBtn.classList.remove('fa-random')
        repeatBtn.classList.add('fa-redo')
    }
    if(clickedRepeat === 1) {
        repeatBtn.classList.remove('fa-random')
        repeatBtn.classList.remove('fa-redo')
        repeatBtn.classList.add('fa-exchange-alt')
    }
    if(clickedRepeat === 2) {
        repeatBtn.classList.remove('fa-redo')
        repeatBtn.classList.remove('fa-exchange-alt')   
        repeatBtn.classList.add('fa-random')
    }
    if(clickedRepeat > 2) {
        clickedRepeat = 0
        repeatBtn.classList.remove('fa-exchange-alt')
        repeatBtn.classList.remove('fa-random')
        repeatBtn.classList.add('fa-redo')
    }
})


// repeat and shuffle options when a song ends


mainAudio.addEventListener('ended', () => {
    if(clickedRepeat === 0) {
        nextSong()
    }
    if(clickedRepeat === 1) {
        mainAudio.currentTime = 0
        loadMusic(musicIndex)
        playMusic()
    }
    if(clickedRepeat === 2) {
        let randomIndex = Math.floor((Math.random() * allMusic.length) + 1)
        musicIndex = randomIndex
        loadMusic(musicIndex)
        playMusic()
        playingNow()
    }
})

// Music List btns

showMoreBtn.addEventListener('click', () => {
    musicList.classList.toggle('show')
})

hideMusicBtn.addEventListener('click', () => {
    showMoreBtn.click()
})


// Music List li

for (let i = 0; i < allMusic.length; i++) {
    let liTag = `<li li-index='${i + 1}'>
                <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                </div>
                <audio class="${allMusic[i].src}" src="audio/${allMusic[i].src}.mp3"></audio>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
            </li>`    
    ulTag.insertAdjacentHTML('beforeend', liTag)

    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`)
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`)

    liAudioTag.addEventListener('loadeddata', () => {
        let audioDuration = liAudioTag.duration
        let totalMin = Math.floor(audioDuration / 60)
        let totalSec = Math.floor(audioDuration % 60)
        if(totalSec < 10) {
            totalSec = `0${totalSec}`
        }
        liAudioDuration.innerText = `${totalMin}:${totalSec}`
        liAudioDuration.setAttribute('t-duration', `${totalMin}:${totalSec}`)
    })
}

// Play song wwhen song from the music list is clicked on

const allLiTags = ulTag.querySelectorAll('li')

function playingNow() {
    for (let j = 0; j < allLiTags.length; j++) {
        let audioTag = allLiTags[j].querySelector('.audio-duration')
        if(allLiTags[j].classList.contains('playing')) {
            allLiTags[j].classList.remove('playing')
            let adDuration = audioTag.getAttribute('t-duration')
            audioTag.innerText = adDuration
        }

        if(allLiTags[j].getAttribute('li-index') == musicIndex) {
            allLiTags[j].classList.add('playing')
            audioTag.innerText = 'Playing'
        }
    
        allLiTags[j].setAttribute('onclick', 'clicked(this)')
    }
}

function clicked(element) {
    let getLiIndex = element.getAttribute('li-index')
    musicIndex = getLiIndex
    loadMusic(musicIndex)
    playMusic()
    playingNow()
}

