function digitCount(num){
    if(num===0){
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
const mia = digitCount(21388)
console.log(mia)