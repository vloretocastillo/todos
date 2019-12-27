import React from 'react';

class Todo extends React.Component {
    

    render () {
         
        return (
            <li key={this.props.id} className='li'>
                {this.props.name}
                <button className='delete' onClick={ () => this.props.deleteItem(this.props.id) }>Delete</button>
            </li>
        )
          
    }
}

export default Todo;