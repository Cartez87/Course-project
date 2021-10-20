import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchMovies } from "../store/movieActions";

const FetchedMovies = ({ onMovieClick })=> {
	const dispatch = useDispatch();
	const { movies, filter, sort } = useSelector((state) => {
		const { fetchedMovies, filter, sort } = state.movies;
		return {
			movies: fetchedMovies.data,
			filter,
			sort,
		};
	});

	useEffect(() => {
		dispatch(fetchMovies(filter, sort?.order))
	}, [filter, sort]);
  
	if(!movies?.length) {
		return <span>Don't have films yet!</span>
	}
  
	return (
		<Row>
			{movies.map(movie => 
					<Col key={movie.id} md={4}>
						<MovieCard 
							movie={movie}
							chooseSelectedMovie={onMovieClick}
						/>
					</Col>
				)
			}
		</Row>
	)   
}

export default FetchedMovies;