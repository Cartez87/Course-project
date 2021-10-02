import React, { useState } from "react";

import './ResultsFilter.scss';

const ResultsFilter = ({ filterHandle }) => {
  
  const [appState, setState] = useState({
    activeState: 'All'
  });

  const menuItems = [
    'All',
    'Documentary',
    'Comedy',
    'Horror',
    'Crime'
  ]
  
  const toggleActive = (index) => { 
    setState({activeState: menuItems[index]});
  }

  const toggleActiveClass = (index) => {
    const classname = "menu-item";
    if(menuItems[index] === appState.activeState) {
      return classname + " active";
    } else {
      return classname;
    }
  }
  
  return (
      
    <nav className="category-nav">
      <ul>
        {menuItems.map((menuItem, index) => 
          <li key={index} onClick={() => toggleActive(index)} className={toggleActiveClass(index)}>
            <span onClick={filterHandle}>{menuItem}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default ResultsFilter;