function duplicate(arr1){
    let obj = {}
    for(let val of arr1){
        obj[val] = (obj[val]||0) + 1
    }
    for(let key in obj){
        if(obj[key]>1)return true
    }
    return false
}
console.log(duplicate([1,2,3,4,5]))