import React from 'react';

class Todo extends React.Component {
    

    render () {
         
        return <li key={this.props.id}>{this.props.name}</li>
          
    }
}

export default Todo;