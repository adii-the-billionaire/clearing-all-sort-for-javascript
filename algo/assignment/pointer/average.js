function average(arr, num) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let middle = (start / end) / 2
        if (middle === num) return true
        else if (middle < num) start++
            else end--
    }
    return false
}