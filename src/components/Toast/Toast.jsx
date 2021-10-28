import React, { useState, useCallback } from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import MyModal from '../Modal';
import Form from "../customForm";
import Button from "../Button";
import { MODAL_TYPES } from '../../helper/constants';
import { deleteMovie, fetchMovies } from "../../store/movieActions";

import './Toast.scss';

const MovieToast = ({id}) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true); 
  const toggleShow = (e) => {
    e.stopPropagation();
    setShow(!show);
  } 

  const [modalEdit, setModalEdit] = useState({
    showModal: false,
    modalType: null
  });

  const [modalDelete, setModalDelete] = useState({
    showModal: false,
    modalType: null
  });
  
  const handleEdit = useCallback(() => {
    setModalEdit({
      showModal: true,
      modalType: MODAL_TYPES.EDIT
    });
  }, []);
 
  const handleDelete = useCallback(() => {
    setModalDelete({
      showModal: true,
      modalType: MODAL_TYPES.DELETE
    });
  }, []);

  const { filter, sort } = useSelector((state) => {
    const { filter, sort } = state.movies;
    return {
      filter,
      sort,
    };
  });
 
  const handleClick = () => {
    dispatch(deleteMovie(id));
    dispatch(fetchMovies(filter, sort.order));
  }

  return (
    <div className="toast-wrap">
      <button className="toggle-toast-btn" onClick={toggleShow}>
        <ThreeDotsVertical />
      </button>
      <Toast onClose={toggleShow} onClick={e => e.stopPropagation()} onBlur={toggleShow} show={!show}>
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
                  onClick={handleClick}
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


