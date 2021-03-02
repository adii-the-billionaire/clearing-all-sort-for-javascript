//here is the code to removing duplicate in the array
function duplicate(arr){
    let results = []
    let obj = {}
    for(let val of arr){
        obj[val] = (obj[val]||0) + 1
    }
    for(let key in obj){
        if(obj[key]>1){
            obj[key] = obj[key]-1
        }
    }
    for(let key in obj){
        results.push(key)
    }
    return results
}
console.log(duplicate([1,2,3,4,5,5]))