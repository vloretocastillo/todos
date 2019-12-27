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
        return todos.map(el => <Todo key={el._id} id={el._id} name={el.name}/> )
    }

    addItem = (item) => {
        fetch("http://localhost:5000/api/items", { 
            method: 'POST',
            body: {
                name : item.name
            }
        })
        .then(res =>  res.json() )
        .then(todos => this.setState({ todos }) )
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
                        <button className='add' onClick={}>Add</button>
                    </div>
                </div>
                
            </div>
          
        )
      }
}

export default App;