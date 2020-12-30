console.log('hi')
//how to remove somethig in DOM 
const p = document.querySelector('p')
p.remove()
document.body.contentEditable = true
//for removing more than one then use iterator operaton such as forEach  
const pit = document.querySelectorAll('p')
// pit.forEach((p)=>{
//     p.remove()
// })
//here is the code for adding the text content so let's try this
pit.forEach((p)=>{
    p.textContent = 'hell'
})