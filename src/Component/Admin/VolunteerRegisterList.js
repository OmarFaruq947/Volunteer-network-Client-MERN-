import React from "react";
import { Table } from "react-bootstrap";
import useAddVolunteers from "../Hooks/useAddVolunteers";
import AddVolunteer from "./AddEVolunteer";
import AdminData from "./AdminData";

const VolunteerRegisterList = () => {
  const [volunteerList, setVolunteerList] = useAddVolunteers();

  const volunteerDeleteHandler = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(
        `https://volunteer-network-by-omar.onrender.com/volunteersList/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = volunteerList.filter(
            (volunteer) => volunteer._id !== id
          );
          setVolunteerList(remaining);
        });
    }
  };

  return (
    <>
      {/* tables */}
      <Table striped bordered hover variant="success" className="tableData">
        <thead>
          <tr>
            <th colSpan={6}>
              Volunteer register list <AddVolunteer />
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registering date</th>
            <th>Volunteer Id</th>
            <th>Action</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {volunteerList.map((vp) => (
            <AdminData
              key={vp._id}
              person={vp}
              volunteerDeleteHandler={volunteerDeleteHandler}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default VolunteerRegisterList;
