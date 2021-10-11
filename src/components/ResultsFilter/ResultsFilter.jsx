import React from "react";
import propTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import './ResultsFilter.scss';

const menuItems = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime'
]

const ResultsFilter = ({ onFilterChange }) => {
 
  const onClick = (e) => {
    onFilterChange(e.target.innerText);
    e.preventDefault();
  }
  
  return (
      
    <nav className="category-nav">
      <Nav variant="pills" defaultActiveKey="All-0">
        {menuItems.map((menuItem, index) => 
          <Nav.Item key={`${menuItem}-${index}`}>
            <Nav.Link eventKey={`${menuItem}-${index}`} onClick={onClick}>{menuItem}</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </nav>
  );
}

ResultsFilter.propTypes = {
  onFilterChange: propTypes.func
}

export default ResultsFilter;