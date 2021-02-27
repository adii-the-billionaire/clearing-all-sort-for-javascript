function pivot(arr,start=0,end=arr.length-1){
    var pivot = arr[start]
    var swapIdx = start
    function swap(arr,start,swapIdx){
        var temp = arr[start]
        arr[start] = arr[swapIdx]
        arr[swapIdx] = temp
    }
    for(var i = start+1;i<arr.length;i++){
        if(arr[start]>arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}
function quickSort(arr,left=0,right=arr.length-1){
   ///recursively call we have to define the base case
   if(left<right){
    let pivotIndex = pivot(arr,left,right)
    quickSort(arr,pivotIndex+1,right)
    quickSort(arr,left,pivotIndex-1)
   }//ye stack tab tak chlega jab tak stack over nhi ho jata smje kya 
   return arr
}
const mia = quickSort([4,6,9,1,2,5,3])
console.log(mia)