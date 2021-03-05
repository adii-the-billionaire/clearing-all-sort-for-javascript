function digitCount(num){
    if(num===0)return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits(nums){
    let maxDigits = 0 
    for(let i =0;i<nums.length;i++){
        maxDigits = Math.max(maxDigits,nums[i])
    }
    return maxDigits
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    console.log(maxDigitCount)
}
const mia = radixSort([23,345,5467,12,2345,9852])
console.log(mia)