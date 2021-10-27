import React, { useEffect, useState } from 'react';
import { selectMovie } from './store/movieActions';

import {
  ErrorBoundary,
  Footer,
  MovieDetails,
  Header,
  MainContent
} from './components';

import './App.scss';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  // const [currentMovie, setCurrentMovie] = useState(null);
 
  const backToSearch = () => {
    selectedMovie(null);
  };

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