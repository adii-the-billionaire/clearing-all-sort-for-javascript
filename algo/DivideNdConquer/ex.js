//a naiver solution for linear search 
//time complexity is )N
function search(arr,val){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}