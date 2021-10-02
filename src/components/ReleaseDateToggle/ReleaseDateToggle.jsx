import React from "react";
import Select from 'react-select';

import './ReleaseDateToggle.scss';

const ReleaseDateToggle = ({ sortReleaseDate }) => {

  const options = [
    { value: 'up to', label: 'Up to' },
    { value: 'down to', label: 'Down to' },
  ]
  
  return (
    <Select
      options={options}
      placeholder= 'release date'
      onChange={sortReleaseDate}
    />
  );
}

export default ReleaseDateToggle;