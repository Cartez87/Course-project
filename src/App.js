import React from 'react';
import './App.scss';
import HeaderImage from './components/HeaderImage';
// import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import Toggle from './components/Toggle';
import Logo from './components/Logo';
import Button from './components/Button';


function App() {

    function handleSearch(search) {
        console.log(search);
    }
  
    return (
      <div className="App">
        <div className="header-section">
         <HeaderImage />
          <div className="container">
            <div className="top-panel d-flex justify-content-between align-items-center">
              <Logo />
              <Button>+ Add movie</Button>
            </div>
            <div className="form-wrap">
              <h1>FIND YOUR MOViE</h1>
              <SearchForm 
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>
        <Toggle />
  
      </div>
    );
  }
  
export default App;