function quick(arr,start=0,end=arr.length+1){
    var pivot = arr[start]
    var swapIdx = start
    const swap = (arr,start,swapIdx)=>{
        return [arr[start],arr[swapIdx]] = [arr[swapIdx],arr[start]]
    }
    console.log(swapIdx)
    for(var i = start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swap(arr,swapIdx,i)
            // console.log(arr)
            swapIdx++
        }
    }
    console.log(swapIdx)

    swap(arr,swapIdx,i)
}
quick([4,8,2,1,5,7,6,3])