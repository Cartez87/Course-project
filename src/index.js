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
import MovieDetails from './components/MovieDetails';

const movieApp = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<App />} />
        <Route path="/" element={<Navigate replace to="/search" />} />
        
        {/* <Route path="movie-details/*" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(movieApp,
  document.getElementById('root')
);