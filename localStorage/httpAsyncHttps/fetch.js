//here we learning fetch api 
//that build promise chaining
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    return response.json() 
}).then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})
