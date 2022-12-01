import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClubModal from "../Modal/ClubModal";


const Volunteer = ({ person }) => {
  const { name,logo,description } = person;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Card style={{ width: "16rem" }} className="mx-2">
        <Card.Img variant="top" src={logo} style={{ width: 230, height: 200 }} className="mt-2"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description && description.slice(0,50) }</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
          Read More
        </Button>

        <ClubModal person={person} show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Volunteer;

