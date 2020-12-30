const  array = [4,3,3,45,2678,33,3,3]
const fun = (a)=>{
    let counts ={}
    for(let i = 0;i<a.length;i++){
        if(counts[a[i]]){
            counts[a[i]] +=1
        }else{
            counts[a[i]] =1
        }
    }
    for(let prop in counts){
        if(counts[prop]>=2){
            console.log(prop , counts[prop])
        }
    }
    console.log(counts)
}
fun(array)
const array1 = [2,3,4,2]
const mia = [...new Set(array1)]
console.log(mia)