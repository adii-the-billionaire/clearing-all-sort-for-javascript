function pivot(arr,start=0){
     var pivot = arr[start]
     var swapIdx = start
     function swap(arr,start,swapIdx){
         var temp = arr[start]
         arr[start] = arr[swapIdx]
         arr[swapIdx] = temp
     }
     for(var i= start+1;i<arr.length;i++){
         if(arr[start]>arr[i]){
             swapIdx++
             swap(arr,swapIdx,i)
         }
     }
     swap(arr,start,swapIdx)//final submission after loopiinng
}
const mia = pivot([4,2,8,15])
console.log(mia)
module.export = pivot