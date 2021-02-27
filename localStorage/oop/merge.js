function sia(arr1,arr2){
    let results = []
    let i = 0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i])
            i++
        }else{
            arr2[j]<arr1[i]
            results.push(arr2[j])
            j++
        }
    }
    console.log(i)
    while(i<arr1.length){
results.push(arr1[i])
i++
    }
    console.log(j)
    while(j<arr2.length){
results.push(arr2[j])
j++
    }
    return results
}
const mia = sia([2,5,7,8],[4,6,9,11])
console.log(mia)