import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

const Movies = ({ syncMovies }) => {

    if(!syncMovies) {
        return <p className="text-center">asddasdasdas</p>
    }
    return syncMovies.map(movie => <Movie movie={movie} key={movie.id}/>)
}

const mapStateToProps = state => {
    return {
        syncMovies: state.movies.movies
    }
}

export default connect(mapStateToProps, null)(Movies);