import React from "react";
import { Nav } from 'react-bootstrap';
import './ResultsFilter.scss';

const noop = () => {};
  
const menuItems = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime'
]

const ResultsFilter = ({ filmState = [], onFilterChange = noop }) => {
 
  const onClick = (e) => {
    onFilterChange(e.target.innerText);
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

export default ResultsFilter;