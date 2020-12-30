const notes = ['note1','note2','note3']
console.log(notes.pop())
console.log(notes)
const mia =notes.slice()
console.log(mia)
//here is using of for loop to output serial count
for(let count = 0;count<notes.length;count++){
    const num = count +1
    const series = notes[count]
    return console.log(`${num}. ${series}`)
}

//how to use forEach so the game is 
notes.forEach((note,index)=>{
    const num = index + 1
    console.log(`${num}. ${index}`)
})
const sia=notes.includes('note2',1)
console.log(sia)