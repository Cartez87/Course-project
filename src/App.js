import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from './components/Button';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import HeaderImage from './components/HeaderImage';
import Logo from './components/Logo';
import MovieCard from './components/MovieCard';
import ResultsFilter from './components/ResultsFilter';
import SearchForm from './components/SearchForm';
import ReleaseDateToggle from './components/ReleaseDateToggle';
import MyModal from './components/Modal';
import Form from './components/Form';

import filmsData from './filmsData';
import './App.scss';

const App = () => {

  const handleSearch = (search) => {
    console.log(search);
  }

  const [modalShow, setModalShow] = useState(false);

  const [data, setNewData] = useState(filmsData);
  // const [filteredData, setFilteredData] = useState(filmsData);

  
  const sortReleaseDate = (e) => {

    const sortData = data.map(item => item).sort((a, b) => {
      if(e.value === 'down to') {
        return a.year - b.year;
      }
      if(e.value === 'up to') {
        return b.year - a.year;
      }
      return 0;
    });

    setNewData(sortData);
  }

  const filterHandle = (e) => {
    let category = e.target.innerHTML;

    if(category === 'All') {
      return data;
    }

    const filtered = data.filter(film => category === film.category);
    setNewData(filtered);
  }


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
                  filterHandle={filterHandle}
                />
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <span className="sort-by">Sort by</span>
                <ReleaseDateToggle 
                  sortReleaseDate={sortReleaseDate}
                />
              </Col>
            </Row>
            <Row>
              <h3><b>39</b> movies found</h3>
            </Row>
            <div className="movies-wrap">
              <Row>
                {data.map(card => 
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