 //The sort() method sorts the elements of an array in place and returns the array. The sort is not neccessarily stable. The default sort order is according to string Unicode code points.
 //sort where two arguements a,b deal with a>b return 1 a<b return -1 if none then return 0
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
//here is sorting
const sortNotes = (notes)=>{
    notes.sort((a,b)=>{
        if(a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
        }else if(a.title.toLowerCase()>b.title.toLowerCase()){
            return 1
        }else{
            return  0
        }
    })
}
sortNotes(notes)
console.log(notes)

///here is sorting an account of an object
const account = [{
    name:'riya',
    age:20
},
{
    name:'rishabh',
    age:21
},
{
    name:'rita',
    age:17
}]
//we have sorting the name nd age accordingly
const sorting = (notes)=>{
    notes.sort((a,b)=>{
        if(a.name.toLowerCase()<b.name.toLowerCase()){
            return -1
        }else if(a.name.toLowerCase()>b.name.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}
sorting(account)
console.log(account)
//similarly we have to sort the value of age accordingliy ascending order
const sortAge = (notes)=>{
    notes.sort((a,b)=>{
        return a.age - b.age
    })
}
sortAge(account)
console.log(account)