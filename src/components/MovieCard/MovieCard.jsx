import React from "react";
import propTypes from 'prop-types';
import MovieToast from '../Toast';

import './MovieCard.scss';

const MovieCard = ({ movie, chooseSelectedMovie }) => {
  const { id, title, poster_path, release_date, genres } = movie;
  
  return(
    <div id={id} className="movie-card" onClick={() => chooseSelectedMovie(movie)}>
      <div className="movie-image"><img src={poster_path} alt={title} /></div>
      <div className="movie-info d-flex justify-content-between align-items-start">
        <h3 className="movie-name">{title}</h3>
        <span className="movie-year">{release_date}</span>
      </div>
      <span className="movie-category">{genres.map(genre => `${genre}, ` )}</span>
      <MovieToast />
    </div>
  );
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    release_date: propTypes.string,
    genres: propTypes.array,
    poster_path: propTypes.string
  })
}

export default MovieCard;