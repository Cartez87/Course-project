import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES } from "./types";

const apiUrl = "http://localhost:4000/movies";

export const fetchMovies = () => {
    return async dispatch => {
        const response = await fetch(`${apiUrl}`);
        const json = await response.json();
        dispatch({type: FETCH_MOVIES, payload: json});
    }
}

export const filterMovies = (filterStr) => {
    return async dispatch => {
        const response = await fetch(`${apiUrl}?filter=${filterStr}&sortBy=${sortBy}$sortOrder=${sortOrder}`);
        const json = await response.json();
        dispatch({type: FILTER_MOVIES, payload: json});
    }
}

export const selectSortBy = (sortBy, sortOrder, filter) => {
    return async dispatch => {
        const response = await fetch(`${apiUrl}?sortBy=${sortBy}&{sortOrder}=${sortOrder}&{filter}=${filter}`);
        const json = await response.json();
        dispatch({type: SORT_MOVIES, payload: json});
    }
}