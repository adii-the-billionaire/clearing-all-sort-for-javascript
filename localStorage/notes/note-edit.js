const titleElement = document.querySelector('#note-title')
const bodyElement =document.querySelector('#note-body')
const refreshPage = document.querySelector('#save-note')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find((note)=>{
    return note.id === noteId
})
if(note===undefined){
    location.assign('http://127.0.0.1:5500/localStorage/notes/')
}

titleElement.value = note.title
bodyElement.value = note.body
titleElement.addEventListener('input',(e)=>{
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input',(e)=>{
    note.body = e.target.value
    saveNotes(notes)
   
})

removeElement.addEventListener('click',(e)=>{
    removeNote(note.id)
    saveNotes(notes)
    location.assign('http://127.0.0.1:5500/localStorage/notes/')
})

refreshPage.addEventListener('click',(e)=>{
   window.location.reload()
})




