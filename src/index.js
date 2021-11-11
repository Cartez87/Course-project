import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import NotFoundPage from './pages/NotFoundPage';
import store from './store/store';
import './index.scss';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const movieApp = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<App />} >
          <Route path=":searchQuery" element={<App />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(movieApp,
  document.getElementById('root')
);