function max(arr,num){
    if(arr.length<num){
        return false
    }
    
    let max = -Infinity
    for(let i=0;i<arr.length-num+1;i++){
        let temp = 0
        for(let j=0;j<num;j++){
        temp+=arr[i+j]//where i is  responsible nd check the value for the result
        }
        if(temp>max){
            max = temp
        }
}
}
const mia = max([2,2,33,4,2,4,2,4,5,2,12],2)
//counting two digit max sum here is our approach