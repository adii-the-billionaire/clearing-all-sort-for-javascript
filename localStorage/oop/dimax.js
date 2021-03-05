function digitCount(num){
    if(num===0)return 1
    return Math.floor(Math.log10(Math.abs(num))) +1
}
function mostDigit(nums){
    let maxDigits = 0
    for(let i = 0;i<nums.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits
}
const sia = mostDigit([22,333,3355,3,2,2222])
console.log(sia)