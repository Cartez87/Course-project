import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectMovie } from './store/movieActions';
import {
  ErrorBoundary,
  Footer,
  MovieDetails,
  Header,
  MainContent
} from './components';

import { useLocation } from "react-router-dom";
import { getSearchMovies, getSortedFilteredFilms } from './services/movieService';
import './App.scss';

const App = () => {
  const url = useLocation();
  const dispatch = useDispatch();
  
  const selectedMovie = useSelector((state) => {
    return state.movies.selectedMovie;
  });

  const backToSearch = () => {
    dispatch(selectMovie(null))
  };

  if(url.pathname === "/search") {
    getSearchMovies('');
  }else {
    getSortedFilteredFilms();
  }

  return (
    <ErrorBoundary>
      <div className="App">
        { selectedMovie ? 
        <MovieDetails
          key={selectedMovie.id}
          details={selectedMovie}
          backToSearch={backToSearch}
        />
         : <Header />
        }
        <MainContent />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
  
export default App;