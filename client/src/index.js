import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'))


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
