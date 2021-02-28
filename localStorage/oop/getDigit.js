function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}
const mia = getDigit(210493,1)
console.log(mia)