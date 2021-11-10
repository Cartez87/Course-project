import React from 'react';
import { Link } from 'react-router-dom'

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="page-wrapper">
      <h1><span>404</span><br /> Page Not Found</h1>
      <Link className="back-link" to={'/search'}>
          Back Homepage
      </Link>
    </div>
  )  
}

export default NotFoundPage;