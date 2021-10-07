import React from "react";
import { Modal } from 'react-bootstrap';
import { MODAL_TYPES } from '../../helper/constants';

import './Modal.scss';

const MyModal = ({children, modalType, ...props}) => {

  let title;
  if (modalType === MODAL_TYPES.ADD) {
    title = "ADD MOVIE";
  } else if (modalType === MODAL_TYPES.EDIT) {
    title = "EDIT MOVIE";
  } else if (modalType === MODAL_TYPES.DELETE) {
    title = "DELETE MOVIE";
  }

  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {children}
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;