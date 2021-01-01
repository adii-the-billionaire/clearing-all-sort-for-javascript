const data = [{
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
sort(data)