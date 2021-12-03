import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

import './Toggle.scss';

const Toggle = ({placeholder, showCheckbox}) => {

  const [state, setState] = useState({
    selectOptions: [
      { option: "Crime" },
      { option: "Documentary" },
      { option: "Horror" },
      { option: "Comedy" },
    ],
    selectedOptions: [
      { option: "Crime" },
      { option: "Comedy" }
    ]
  })

  const { selectOptions, selectedOptions } = state;

  return(
    <Multiselect
        options={selectOptions}
        displayValue="option"
        showCheckbox={showCheckbox}
        selectedValues={selectedOptions}
        placeholder={placeholder}
        showArrow
    />
  )
}

export default Toggle;