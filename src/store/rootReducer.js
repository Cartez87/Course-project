import { combineReducers } from "redux";
import { RootState } from 'react-redux';
import { movieReducer } from './movieReducer';

const rootReducer = combineReducers({
    movies: movieReducer
});

export default rootReducer;