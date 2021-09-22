import React from 'react';
import './App.scss';
import HeaderImage from './components/HeaderImage';
import SearchForm from './components/SearchForm';
import Toggle from './components/Toggle';
import Logo from './components/Logo';
import MovieCard from './components/MovieCard';
import Button from './components/Button';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResultsFilter from './components/ResultsFilter';
import filmsData from './filmsData';

function App() {

    function handleSearch(search) {
        console.log(search);
    }
  
    return (
      <div className="App">
        <div className="header-section">
         <HeaderImage />
          <Container>
            <Row className="top-panel justify-content-between align-items-center">
              <Logo />
              <Button 
                color="SECONDARY"
                children='+ Add movie'
              ></Button>
            </Row>
            <Row className="form-wrap">
              <h1>FIND YOUR MOViE</h1>
              <SearchForm
                onSearch={handleSearch}
              />
            </Row>
          </Container>
        </div>

        <div className="main-section">
          <Container>
            <Row className="filters-panel justify-content-between align-items-center">
              <Col>
                <ResultsFilter />
              </Col>
            </Row>
        
        
            {filmsData.map(card => 
              <MovieCard 
                card={card}
                key={card.id}
                cover={card.cover}
                name={card.name}
                year={card.year}
                category={card.category}
              />
            )}
          </Container>

        </div>

        {/* <Toggle /> */}

      
        <Footer />
      </div>
    );
  }
  
export default App;