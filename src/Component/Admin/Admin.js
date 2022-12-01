import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AddBlog from "./AddBlog";
import AddClub from "./AddClub";
import AddDonation from "./AddDonation";
import AddEvent from "./AddEvent";
import AddFaq from "./AddFaq";
import "./Admin.css";
import VolunteerRegisterList from "./VolunteerRegisterList";

const Admin = () => {
  return (
    <div className="admin_page">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Volunteer register list</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Add Event</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Add Club</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth">Add Donation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Add Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="six">Add Faq</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <VolunteerRegisterList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <AddEvent />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <AddClub />
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                <AddDonation />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <AddBlog />
              </Tab.Pane>
              <Tab.Pane eventKey="six">
                <AddFaq />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Admin;
