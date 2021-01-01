const todos = [
    {
        text:'Order cat food',
        completed:false
    },
    {
        text:'Clean kitchen',
        completed:true 
    },
    {
        text:'Buy food',
        completed:false
    },
    {
        text:'Do work',
        completed:true
    }]
//what the problems we have to our result as iterator form my work is , completed 
//here is filtering our project is 
const mi = todos.filter((todo)=>{
    return !todo.completed
})
const pit = document.createElement('h1')
pit.textContent = `your incompleted work is ${mi.length}`
document.querySelector('body').appendChild(pit)


        todos.forEach((tip,serial)=>{
            const p = document.createElement('p')
           p.textContent = `${serial+1} my work is ${tip.text} nd status of completed is ${tip.completed}`
           document.querySelector('body').appendChild(p)
       })
    document.querySelector('button').addEventListener('click',(e)=>{
        e.target.textContent = 'the button is fucking clicked!'
    })   
    //how to remove something just like my titllel or body edx
    //create a button that show ur completed work 
    //create a button that show uncompleted work okay here is the work
    //create a button that remove ur list 
    document.querySelector('#hi').addEventListener('click',(e)=>{
        todos.forEach((todo,index)=>{
            const pit = document.createElement('p')
            pit.textContent = `${index+1}. ${todo.text}`
            document.querySelector('body').appendChild(pit)
        })

    })
    document.querySelector('#hi1').addEventListener('click',(e)=>{
       const mia =todos.filter((todo)=>{
           return todo.completed
       })
       if(mia){
           mia.forEach((todo,index)=>{
               const pit = document.createElement('p')
               pit.textContent = `${index+1}. ${todo.text}`
               document.querySelector('body').appendChild(pit)
           })
       }
    })
    document.querySelector('#hi2').addEventListener('click',(e)=>{
        const mia =todos.filter((todo)=>{
            return !todo.completed
        })
        if(mia){
            mia.forEach((todo,index)=>{
                const pit = document.createElement('p')
                pit.textContent = `${index+1}. ${todo.text}`
                document.querySelector('body').appendChild(pit)
            })
        }
    })
    document.querySelector('#hi3').addEventListener('click',(e)=>{
        document.querySelector('#hi').remove()
    })
    document.querySelector('input').addEventListener('change',(e)=>{
        console.log(e)
        console.log(e.target.value)
    })
    document.querySelector('input').addEventListener('input',(e)=>{
        console.log(e)
        console.log(e.target.value)
    })
    document.querySelector('#hi4').addEventListener('click',(e)=>{
        const pit = document.createElement('h2')
        const si  = document.querySelector("input")
        pit.textContent = si.value
        si.onfocus = true
        document.querySelector("body").appendChild(pit)
    })
    document.querySelector("input").addEventListener('click',(e)=>{
        e.target.value = ''
        
    })
    
    const text = {
        text:''
    }
    const fun = (body,text)=>{
        const sia = body.filter((bdo)=>{
            return bdo.text.toLowerCase().includes(text.text.toLowerCase())
        })  
        document.querySelector('#hi6').innerHTML =''
        sia.forEach((yeap)=>{
            const pit = document.createElement('p')
            pit.textContent = yeap.text
            document.querySelector('#hi6').appendChild(pit)
        })
    }
    document.querySelector('#hi5').addEventListener('input',(e)=>{
        text.text = e.target.value
        fun(todos,text)
    })




















// //adding 
// const p = document.createElement('p')
// p.textContent = 'hi body how are you hoping you are fine'
// document.querySelector('body').appendChild(p)
// document.querySelector('button').addEventListener('click',(e)=>{
//     e.preventDefault()
//     p.textContent = 'hi body how are you hoping you are fine'
//     document.querySelector('body').appendChild(p)
// })