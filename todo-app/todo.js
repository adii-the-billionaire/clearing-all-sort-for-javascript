console.log('hi link')
const p = document.querySelectorAll('p')
p.forEach((p)=>{
    if(p.textContent.toLowerCase().includes('the')){
        p.remove()
    }
})
//adding element to to our 