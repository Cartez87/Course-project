import React, { useState } from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';

import './Toast.scss';

const MovieToast = () => {

  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <div className="toast-wrap">
      <button className="toggle-toast-btn" onClick={toggleShow}>
        <ThreeDotsVertical />
      </button>
      <Toast onClose={toggleShow} show={!show}>
        <Toast.Header />
        <Toast.Body>
          <ul className="edit-list list-unstyled mb-0 p-0">
            <li><span>Edit</span></li>
            <li><span>Delete</span></li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default MovieToast;


