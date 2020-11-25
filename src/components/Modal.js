import React from "react";
import { Modal } from "react-bootstrap";

const Popup = ({ handleClose, show, modaldata }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {modaldata.location ? (
              <p>
                {modaldata.location.street.name} <br />
                {modaldata.location.state}
                <br />
                {modaldata.location.city}
                <br />
                {modaldata.location.country} <br />
                {modaldata.location.postcode}
                <br />
                {modaldata.cell}
                <br />
                {modaldata.phone}
              </p>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <div className="cursor-pointer"></div>
      </Modal>
    </>
  );
};

export default Popup;
