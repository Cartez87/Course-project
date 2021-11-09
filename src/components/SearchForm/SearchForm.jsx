import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import './SearchForm.scss';
import { useDispatch } from 'react-redux';

const SearchForm = ({ searchMovie }) => {
  const [ query, setQuery ] = useState('');
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(query));
  }
 
  return (
    <form onSubmit={handleSubmit} className="search-form d-flex">
      <input 
        onChange={handleChange} 
        value={query}
        type="search" 
        className="form-control" 
        placeholder="What do you want to watch?"
      />
      <Button
        type="submit"
      >    
        Search
      </Button>
    </form>
  )
}

SearchForm.propTypes = {
  searchMovies: propTypes.func
}

export default SearchForm;