function sumZero(arr){
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return [ arr[i],arr[j]]
            }
        }
    }
}
//but this give suppose we have the arr of length = 3
//at i = 3 j = 4 that is undefined so this is not the efficient way to write this programs
//alos it's have time complexity is On^2
///so let's think other approach that multiple pointer approach