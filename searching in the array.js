const notes = [
    {
    title:'my next trip',
    body:'i would like to go spain'
    },
    {
        title:'Habbits to work on',
        body:'exercise, eating a bit better'
        },
        {
            title:'Office modification',
            body:'get a new seat'
            },

]
//how to delete any array element using of splice
const findNote = (obj,noteTitle)=>{
const index = obj.findIndex((note,index)=>{
    return note.title.toLowerCase() ===noteTitle.toLowerCase()
})
return obj[index]
}
const data =findNote(notes,'Office Modification')
console.log(data)

const findNote1 = (obj,noteTitle)=>{
return obj.find((note,index)=>{

    return note.title.toLowerCase()===noteTitle.toLowerCase()
})
}
const data1 = findNote1(notes,'Habbits to work on')

//how to delete something in array that set of an object so here is the method
const removeData= (array,noteTitle)=>{
   const index = array.findIndex((note,index)=>{
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
    array.splice(index,1)
    return array
}

//here is the code of searching the array 
const search = (array,query)=>{
    const filterNotes = array.filter((note)=>{
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    return filterNotes
}
const dip = search(notes,'Habbits to work on')
console.log(dip)
const di = removeData(notes,'Habbits to work on')
console.log(di)


//myth for an object 
const mia = {}
const sia = {}
console.log(mia===sia)
//findIndex , indexOf
const si = [2,3,4,2,4,2,2]
const sii = si.indexOf(2)
console.log(sii)
 
const sip = (a)=>{
   const index =  si.findIndex((num,index)=>{
        return num ===a
    })
    return si[index]
}
console.log(sip(2))
