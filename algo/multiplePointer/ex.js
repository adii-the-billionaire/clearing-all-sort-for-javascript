//sum zero naive for our the solving 
function sumZero(arr){
    let left = 0
    let right = arr.length -1
    while(left<right){
        let sum = arr[left] +arr[right]
        if(sum ===0){
            return [ arr[left],arr[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
}
///this is used for sorted value whose sum is zero