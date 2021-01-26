let notes = []

const filters = {
    searchText: ''
}

const notesJSON = localStorage.getItem('notes')
if(notesJSON!==null){
    notes =JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        if(note.title.length>0){
            noteEl.textContent = note.title
        }else{
            noteEl.textContent = 'unnamed notes'
        }

        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title:'',
        body:''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    e.target.textContent = 'The button was clicked'
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
//here is fetching local storage so let's go
console.log(localStorage.getItem('mia'))
const user = {
    name:'iia',
    age:234
}
const mai = JSON.stringify(user)
localStorage.setItem('user',mai)
console.log(localStorage.getItem('user'))
const paser = JSON.parse(localStorage.getItem('user'))
console.log(`${paser.name} and here age is ${paser.age}`)