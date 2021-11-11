
import React from 'react';
import { useSelector } from 'react-redux';

import ResultsFilter from '../ResultsFilter';
import ReleaseDateToggle from '../ReleaseDateToggle';
import FetchedMovies from '../FetchedMovies';
import MoviesCount from '../MoviesCount';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  Link
} from "react-router-dom";


const MainContent = () => {

  const countMovies = useSelector((state) => {
    return state.movies.fetchedMovies.data;
  });
  
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
          <FetchedMovies />
        </div>
      </Container>
    </section>
  )
}

export default MainContent;