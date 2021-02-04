//here we are learning xmlhttprequest
const request = new XMLHttpRequest()
request.open('GET','http://puzzle.mead.io/puzzle')
request.send()
request.addEventListener('readystatechange',(e)=>{
    //console.log(e.target.readyState)
    //console.log(e.target)
    console.log(JSON.parse(request.responseText))
})
const countryCode = 'IN'
const countryRequest = new XMLHttpRequest()
countryRequest.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country)=>{
            return country.alpha2Code === countryCode
        })
        console.log(country.name)
    }else if(e.target.status===400){
        console.log('Unable to fetch data')
    }
})
countryRequest.open('GET','https://restcountries.eu/rest/v2/all')
countryRequest.send()