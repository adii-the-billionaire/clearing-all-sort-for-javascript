//console the  odd value of ineger through recursively  way
//consoe the odd values from 0 to 100
//a is starting point nd b in ending pointing


function oddHelper(a, b) {
    if (b === a) return a
    return b + oddHelper(b - 1)
}
oddHelper(1, 3)