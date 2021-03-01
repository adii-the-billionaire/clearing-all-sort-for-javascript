function charCount(str){
    let obj = {}
    for(let i =0;i<str.length;i++){
        if(obj[str[i]]>0){
            obj[str[i]]++
        }else{
            obj[str[i]] = 1
        }
    }
    return obj
}
const mia = charCount('ccciaodios')
console.log(mia)