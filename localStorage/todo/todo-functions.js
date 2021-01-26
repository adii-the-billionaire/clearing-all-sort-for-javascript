const getTodos = ()=>{
    const todoJson = localStorage.getItem('todos')
    if(todoJson!==null){
        return JSON.parse(todoJson)
    }else{
        return []
    }
}

const getSavedTodos = (todos)=>{
    localStorage.setItem('todos',todos)
}

const generateDomTodo =(todo)=>{
    const p = document.createElement('p')
        p.textContent = todo.text
        return  p
}

const generateDomTodo1 = (incompleteTodos)=>{
    const p =document.createElement('h2')
    p.textContent = `You have ${incompleteTodos.length} todos left`
    return p
}

const renderTodos =  (todos, filters)=> {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    debugger

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = generateDomTodo1(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = generateDomTodo(todo)
        document.querySelector('#todos').appendChild(p)
    })
}