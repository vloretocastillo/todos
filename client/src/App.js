import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './css/app.css';



class App extends React.Component {
    state = {
        todos : []
    }
    componentDidMount() {
        console.log('DID MOUNT')
        const fetchPath = "http://localhost:5000/api/items"
        fetch(fetchPath, {
            method: 'GET',
            // mode: 'no-cors',
            // headers: {
            //     mode: 'no-cors',
            // }
        })
        .then(res =>  res.json() )
        .then(data => console.log(data))
        .catch(err => console.error(err)) 
    
        
    }

    render () {
        return (
          <BrowserRouter>
              {/* <div className="App">
                <Switch>
                  <Route exact path='/' component={Landing} />
                </Switch>
              </div> */}
              <div className='main'>
                <div className='todos'>
                    HELLO IM APP
                </div>
              </div>
          </BrowserRouter>
        )
      }
}

export default App;