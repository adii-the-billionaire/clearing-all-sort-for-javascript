function lessArray(arr){
let i = 0
let j = 1
let results = []
while(i<arr.length && j<arr.length){
    if(arr[i]>arr[j]){
  results.push(arr[j])
j++
    }else{
        j++
    }
}

return results
}
const mia = lessArray([5,2,1,8,4,7,6,3])
console.log(mia)