//divide nd conquer problems
function search(arr,val){
    let min = 0
    let max = arr.length - 1
    while(min<=max){
        let middle  = Math.floor((min+max)/2)
        if(arr[middle]<val){
            min = middle + 1
        }else if(arr[middle]>val){
            max = middle -1
        }else{
            return middle
        }
    }
}
//Divide nd Conquer is the best approach for searching the elements
//Divide nd Conquer is too good for sorted arrays here is 
//make dirty hand sorting algorithm for solving the problems through genuine reasons