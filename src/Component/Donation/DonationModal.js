import React from "react";
import Modal from "react-bootstrap/Modal";

const DonationModal = (props) => {

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>ppppppppppp</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DonationModal;
