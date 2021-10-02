import React from "react";
import { Modal } from 'react-bootstrap';

import './Modal.scss';

const MyModal = ({children, ...props}) => {

  return (
    <Modal
      {...props}
      size="lg"
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