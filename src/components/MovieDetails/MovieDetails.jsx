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
        cover, 
        name, 
        year, 
        category, 
        rating, 
        duration, 
        description 
    } = details;

    return (
      <div id={id} className="movie-details">
        <Container>
          <div className="heading-panel d-flex justify-content-between align-items-center">
            <Logo />
            <span onClick={backToSearch} className="back-to-search"><Search /></span>
          </div>
          <Row>
            <Col sm={4}>
                <div className="movie-image"><img src={cover} alt={cover} /></div>
            </Col>
            <Col sm={8}>
            <h3 className="movie-name d-flex align-items-center">{name} <span className="movie-rating">{rating}</span></h3> 
              <span className="movie-category">{category}</span>
              <div className="movie-info d-flex mb-4">
                  <span className="movie-year">{year}</span>
                  <span className="movie-duration">{duration}</span>
              </div>
              <p className="movie-description">{description}</p>  
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

