function fact(num) {
    if (num === 0) return 1
    return num * fact(num - 1)
}
console.log(fact(3))
    //No base case
    //Forgetting to return or returning the wrong thing
    //stack overflow