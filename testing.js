const accounts =[]
const obj={}
const fun = (name,age,password)=>{
    obj.name = name
    obj.age = age
    obj.password = password
    if(password.includes('password')){
        return {
            error:'password not equal to password'
       }
    }else{
        accounts.push(obj)
    }
    return console.log(obj)
}
fun('adi',34,'psis')
fun('sia',3,'djdjs')
console.log(accounts)