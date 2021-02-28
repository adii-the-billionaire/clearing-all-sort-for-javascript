const grade = (score,totalScore)=>{
    if(typeof score !== 'number' || typeof totalScore !== 'number'){
        throw Error("score nd total score must be number")
    }
    let percentage = (score/totalScore)*100
    let grade = ''
    percentage>=90?grade="A":
    percentage>=80&&percentage<90?grade="B":
    percentage>=70&&percentage<80?grade="C":
    percentage>=60&&percentage<70?grade="D":
    percentage>=50&&percentage<60?grade="E":grade="you are failed"
    return `your percentage is ${percentage} nd your's grade  allotted  ${grade}`
}
try{
    const mia = grade(3,10)
    console.log(mia)
}catch(e){
    console.log(e.message)
}