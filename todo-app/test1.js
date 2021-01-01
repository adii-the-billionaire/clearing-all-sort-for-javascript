const work = [
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
    //here is filtering rendering and updates the value

    // const dip = document.createElement('p')
    // dip.textContent = `the total text is ${work.length}`
    // document.querySelector('#hi').appendChild(dip)
    
       work.forEach((data)=>{
        return data.text
        })
        
    
    