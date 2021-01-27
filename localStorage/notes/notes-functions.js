// Read existing notes from localStorage
console.log(uuidv4())
const getSavedNotes =  () =>{
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes =  (notes) =>{
     localStorage.setItem('notes', JSON.stringify(notes))
}

const removeNote = (id)=>{
    const noteIndex = notes.findIndex((note)=>{
        return note.id ===id
    })

    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM =  (note)=> {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click',(e)=>{
        console.log(note)
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    noteEl.appendChild(textEl)
    return noteEl
}

// Render application notes
const renderNotes =  (notes, filters)=> {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}