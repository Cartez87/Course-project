import React from "react";

import './MovieCard.scss';

const MovieCard = (props) => {

    return(
        <div id={props.id} className="movie-card">
            <div className="movie-image"><img src={props.cover} alt={props.cover} /></div>
            <div className="movie-info">
                <div className="movie-name">
                    {props.name}
                </div>
                <div className="movie-year">
                    {props.year}
                </div>
            </div>
            <span className="category">{props.category}</span>
        </div>
    );
}

export default MovieCard;