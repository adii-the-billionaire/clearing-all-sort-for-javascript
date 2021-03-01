function charCount(str){
    let obj = {}
    for(let i =0;i<str.length;i++){
        obj[str[i]] = 0
    }
    return obj
}
const mia = charCount('ciaodios')
console.log(mia)