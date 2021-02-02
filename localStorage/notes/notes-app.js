const notes = getSavedNotes()

const filters = {
    searchText: '',
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
const _id = uuidv4()
    notes.push({
        id: _id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`http://127.0.0.1:5500/localStorage/notes/edit.html#${_id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})