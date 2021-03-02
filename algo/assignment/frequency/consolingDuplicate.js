function duplicate(arr){
    let obj = {}
    let start = 0
    for(let val of arr){
        obj[val] = (obj[val]||0) + 1
    }
    for(let key in obj){
        if(obj[key]>1){
             start++
        }
    }
    return start
}
console.log(duplicate([1,2,3,4,5,4,5]))