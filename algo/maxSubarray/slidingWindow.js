function maxSubarraySum(arr,num){
    let maxSum = 0
    let tempSum = 0
    if(arr.length<num)return null
    for(let i = 0;i<num;i++){
        maxSum += arr[i]
    }
    tempSum  =maxSum
    for(let i =num;i<arr.length;i++){
        tempSum = tempSum-arr[i-num]+arr[i]//thinking approach for the value so think about this
        maxSum = Math.max(maxSum,tempSum)
    }
    return  maxSum
}