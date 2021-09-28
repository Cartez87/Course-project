import React from "react";
import Select from 'react-select';

import './ReleaseDateToggle.scss';

const ReleaseDateToggle = () => {

  const options = [
    { value: 'year', label: 'Year' },
    { value: 'category', label: 'Category' },
    { value: 'date', label: 'Date' },
  ]
  
  return (
    <Select
      options={options}
      placeholder= 'release date'
    />
  );
}

export default ReleaseDateToggle;