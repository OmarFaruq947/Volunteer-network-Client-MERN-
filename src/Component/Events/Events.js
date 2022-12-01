import React from "react";
import { Container, Row } from "react-bootstrap";
import eventPic from '../img/images/extraVolunteer.png';
import "./Event.css";

const Events = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="events">

            
            <div className="events_item">
                <img src={eventPic} alt="" />
                <div className="events_info">
                    <div>
                    <h6>Humanity More</h6>
                    <p>29 sep, 2022</p>
                    </div>
                    <button className="events_btn">Cancel</button>
                </div>
            </div>

            <div className="events_item">
            <img src={eventPic} alt="" />
                <div className="events_info">
                    <div>
                    <h6>Humanity More</h6>
                    <p>29 sep, 2022</p>
                    </div>
                    <button className="events_btn">Cancel</button>
                </div>
            </div>

            <div className="events_item">
            <img src={eventPic} alt="" />
                <div className="events_info">
                    <div>
                    <h6>Humanity More</h6>
                    <p>29 sep, 2022</p>
                    </div>
                    <button className="events_btn">Cancel</button>
                </div>
            </div>

            <div className="events_item">
            <img src={eventPic} alt="" />
                <div className="events_info">
                    <div>
                    <h6>Humanity More</h6>
                    <p>29 sep, 2022</p>
                    </div>
                    <button className="events_btn">Cancel</button>
                </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
