import React from "react";
import propTypes from 'prop-types';
import { Search } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Logo from '../Logo';

import './MovieDetails.scss';

const MovieDetails = ({ details, backToSearch }) => {

    const { 
      id,
      poster_path, 
      title, 
      release_date, 
      genres, 
      vote_average, 
      runtime, 
      overview 
    } = details;

    return (
      <div id={id} className="movie-details">
        <Container>
          <div className="heading-panel d-flex justify-content-between align-items-center">
            <Logo />
            <button onClick={backToSearch} className="back-to-search"><Search /></button>
          </div>
          <Row>
            <Col sm={4}>
                <div className="movie-image"><img src={poster_path} alt={title} /></div>
            </Col>
            <Col sm={8}>
            <h3 className="movie-name d-flex align-items-center">{title} <span className="movie-rating">{vote_average}</span></h3> 
              <span className="movie-category">{genres.map((genre) => (<span key={`${id}-${genre}`}>{genre}, </span>))}</span>
              <div className="movie-info d-flex mb-4">
                  <span className="movie-year">{release_date}</span>
                  <span className="movie-duration">{runtime}</span>
              </div>
              <p className="movie-description">{overview}</p>
          </Col>
        </Row>
      </Container>
    </div>  
  );
};

MovieDetails.propTypes = {
  details: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    year: propTypes.number,
    category: propTypes.string,
    cover: propTypes.string,
    rating: propTypes.string,
    duration: propTypes.string,
    description: propTypes.string
  })
}

export default MovieDetails;
