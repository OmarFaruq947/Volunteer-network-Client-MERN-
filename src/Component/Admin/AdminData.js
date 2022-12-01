import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AdminData = ({ person, volunteerDeleteHandler }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { first_name, email, resistingDate, volunteerId, _id } = person;

  const [volunteer, setVolunteer] = useState({});

  useEffect(() => {
    fetch(`https://volunteer-network-by-omar.onrender.com/volunteersList${_id}`)
      .then((res) => res.json())
      .then((data) => setVolunteer(data));
  });

  //updateVolunteerHandler
  const updateVolunteerHandler = (e) => {
    e.preventDefault();
    const first_name = e.target.name.value;
    const email = e.target.email.value;
    const resistingDate = e.target.date.value;
    const volunteerId = e.target.volunteerId.value;
    const volunteerData = { first_name, email, resistingDate, volunteerId };

    // send data
    fetch(
      `https://volunteer-network-by-omar.onrender.com/volunteersList${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        alert("users added successfull !!");
        e.target.reset();
      });
  };
  return (
    <>
      <tr>
        <td>{first_name}</td>
        <td>{email}</td>
        <td>{resistingDate}</td>
        <td>{volunteerId}</td>
        <td>
          <img
            onClick={() => volunteerDeleteHandler(_id)}
            className="trashAndUpdateBtn"
            src="https://www.svgrepo.com/show/352601/trash.svg"
            alt=""
          />
        </td>
        <td>
          <Button variant="AddBtn" onClick={handleShow}>
            <img
              onClick={() => updateVolunteerHandler(_id)}
              className="plus"
              src="https://www.svgrepo.com/show/158371/edit.svg"
              alt=""
            />
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Volunteer Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input type="text" name="name" placeholder="name" required />

                <input type="email" name="email" placeholder="email" required />

                <input
                  type="text"
                  name="date"
                  value={resistingDate}
                  disabled
                  readOnly
                  required
                />

                <input
                  type="text"
                  name="volunteerId"
                  value={volunteerId}
                  disabled
                  readOnly
                  required
                />

                <input
                  className="w-25 mx-auto btn btn-primary mt-2"
                  type="submit"
                  value="Update Data"
                />
              </form>
            </Modal.Body>
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default AdminData;
