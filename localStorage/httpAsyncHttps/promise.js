//promise is a better  way to structure an async function so let's start
setTimeout(()=>{
    console.log('this is a javascript')
},1000)
//manipulating callback as promise
const getData = (callback)=> {
    setTimeout(()=>{
        callback(undefined,console.log('hey babay'))
    },1000)
}
getData((error,data)=>{
    return data
})

//Promise

const mia = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hi baby how are you')
    },3000)
})
mia.then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})