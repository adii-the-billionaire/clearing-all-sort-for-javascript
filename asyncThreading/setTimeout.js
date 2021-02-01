function sia(who){
    console.log(`name is ${who}`)
}
setTimeout(sia,1000,'Mr Baba')
let count = 0
setTimeout(()=>{
    console.log(count++)
},1000)

