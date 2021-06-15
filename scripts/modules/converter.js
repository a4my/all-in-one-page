/////////////////////////
/////////CONVERTER CARD

// const fromCurrency = document.querySelector('#from-currency').value
// const toCurrency = document.querySelector('#to-currency').value
// const amount = document.querySelector('#from-amount').value
// const xmlHttp = new XMLHttpRequest()

// function convertCurrency() {
//     const url = 'http://data.fixer.io/api/latest?&access_key=fd91fb68d509d33566a6b2036be72c72&symbols=' + fromCurrency + ',' + toCurrency
//     xmlHttp.open('GET', url, true)
//     xmlHttp.send()
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status== 200 ) {
//             const result = xmlHttp.responseText
//             // alert(result)
//             const jsResult = JSON.parse(result)
//             const oneUnit = jsResult.rates[fromCurrency]/jsResult.rates[toCurrency]
//             document.querySelector('#to-amount').value = (oneUnit * amount).toFixed(2)
//         }
//     }

// }

const select = document.querySelectorAll('.currency')
// const btn = document.querySelector('#btn')
const num = document.querySelector('#from-amount')
const ans = document.querySelector('#to-amount')

fetch('https://api.frankfurter.app/currencies')
.then((data) => data.json())
.then((data) => {
    display(data)
})

function display(data) {
    const entries = Object.entries(data)
    for (let i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        
    }
}

num.addEventListener('keyup', () => {
    let currency1 = select[0].value
    let currency2 = select[1].value
    let value = num.value
    
    if(currency1 != currency2) {
        convert(currency1, currency2, value)
    } else {
        alert("Please choose 2 different currencies!")
    }
})

function convert(currency1, currency2, value) {
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((val) => val.json())
    .then((val) => {
        console.log(Object.values(val.rates)[0])
        ans.value = Object.values(val.rates)[0]
    })
}