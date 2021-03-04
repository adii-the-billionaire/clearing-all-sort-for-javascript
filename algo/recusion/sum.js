function recur(num) {
    let start = 0
    if (num <= 0) {
        return
    }
    start = start + num
    console.log(num)
    console.log(start)
    num--
    recur(num)
}
recur(10)