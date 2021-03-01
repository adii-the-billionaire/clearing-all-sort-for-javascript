function charCount(str){
    let obj =  {}
    for(let i= 0;i<str.length;i++){
        let char = str[i].toLowerCase()
        if(isAlphNumeric(char)){
            obj[char] = ++ obj[char]||1
        }
    }
    return obj
}
function isAlphNumeric(char){
    let code = char.charCodeAt(0)
    if(!(code>47 && code<58)&&
    !(code>64&&code<91)&&
    !(code>96&&code<123)){
return false
    }
    return true
}
const mia = charCount('the quick brown fox jumps over the lazy dog')
console.log(mia)