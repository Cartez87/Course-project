import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
import filmsData from './filmsData';

import './App.scss';

const App = () => {

  const handleSearch = (search) => {
    console.log(search);
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
              >+ Add movie</Button>
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
                <ResultsFilter />
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <span className="by">Sort by</span>
                <ReleaseDateToggle />
              </Col>
            </Row>
            <Row>
              <h3><b>39</b> movies found</h3>
            </Row>
            <div className="movies-wrap">
              <Row>
                {filmsData.map(card => 
                  <Col key={card.id} md={4}>
                    <MovieCard 
                      card={card}
                      key={card.id}
                      cover={card.cover}
                      name={card.name}
                      year={card.year}
                      category={card.category}
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