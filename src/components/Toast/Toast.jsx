import React, { useState } from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';
import MyModal from '../Modal';
import Form from "../Form";
import Button from "../Button";
import { MODAL_TYPES } from '../../helper/constants';

import './Toast.scss';

const MovieToast = () => {

  const [modalEdit, setModalEdit] = useState({
    showModal: false,
    modalType: null
  });

  const [modalDelete, setModalDelete] = useState({
    showModal: false,
    modalType: null
  });

  const [show, setShow] = useState(true);
  const toggleShow = (e) => {
    e.stopPropagation();
    setShow(!show);
  } 

  const handleEdit = () => {
    setModalEdit({
      showModal: true,
      modalType: MODAL_TYPES.EDIT
    });
  }

  const handleDelete = () => {
    setModalDelete({
      showModal: true,
      modalType: MODAL_TYPES.DELETE
    });
  }

  return (
    <div className="toast-wrap">
      <button className="toggle-toast-btn" onClick={toggleShow}>
        <ThreeDotsVertical />
      </button>
      <Toast onClose={toggleShow} onBlur={toggleShow} show={!show}>
        <Toast.Header />
        <Toast.Body>
          <ul className="edit-list list-unstyled mb-0 p-0">
            <li>
              <span onClick={handleEdit}>Edit</span>
              <MyModal
                show={modalEdit.showModal}
                title="EDIT MOVIE"
                size="lg"
                onHide={() => setModalEdit(false)}
              >
                <Form />
              </MyModal>
            </li>
            <li>
              <span onClick={handleDelete}>Delete</span>
              <MyModal
                show={modalDelete.showModal}
                title="DELETE MOVIE"
                size="md"
                description="Are you sure you want to delete this movie?"
                onHide={() => setModalDelete(false)}
                >
                <Button 
                  color="PRIMARY"
                >Confirm</Button>
              </MyModal>
            </li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default MovieToast;


