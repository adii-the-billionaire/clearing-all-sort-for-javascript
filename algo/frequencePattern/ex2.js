//sequence is not matter then previous can be solved by frequency patter
function same(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val]  = (frequencyCounter1[val]||0)+1
    }

    for(let val of arr2){
        frequencyCounter2[val]  = (frequencyCounter2[val]||0)+1
    }
    for(let key in frequencyCounter1 ){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        //now it's time to checking the occurance of an object 
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
            return false
        }
    }
    return true
}