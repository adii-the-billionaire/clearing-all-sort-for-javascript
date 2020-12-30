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
    const sortTodos = (todos)=>{
        todos.sort((a,b)=>{
            if(a.completed === false && b.completed ===true){
                return -1
            }else if(a.completed ===true && b.completed ===false){
                return 1
            }else{
                return 0
            }
        })
    }
    sortTodos(todos)
    console.log(todos)