function oddValues(arr) {
    let result = []

    function oddHelper(input) {
        if (input.length === 0) {
            return
        }
        if (input[0] % 2 !== 0) {
            result.push(input[0])
        }
        oddHelper(input.slice(1))
    }
    oddHelper(arr)
    return result
}
console.log(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))