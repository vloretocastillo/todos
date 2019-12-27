import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './css/app.css';



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
        return todos.map(el => <li key={el._id}>{el.name}</li> )
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
                </div>
            </div>
          
        )
      }
}

export default App;