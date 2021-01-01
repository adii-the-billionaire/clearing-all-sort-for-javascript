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
const filters = {
    text:''
}
const notdi = (noti,filters)=>{
    const filteredNotes = noti.filter((note)=>{
        return note.title.toLowerCase().includes(filters.text.toLowerCase())
    })
    document.querySelector('#ram').innerHTML = ''
    filteredNotes.forEach((note)=>{
        const p = document.createElement('p')
        p.textContent = note.title
        document.querySelector('#ram').appendChild(p)
    })
}
notdi(notes,filters)
document.querySelector('#rami').addEventListener('input',(e)=>{
    filters.text = e.target.value
    notdi(notes,filters)
})