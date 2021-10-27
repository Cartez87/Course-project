
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ResultsFilter from '../ResultsFilter';
import ReleaseDateToggle from '../ReleaseDateToggle';
import FetchedMovies from '../FetchedMovies';
import MoviesCount from '../MoviesCount';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const MainContent = () => {

  const countMovies = useSelector((state) => {
    return state.movies.fetchedMovies.data;
  });
  
  const dispatch = useDispatch();

  const selectedMovie = useSelector((state) => {
    return state.movies.selectedMovie;
  });

  // console.log(selectedMovie)

  useEffect(() => {
    dispatch(selectMovie(selectedMovie));
  }, [selectedMovie]);

  return (
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
          <MoviesCount count={countMovies?.length}/>
        </Row>
        <div className="movies-wrap">
          <FetchedMovies selectedMovie={selectedMovie}/>
        </div>
      </Container>
    </section>
  )
}

export default MainContent;