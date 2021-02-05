const getPuzzle = (callback)=>{
   callback('hi baby how are you from the callback society')
   const request = new XMLHttpRequest()
   request.open('GET','http://puzzle.mead.io/puzzle')
   request.send()
   request.addEventListener('readystatechange',(e)=>{
       if(e.target.status===200 && e.target.readyState===4){
           let data = JSON.parse(e.target.responseText)
           callback(undefined,data.puzzle)
       }else if(e.target.readyState===4){
           callback('some problems is their',undefined)
       }
   })
}