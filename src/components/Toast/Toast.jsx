import React, { useState } from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';
import MyModal from '../Modal';
import Form from "../Form";

import './Toast.scss';

const MovieToast = () => {

  const [modalShow, setModalShow] = useState(false);
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
            <li>
              <span onClick={() => setModalShow(true)}>Edit</span>
              <MyModal
                show={modalShow}
                title="Edit MOVIE"
                onHide={() => setModalShow(false)}
              >
                <Form />
              </MyModal>
            </li>
            <li>
              <span>Delete</span>
            </li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default MovieToast;


