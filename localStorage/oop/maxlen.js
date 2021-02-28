function digitCount(num){
    if(num===0)return 1
    return Math.floor(Math.log10(Math.abs(num))) +1
}
function max(arr){
   let num = []
   for(let i = 0 ;i<arr.length;i++){
       num.push(digitCount(arr[i]))
   }
   let num1
   let i = 0
   let j = 1
   while(j<arr.length){
       if(arr[i]<arr[j]){
           num1 = arr[j]
           i = j
           j++
       }else{
           num1 = arr[i]
           j++
       }
   }
   return num1
}

const mia = max([1999919919,2,56,2,7,8999999999999993,2,19999,1010101010,8000000000000000000000099])
console.log(mia)