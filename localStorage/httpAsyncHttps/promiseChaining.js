const dataReturn = (num)=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(typeof num ==='number'){
            resolve(num*2)
        }else{
            reject('number must be provided')
        }
    })
} )

dataReturn(2).then((data)=>{
    console.log(data)
    dataReturn(data).then((data)=>{
        console.log(data)
        dataReturn(data).then((data)=>{
            console.log(data)
        }).catch((e)=>{
            console.log(e)
        })
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})