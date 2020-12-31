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
       
    


















// //adding 
// const p = document.createElement('p')
// p.textContent = 'hi body how are you hoping you are fine'
// document.querySelector('body').appendChild(p)
// document.querySelector('button').addEventListener('click',(e)=>{
//     e.preventDefault()
//     p.textContent = 'hi body how are you hoping you are fine'
//     document.querySelector('body').appendChild(p)
// })