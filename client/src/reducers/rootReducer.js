const initState = {
    todos : []
}

const rootReducer = (state = initState, action) => {

    if (action.type === 'RETRIEVE_ITEMS') {
        return {
            ...state,
            todos: action.todos
        }
    }

    if (action.type === 'DELETE_ITEM') {
        const id = action.todo._id
        return {
            ...state,
            todos: state.todos.filter(el => el._id !== id)
        }
    }

    if (action.type === 'CREATE_ITEM') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }

   
    
    else return state
}

export default rootReducer