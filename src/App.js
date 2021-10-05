import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  Button,
  ErrorBoundary,
  Footer,
  HeaderImage,
  Logo,
  MovieCard,
  ResultsFilter,
  SearchForm,
  ReleaseDateToggle,
  MyModal,
  Form 
} from './components';

import handleSearch from './helper/utils/handleSearch';

import filmsData from './filmsData';
import './App.scss';
import { SORT_CONST } from './helper/constants';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [sortValue, setSortValue] = useState(null);
  const [filteredData, setFilteredData] = useState(filmsData || []);

  const sortReleaseDate = (data) => {
    return data.sort((a, b) => {
      if(sortValue?.value === SORT_CONST.DOWN_TO) {
        return a.year - b.year;
      }
      if(sortValue?.value === SORT_CONST.UP_TO) {
        return b.year - a.year;
      }
      return 0;
    });
  }

  const filterData = (currentVal) => {
    if (currentVal.toLowerCase() === 'all') {
      setFilteredData(filmsData);
      return;
    }
    const filteredList = filmsData?.filter((film) => {
      return film?.category.toLowerCase() === currentVal.toLowerCase();
    });

    setFilteredData(filteredList);
  }

  useEffect(() => {
    const sortedData = sortReleaseDate(filteredData);
    setFilteredData(sortedData);
  }, [sortValue]);

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="header-section">
          <HeaderImage />
          <Container>
            <div className="top-panel d-flex justify-content-between align-items-center">
              <Logo />
              <Button 
                color="SECONDARY"
                onClick={() => setModalShow(true)}
              >+ Add movie</Button>
              <MyModal
                show={modalShow}
                size="lg"
                title="ADD MOVIE"
                onHide={() => setModalShow(false)}
                >
              <Form />
            </MyModal>
            </div>
            <div className="form-wrap">
              <h1>FIND YOUR MOViE</h1>
              <SearchForm
                onSearch={handleSearch}
              />
            </div>
          </Container>
        </div>

        <div className="main-section">
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
                  selectedOption={sortValue}
                  setSortValue={setSortValue}
                />
              </Col>
            </Row>
            <Row>
              <h3><b>39</b> movies found</h3>
            </Row>
            <div className="movies-wrap">
              <Row>
                {filteredData.map(card => 
                  <Col key={card.id} md={4}>
                    <MovieCard 
                      card={card}
                    />
                  </Col>
                )}
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
  
export default App;