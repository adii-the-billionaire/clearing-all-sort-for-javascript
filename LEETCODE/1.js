function main(arr, target) {
    let newArr = arr.sort((a, b) => {
        return a - b
    })
    console.log(newArr)
    let start = 0
    let end = newArr.length - 1
    while (start < end) {
        let sum = newArr[start] + newArr[end]
        if (sum === target) {
            return [newArr[start], newArr[end]]
        } else
        if (sum > target) {
            end--
        } else {
            start++
            console.log(start)
        }
    }

}
console.log(main([2, 7, 11, 15], 9))