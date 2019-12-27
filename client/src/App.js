import React from 'react';
import './css/app.css';
import Todo from './components/todo'


class App extends React.Component {
    state = {
        todos : []
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/items", { method: 'GET' })
            .then(res =>  res.json() )
            .then(todos => this.setState({ todos }) )
            .catch(err => console.error(err)) 
    }

    generateList = (todos) => {
        return todos.map(el => <Todo key={el._id} id={el._id} name={el.name} deleteItem={this.deleteItem}/> )
    }

    addItem = () => {
        let name = prompt("Please enter your todo", "Buy milk...");
        if (name == null) return
        // console.log('name: ', name)
        const item = { name }
        fetch("http://localhost:5000/api/items", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res =>  res.json() )
        .then(todo => this.setState( { todos : [...this.state.todos, todo] } ))
        .catch(err => console.error(err)) 
    }

    deleteItem = (id) => {
        // console.log('TODELETE', id)
        fetch(`http://localhost:5000/api/items/${id}`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => this.setState( { todos : this.state.todos.filter(el => el._id !== id) } ))
        .catch(err => console.error(err)) 
    }

    render () {
        const { todos } = this.state
        let list = todos.length > 0 ? this.generateList(todos) : 'No todos available'
        
        
        return (
          
              
            <div className='main'>
                <div className='todos'>
                    <ul>
                        { list }
                    </ul>
                    <div className='add-wrapper'>
                        <button className='add' onClick={ () => this.addItem() }>Add</button>
                    </div>
                </div>
                
            </div>
          
        )
      }
}

export default App;