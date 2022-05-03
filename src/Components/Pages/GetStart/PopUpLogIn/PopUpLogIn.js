import React from "react";
import { Button } from "react-bootstrap";
import GetStartPopUp from "./GetStartPopUp";

const PopUpLogIn = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <GetStartPopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default PopUpLogIn;
