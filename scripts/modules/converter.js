/////////////////////////
/////////CURRENCY CONVERTER

const selectedCurrency = document.querySelectorAll('.currency')
const fromAmount = document.querySelector('#from-amount')
const toAmount = document.querySelector('#to-amount')

fetch('https://api.frankfurter.app/currencies')
.then((data) => data.json())
.then((data) => {
    display(data)
})

function display(data) {
    const entries = Object.entries(data)
    // console.log(Object.entries(data))
    for (let i = 0; i < entries.length; i++) {
        selectedCurrency[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        selectedCurrency[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        
    }
}

fromAmount.addEventListener('keyup', () => {
    let currency1 = selectedCurrency[0].value
    let currency2 = selectedCurrency[1].value
    let amountToConvert = fromAmount.value
    
    if(currency1 != currency2) {
        convert(currency1, currency2, amountToConvert)
    }else {
        alert("Please choose 2 different currencies!")
    }
})

function convert(currency1, currency2, amountToConvert) {
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${amountToConvert}&from=${currency1}&to=${currency2}`)
    .then((val) => val.json())
    .then((val) => {
        // console.log(Object.values(val.rates)[0])
        toAmount.value = (Object.values(val.rates)[0]).toFixed(2)
    })
}


/////////////////////////
/////////WEIGHT CONVERTER

const fromWeight = document.querySelector('#from-weight')
const toWeight = document.querySelector('#to-weight')
const selectedFromMass = document.querySelector('#fromMasses')
const selectedToMass = document.querySelector('#toMasses') 

function convertMass() {
    if(selectedFromMass.value == 'kg') {
        toWeight.value = (fromWeight.value * 2.205).toFixed(2);
    } else {
        toWeight.value = (fromWeight.value / 2.205).toFixed(2);
    }
}

// Events


fromWeight.addEventListener('keyup', () => {
    convertMass()
})

selectedFromMass.addEventListener('change', () => {
    if(selectedFromMass.value == 'kg') {
        selectedToMass.value = 'lbs'
    } else if(selectedFromMass.value == 'lbs')  {
        selectedToMass.value = 'kg'
    } 
})

selectedToMass.addEventListener('change', () => {
    if(selectedToMass.value == 'kg') {
        selectedFromMass.value = 'lbs'
    } else if (selectedToMass.value == 'lbs')  {
        selectedFromMass.value = 'kg'
    }
})

/////////////////////////
/////////height / length CONVERTER

const fromHeight = document.querySelector('#from-height')
const toHeight = document.querySelector('#to-height')
const selectedFromLength = document.querySelector('#from-length')
const selectedToLength = document.querySelector('#to-length') 

function convertHeight() {
    if(selectedFromLength.value == 'meter') {
        toHeight.value = (fromHeight.value * 3.281).toFixed(2);
    } else {
        toHeight.value = (fromHeight.value / 3.281).toFixed(2);
    }
}

// Events


fromHeight.addEventListener('keyup', () => {
    convertHeight()
})

selectedFromLength.addEventListener('change', () => {
    if(selectedFromLength.value == 'meter') {
        selectedToLength.value = 'feet'
    } else if(selectedFromLength.value == 'feet')  {
        selectedToLength.value = 'meter'
    } 
})

selectedToLength.addEventListener('change', () => {
    if(selectedToLength.value == 'meter') {
        selectedFromLength.value = 'feet'
    } else if (selectedToLength.value == 'feet')  {
        selectedFromLength.value = 'meter'
    }
})


/////////////////////////
///////// Km / Feet CONVERTER

const fromDistance = document.querySelector('#from-distance')
const toDistance = document.querySelector('#to-distance')
const selectedFromDistance = document.querySelector('#fromDistance')
const selectedToDistance = document.querySelector('#toDistance') 

function convertDistance() {
    if(selectedFromDistance.value == 'km') {
        toDistance.value = (fromDistance.value / 1.609).toFixed(2);
    } else {
        toDistance.value = (fromDistance.value * 1.609).toFixed(2);
    }
}

// Events


fromDistance.addEventListener('keyup', () => {
    convertDistance()
})

selectedFromDistance.addEventListener('change', () => {
    if(selectedFromDistance.value == 'km') {
        selectedToDistance.value = 'miles'
    } else if(selectedFromDistance.value == 'miles')  {
        selectedToDistance.value = 'km'
    } 
})

selectedToDistance.addEventListener('change', () => {
    if(selectedToDistance.value == 'km') {
        selectedFromDistance.value = 'miles'
    } else if (selectedToDistance.value == 'miles')  {
        selectedFromDistance.value = 'km'
    }
})