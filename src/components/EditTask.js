import React, { useReducer, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTask } from "../js/todoSlice/TodoSlice";

const EditTask = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({ title: "", discription: "" });
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="in">
          <input
            type="text"
            placeholder="enter task title"
            onChange={(e) => {
              setedited({ ...edited, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="enter task"
            onChange={(e) => {
              setedited({ ...edited, description: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(updateTask({ id: id, edited }));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
