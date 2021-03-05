function maxSubarraySum(arr,num){
    if(num>arr.length){
        return null
    }
    let max = -Infinity
    for(let i=0;i<arr.length-num+1;i++){
        let temp = 0
        for(let j=0;j<num;j++){
            temp +=arr[i+j]
        }
        if(temp>max){
            max=temp
        }
        return max
    }
}
//approach never to think beyond the looping of an elements so here is think
//addition apply for two digit straight thinking so let's begin some more fundamental approach
//time complexity is on^2