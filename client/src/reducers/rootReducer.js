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
        return {
            ...state,
            todos: action.todos
        }
    }

    if (action.type === 'CREATE_ITEM') {
        return {
            ...state,
            todos: action.todos
        }
    }

   
    
    else return state
}

export default rootReducer