import React, { useEffect, useMemo, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useSelector, useDispatch } from "react-redux";

import {
  ErrorBoundary,
  Footer,
  ResultsFilter,
  ReleaseDateToggle,
  MovieDetails,
  Header,
  FetchedMovies
} from './components';

import filmsData from './filmsData';
import './App.scss';
import { SORT_CONST } from './helper/constants';

const App = () => {
  const [selectedMovie, chooseSelectedMovie] = useState(null);
  const [sortValue, setSortValue] = useState(null);
  const [filteredData, setFilteredData] = useState(filmsData || []);

  const sortReleaseDate = (data) => {
    // return data.map(item => item).sort((a, b) => {
    //   if(sortValue?.value === SORT_CONST.DOWN_TO) {
    //     return a.year - b.year;
    //   }
    //   if(sortValue?.value === SORT_CONST.UP_TO) {
    //     return b.year - a.year;
    //   }
    //   return 0;
    // });
  }

  const filterData = (currentVal) => {
    // if (currentVal.toLowerCase() === 'all') {
    //   setFilteredData(filmsData);
    //   return;
    // }
    // const filteredList = filmsData?.filter((film) => {
    //   return film?.category.toLowerCase() === currentVal.toLowerCase();
    // });

    // setFilteredData(filteredList);
  }

  // useEffect(() => {
  //   const sortedData = sortReleaseDate(filteredData);
  //   setFilteredData(sortedData);
  // }, [sortValue]);

  const movies = useSelector((state) => {
    return state.movies.fetchedMovies.data;
  });
  
  const currentDetails = useMemo(() => {
    return movies.find(film => film.id === selectedMovie);
    
  }, [selectedMovie]);
  
  // const dispatch = useDispatch();
  const backToSearch = () => {
    chooseSelectedMovie(null);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        { currentDetails ? 
        <MovieDetails
          key={currentDetails.id}
          details={currentDetails}
          backToSearch={backToSearch}
        />
         : <Header />
        }
        <section className="main-section">
          <Container>
            
            <Row className="filters-panel justify-content-between align-items-start">
              <Col>
                <ResultsFilter 
                  onFilterChange={filterData}
                  filmState={filteredData}
                />
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <span className="sort-by">Sort by</span>
                <ReleaseDateToggle
                  sortReleaseDate={setSortValue}
                  selectedOption={sortValue}
                  setSortValue={setSortValue}
                />
              </Col>
            </Row>
            <Row>
              <h3><b>{filmsData.length}</b> movies found</h3>
            </Row>
            <div className="movies-wrap">
              <FetchedMovies chooseSelectedMovie={chooseSelectedMovie}/>
              {/* <Row>
                {filteredData.map(card => 
                  <Col key={card.id} md={4}>
                    <MovieCard 
                      card={card}
                      chooseSelectedCard={() => chooseSelectedCard(card.id)}
                    />
                  </Col>
                )}
              </Row> */}
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
  
export default App;