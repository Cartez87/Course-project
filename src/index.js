import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.scss';
import App from './App';
import rootreducer from './store/rootReducer';


const store = createStore(
  rootreducer, 
  composeWithDevTools(
    applyMiddleware(thunk) 
  )
);

const movieApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(movieApp,
  document.getElementById('root')
);