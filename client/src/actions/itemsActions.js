const retrieveItems = () => {
    const fetchPath = "http://localhost:5000/api/items"
    return async (dispatch) => {
        await fetch(fetchPath, { method: 'GET' })
            .then(res =>  res.json() )
            .then(data => { dispatch({ type: 'RETRIEVE_ITEMS', todos: data }) })
            .catch(err => console.error(err)) 
    }  
}

const addItem = (item) => {
    const fetchPath = "http://localhost:5000/api/items"
    return async (dispatch) => {
        await fetch(fetchPath, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(item) })
            .then(res =>  res.json() )
            .then(data => { dispatch({ type: 'CREATE_ITEM', todo: data }) })
            .catch(err => console.log(err))
    }
}

const deleteItem = (id) => {
    const fetchPath = `http://localhost:5000/api/items/${id}`
    return async (dispatch) => {
        await fetch(fetchPath, { method: 'DELETE', headers: {'Content-Type': 'application/json'} })
            .then(res =>  res.json() )
            .then(data => { dispatch({ type: 'DELETE_ITEM', todo: data }) })
            .catch(err => console.log(err))
    }
}

module.exports = {
    retrieveItems : retrieveItems,
    addItem : addItem,
    deleteItem : deleteItem
}