import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";

import { fetchMovies } from "../store/actions";

const FetchedMovies = ()=> {
    const dispatch = useDispatch();
    const movies = useSelector((state) => {
        return state.movies.fetchedMovies;
    });

    if(!movies.length) {
        return <button 
                className="btn btn-primary" 
                onClick={() => dispatch(fetchMovies())}
            >Add Movies
        </button>
    }
    return movies.map(movie => <Movie movie={movie} key={movie.id} />)
}

export default FetchedMovies;