import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  ErrorBoundary,
  Footer,
  ResultsFilter,
  ReleaseDateToggle,
  MovieDetails,
  Header,
  FetchedMovies
} from './components';

import './App.scss';

const App = () => {
  const [currentMovie, setCurrentMovie] = useState(null);
   
  const backToSearch = () => {
    setCurrentMovie(null);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        { currentMovie ? 
        <MovieDetails
          key={currentMovie.id}
          details={currentMovie}
          backToSearch={backToSearch}
        />
         : <Header />
        }
        <section className="main-section">
          <Container>
            
            <Row className="filters-panel justify-content-between align-items-start">
              <Col>
                <ResultsFilter />
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <span className="sort-by">Sort by</span>
                <ReleaseDateToggle />
              </Col>
            </Row>
            <Row>
              <h3><b> </b> movies found</h3>
            </Row>
            <div className="movies-wrap">
              <FetchedMovies onMovieClick={setCurrentMovie}/>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
  
export default App;