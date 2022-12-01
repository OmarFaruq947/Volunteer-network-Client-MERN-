import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carosul from "../header/Carosul";
import useVolunteers from "../Hooks/useVolunteers";
import Search from "../Search/Search";
import Volunteer from "./Volunteer";
import "./Volunteers.css";

const Volunteers = () => {
  const [volunteers] = useVolunteers();

  return (
    <>
      <Carosul />
      <br />
      <Search />
      <br />
      <br />
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {
           volunteers.map(person => <Volunteer key={person._id} person={person}/>) 
          }
        </Row>
      </Container>
    </>
  );
};

export default Volunteers;
