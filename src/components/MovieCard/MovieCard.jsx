import React from "react";
import propTypes from 'prop-types';
import MovieToast from '../Toast';

import './MovieCard.scss';

const MovieCard = ({ id, cover, name, year, category }) => {

    return(
      <div id={id} className="movie-card">
        <div className="movie-image"><img src={cover} alt={cover} /></div>
        <div className="movie-info d-flex justify-content-between align-items-start">
          <div className="movie-name">
            {name}
          </div>
          <div className="movie-year">
            {year}
          </div>
        </div>
        <span className="movie-category">{category}</span>
        <MovieToast />
    </div>
  );
}

MovieCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  year: propTypes.number,
  category: propTypes.string,
  cover: propTypes.string
}

export default MovieCard;