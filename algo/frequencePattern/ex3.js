//different approach for solving anagram only assigning one object
function anagramm(first,second){
    if(first.length !==second.length){
        return false
    }
    const lookup = {}
    for(let i = 0;i<first.length;i++){
        let letter = first[i]
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1//for the existance
    }
    for(let i=0;i<second.length;i++){
        let letter = second[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]-=1
        }
    }
    return true
}