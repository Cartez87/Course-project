import React from "react";
import { Link } from "react-router-dom";

import './Logo.scss';

const Logo = ({text, boldText}) => {

  return (
    <div className="logo">
      <Link to="/"><strong>{text}</strong>{boldText}</Link>
    </div>
  )
}

export default Logo;