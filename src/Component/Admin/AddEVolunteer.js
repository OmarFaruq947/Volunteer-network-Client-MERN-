import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddEVolunteer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { newVolunteer, setNewVolunteer } = useState([]);

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    const first_name = e.target.name.value;
    const email = e.target.email.value;
    const resistingDate = e.target.date.value;
    const volunteerId = e.target.VolunteerId.value;
    const volunteerData = { first_name, email, resistingDate, volunteerId };

    // send data

    fetch("https://volunteer-network-by-omar.onrender.com/volunteersList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(volunteerData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Button variant="AddBtn" onClick={handleShow}>
        <img
          className="plus"
          src="https://www.svgrepo.com/show/138888/plus.svg"
          alt=""
        />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Volunteer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={fromSubmitHandler}>
            <label for="fname">Volunteer Name</label>
            <input type="text" name="name" placeholder="Name" required />

            <label for="lname">Volunteer Email</label>
            <input type="email" name="email" placeholder="Email" required />

            <label for="lname">Registering date</label>
            <input type="text" name="date" placeholder="date" required />

            <label for="lname">Volunteer Id</label>
            <input
              type="text"
              name="VolunteerId"
              placeholder="Volunteer Id"
              required
            />

            <input
              className="w-25 mx-auto btn btn-primary mt-2"
              type="submit"
              value="Add volunteer"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddEVolunteer;
