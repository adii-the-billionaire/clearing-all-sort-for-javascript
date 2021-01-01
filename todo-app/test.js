const data1 = [{
    name:'riay',
    age:89
},
{
    name:'riiia',
    age:100
},
{
    name:'ria',
    age:90
},
{
    name:'riya',
    age:100
}
]
const sort = (data)=>{
    return data.sort((a,b)=>{
        if(a.name.toLowerCase()>b.name.toLowerCase()){
            return 1
        }else if(a.name.toLowerCase()<b.name.toLowerCase()){
            return -1
        }else{
            return 0
        }
    })
}
const data2 = sort(data1)
// console.log(data1)
const fuck = (bd,text)=>{
    const teat =bd.filter((bet)=>{
        return bet.name.toLowerCase().includes(text.toLowerCase())
    })
    document.querySelector('#hi9').innerHTML = ''
    teat.forEach((ele)=>{
        console.log(ele.name) 
        const pit = document.createElement('p')
        pit.textContent = ele.name
        document.querySelector('#hi9').appendChild(pit)
    })
}
// fun(data1,'ia')
document.querySelector('#hi10').addEventListener('input',(e)=>{
    var text = e.target.value
    console.log(text)
    fuck(data2,text)
})




