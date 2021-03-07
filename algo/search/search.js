//divide conquer make the numeral max nd min
//divide nd conquer is best approach for sorted array
function main(arr, val) {
    let min = 0
    let max = 0
    while (min <= max) {
        let middle = (min + max) / 2
        if (arr[middle] > val) {
            start = middle + 1
        } else if (arr[middle] < val) {
            end = middle - 1
        } else if (arr[middle] === val) {
            return true
        }
    }
    return false
}
console.log(main([1, 2, 3, 4, 5, 6]), 6)