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

fetch('https://api.frankfurter.app/curencies')
.then((data) => data.json())
.then((data) => {
    console.log(data)
})