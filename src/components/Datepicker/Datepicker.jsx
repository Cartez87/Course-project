import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.scss';

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        placeholderText="Select Date"
      />
  );
};

export default CustomDatePicker;