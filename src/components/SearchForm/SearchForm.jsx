import React, { useState } from 'react';
import Button from '../Button';

import './SearchForm.scss';

function SearchForm({ onSearch }) {

  const [ query, setQuery ] = useState({ text: "" });

  function onChange(e) {
    const newQuery = { text: e.target.value };
    setQuery(newQuery);
  }

  function handleSearch() {
    onSearch({ text: query.text });
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

export default SearchForm;