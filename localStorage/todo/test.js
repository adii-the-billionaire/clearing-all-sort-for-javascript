//here is the method for the
function reverse(x){
if(x<-2148473647||x>2148473647||x===0){
    return 0
}
let num = x<0?Math.abs(x):x
let numLength = parseInt(Math.log10(x)+1)
let final = 0
for(let i=numLength-1;i>=0;i--){
    let digit = (parseInt(num/10**i)) * (10**(numLength-1-i))
    num = num%10**i
    final = final+digit
    
}
return final
}
console.log(reverse(7778))

function adii(x){
    let sip = []
    let tip =0
    x  = x.toString().split('')
    for(i=x.length-1;i>=0;i--){
         tip = x[i]
        sip.push(tip)
    }
    return parseInt(sip.join(''))
}
console.log(adii(1234))
let digit = (parseInt(123/10**2)) * (10**2)
console.log(digit)



