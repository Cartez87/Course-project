import React from "react";
import Select from 'react-select';
import { SORT_CONST } from "../../helper/constants";

import './ReleaseDateToggle.scss';

const options = [
  { value: SORT_CONST.UP_TO, label: 'Up to' },
  { value: SORT_CONST.DOWN_TO, label: 'Down to' },
]

const ReleaseDateToggle = ({ selectedOption = null, setSortValue }) => {
  
  const onSelect = (selectedOptObj) => {
    setSortValue(selectedOptObj);
  }

  return (
    <Select
      options={options}
      placeholder= 'release date'
      onChange={onSelect}
      value={selectedOption}
    />
  );
}

export default ReleaseDateToggle;