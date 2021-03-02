//here is the checking the frequency of two sets of digit so 
//just like anagram 
function same(num1,num2){
    const data1 = num1.toString()
    const data2 = num2.toString()
    if(data1.length!==data2.length)return false
    let obj1 = {}
    let obj2 = {}
    for(let val of data1){
        obj1[val] = (obj1[val]||0)+1
    }
    for(let val of data2){
        obj2[val] = (obj2[val]||0)+1
    }
    for(let key in obj1){
        if(obj2[key]!==obj1[key])return false
    }
    return true
}
console.log(same(231,329))
//application when order  is not neccessary 
