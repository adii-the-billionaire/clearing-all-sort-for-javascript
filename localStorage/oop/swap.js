const swap = (arr,start=0,end=1)=>{
    return [arr[start],arr[end]] = [arr[end],arr[start]]
}
const mia = swap([1,2])
console.log(mia)