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

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, fetchedMovies: action.payload}
    case FILTER_MOVIES:
      return { ...state, filter: action.payload}
    case SORT_MOVIES:
      return {...state, sort: action.payload }

    default: return state
  } 
}