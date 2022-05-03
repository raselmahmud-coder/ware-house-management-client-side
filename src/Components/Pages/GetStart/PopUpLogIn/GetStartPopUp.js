import React from "react";
import { Modal } from "react-bootstrap";
import LogIn from "../LogIn"

const GetStartPopUp = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <LogIn/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GetStartPopUp;
