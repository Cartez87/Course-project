import { FETCH_MOVIES } from "./types"

const initialState = {
    movies: [],
    fetchedMovies: []
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, fetchedMovies: action.payload}
    
        default: return state
    } 
}