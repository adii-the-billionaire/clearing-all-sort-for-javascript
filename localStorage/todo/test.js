
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



