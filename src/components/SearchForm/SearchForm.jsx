import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import './SearchForm.scss';

const SearchForm = ({ onSearch }) => {

  const [ query, setQuery ] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <form className="search-form d-flex">
      <input 
        type="text" 
        onChange={onChange} 
        className="form-control" 
        placeholder="What do you want to watch?"
      />
      <Button
        onClick={handleSearch} 
        type="button"
      >    
        Search
      </Button>
    </form>
  )
}

SearchForm.propTypes = {
  onSearch: propTypes.func
}

export default SearchForm;