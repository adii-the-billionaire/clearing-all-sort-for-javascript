const todos = [
    {
        text:'Order cat food',
        completed:false
    },
    {
        text:'Clean kitchen',
        completed:true 
    },
    {
        text:'Buy food',
        completed:false
    },
    {
        text:'Do work',
        completed:true
    }]

    const deleteTodo = (todos,todoText)=>{
        const index = todos.findIndex((todo)=>{
            return todo.text.toLowerCase()===todoText.toLowerCase()
        })
        if(index>-1){
            todos.splice(index,1)
        }
    }

    deleteTodo(todos,'buy food')
    console.log(todos)

    //how to filter false statement of an array
    const notCompleted = (array)=>{
        return array.filter((todo)=>{
            return !todo.completed 
        })
    }
    const hi = notCompleted(todos)
    console.log(hi)