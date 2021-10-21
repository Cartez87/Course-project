import { getSortedFilteredFilms } from "../services/movieService";
import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES } from "./types";

export const fetchMovies = (filter='', sortOrder='') => {
  return async dispatch => {
    const data = await getSortedFilteredFilms(filter, sortOrder);
    dispatch({type: FETCH_MOVIES, payload: data});
  }
}

export const filterMovies = (filter) => {
  return {
    type: FILTER_MOVIES, 
    payload: filter
  }
}

export const sortMovies = (sortOrder) => {
  return {
    type: SORT_MOVIES, 
    payload: sortOrder
  }
}