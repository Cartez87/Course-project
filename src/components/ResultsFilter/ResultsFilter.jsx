import React, { useState } from "react";

import './ResultsFilter.scss';


const ResultsFilter = () => {
  
  const [ appState, setState] = useState({
    activeState: 'all'
  });

  const menuItems = [
    'all',
    'Documentary',
    'Comedy',
    'Horror',
    'crime'
  ]

  const toggleActive = (index) => { 
    setState({activeState: menuItems[index]});
  }

  const toggleActiveClass = (index) => {
    if(menuItems[index] === appState.activeState) {
      return "menu-item active";
    } else {
      return "menu-item";
    }
  }
  
  return (
      
    <nav className="category-nav">
      <ul>
        {menuItems.map((menuItem, index) => 
          <li key={index} onClick={() => toggleActive(index)} className={toggleActiveClass(index)}>
            {menuItem}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default ResultsFilter;