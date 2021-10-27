import { FETCH_MOVIES, FILTER_MOVIES, SORT_MOVIES, SELECT_MOVIE } from "./types"

const initialState = {
  fetchedMovies: [],
  sortBy: "release_date",
  sort: {
    value: '',
    label: '',
    order: ''
  },
  filter: '',
  selectedMovie: null
}

export const movieReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_MOVIES:
      return { ...state, fetchedMovies: payload}
    case FILTER_MOVIES:
      return { ...state, filter: payload}
    case SORT_MOVIES:
      return {...state, sort: payload }
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: state.fetchedMovies.find(movie => movie.id === payload.id)
      }
    default: return state
  }
}
