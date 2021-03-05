function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i] //thinking approach for the value so think about this
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
console.log(maxSubarraySum([911, 3, 2, 111, 780, 780], 2))
    //avoiding thinking of nested loop
    //finding p
    //thinking of pairing the number 
    //loop stop  while using keyword break