import React from "react";

const Movie = ({ movie }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h1>{movie.id}</h1>
            </div>
        </div>
    )
}

export default Movie;