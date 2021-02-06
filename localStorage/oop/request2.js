const getPuzzle = new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest()
    request.open('GET','http://puzzle.mead.io/puzzle')//if you want to use this function as synchronously then passed third arguement that is false
    request.send()
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.status===200 && e.target.readyState===4){
            let data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        }else if(e.target.readyState===4){
            reject('some problems is their')
        }
    })
})

 const getCountry = new Promise((resolve,reject)=>{
     const request = new XMLHttpRequest()
     request.open('GET','https://restcountries.eu/rest/v2/all')
     request.send()
     request.addEventListener('readystatechange',(e)=>{
         if( e.target.readyState===4 && e.target.status===200 ){
             const data = JSON.parse(e.target.responseText)
             const myData = data.filter((data)=>{
                 return data.alpha2Code === 'IN'
             })
             resolve(myData[0])
         }else if(e.target.readyState === 4){
             reject('Error')
         }
     })
 })

 