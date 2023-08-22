import todoList from '../data/todos.json'

export const todoListResolver = () => {
    //db calls
    //mapping db feilds wiuth output schema 
    // author_id => authorId

    return todoList //db call
}

export const user = (parent, args, context, info)=>{
        return users.find(user => user.id === args.id)
}