import React from 'react';
import './css/app.css';
import Todo from './components/todo'

// redux
import { connect } from 'react-redux'
import { retrieveItems, addItem, deleteItem } from './actions/itemsActions'



class App extends React.Component {
    state = {
    }

    componentDidMount() {
        this.props.retrieveItems()
    }

    generateList = (todos) => {
        return todos.map(el => <Todo key={el._id} id={el._id} name={el.name} deleteItem={this.props.deleteItem}/> )
    }

    handleClick = () => {
        let name = prompt("Please enter your todo", "Buy milk...");
        if (name == null) return
        const item = { name }
        this.props.addItem(item)
    }


    render () {
        const { todos } = this.props
        let list = todos.length > 0 ? this.generateList(todos) : 'No todos available'
        
        
        return (
          
              
            <div className='main'>
                <div className='todos'>
                    <ul>
                        { list }
                    </ul>
                    <div className='add-wrapper'>
                        <button className='add' onClick={ () => this.handleClick() }>Add</button>
                    </div>
                </div>
                
            </div>
          
        )
      }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveItems: () => dispatch(retrieveItems()),
        addItem : (item) => dispatch(addItem(item)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);



// WITHOUT REDUX
// class App extends React.Component {
//     state = {
//         todos : []
//     }

//     componentDidMount() {
//         fetch("http://localhost:5000/api/items", { method: 'GET' })
//             .then(res =>  res.json() )
//             .then(todos => this.setState({ todos }) )
//             .catch(err => console.error(err)) 
//     }

//     generateList = (todos) => {
//         return todos.map(el => <Todo key={el._id} id={el._id} name={el.name} deleteItem={this.deleteItem}/> )
//     }

//     addItem = () => {
//         let name = prompt("Please enter your todo", "Buy milk...");
//         if (name == null) return
//         const item = { name }
//         fetch("http://localhost:5000/api/items", { 
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(item)
//         })
//         .then(res =>  res.json() )
//         .then(todo => this.setState( { todos : [...this.state.todos, todo] } ))
//         .catch(err => console.error(err)) 
//     }

//     deleteItem = (id) => {
//         fetch(`http://localhost:5000/api/items/${id}`, { 
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(() => this.setState( { todos : this.state.todos.filter(el => el._id !== id) } ))
//         .catch(err => console.error(err)) 
//     }

//     render () {
//         const { todos } = this.state
//         let list = todos.length > 0 ? this.generateList(todos) : 'No todos available'
        
        
//         return (
          
              
//             <div className='main'>
//                 <div className='todos'>
//                     <ul>
//                         { list }
//                     </ul>
//                     <div className='add-wrapper'>
//                         <button className='add' onClick={ () => this.addItem() }>Add</button>
//                     </div>
//                 </div>
                
//             </div>
          
//         )
//       }
// }

// export default App;
