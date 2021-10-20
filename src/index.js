import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.scss';
import App from './App';

const movieApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(movieApp,
  document.getElementById('root')
);