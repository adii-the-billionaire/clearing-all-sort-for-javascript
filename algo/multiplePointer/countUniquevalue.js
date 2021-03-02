//accept sorted array that counts the unique value 
function unique(array){
    let i = 0
    for(let j = 1;j<array.length;j++){
        if(array[i]!==array[j]){
            array[i]=array[j]
            i++
        }
    }
    return i+1
}
const mia = unique([2,1,2,3,4,2222,1,9,0])
console.log(mia)
//so for this error we have to assigning the new value 