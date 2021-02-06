//closures are closely relate to function nd function scope
const message = ()=>{
    const mess = `hi`
    const print = ()=>{
         console.log(mess)
    }
    return print
}
 const print = ()=>{
    console.log('222')
}
let tip = print
tip()
//a closures is the combination of function with lexical scope in which they are defined
//counter problems
const createCounter = ()=>{
    let count = 0
    return {
        get(){
            count++
            return count
        }
    }
}

 const counter = createCounter()
 console.log(counter.get())
 console.log(counter.get())
 console.log(counter.get())
 console.log(counter.get())
 //similarly we can add
 
 const add = (a)=>{
     return (b)=>{
         return a+b
     }
 }
 const mia = add(1)//this can also be set as add()()
 //now the mia = (b)=>{
     // return a+b
 //}
 console.log(mia(2))

