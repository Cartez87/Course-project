import { FETCH_MOVIES } from "./types";

export const fetchMovies = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:4000/movies');
        const json = await response.json();
        dispatch({type: FETCH_MOVIES, payload: json});
    }
}