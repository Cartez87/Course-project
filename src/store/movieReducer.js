import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES } from "./types"

const initialState = {
  fetchedMovies: [],
  sortBy: "release_date",
  sort: {
    value: '',
    label: '',
    order: ''
  },
  filter: ''
}

export const movieReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_MOVIES:
      return { ...state, fetchedMovies: payload}
    case FILTER_MOVIES:
      return { ...state, filter: payload}
    case SORT_MOVIES:
      return {...state, sort: payload }

    default: return state
  } 
}