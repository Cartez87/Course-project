import React from "react";
import { Link } from "react-router-dom";

import './Logo.scss';

const Logo = () => {

  return (
    <div className="logo">
      <Link to="/"><strong>netflix</strong>roulette</Link>
    </div>
  )
}

export default Logo;