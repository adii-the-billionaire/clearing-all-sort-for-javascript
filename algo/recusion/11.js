//Power solution
function power(base, exponent) {
    if (exponent === 0) return 1
    return base * power(base, exponent - 1)
}
//3^3
//3*power(3,2)
//3*3*power(3,1)
//3*3*1