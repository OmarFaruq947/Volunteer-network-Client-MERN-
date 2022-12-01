import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DonateInstitute from "./DonateInstitute ";
import "./Donation.css";
import DonationModal from "./DonationModal";

const Donation = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      

      <Container>
<Row sm={1} md={2} lg={3} className="g-3 mt-5">
<DonateInstitute />
<DonateInstitute />
<DonateInstitute />
<DonateInstitute />
</Row>

        
      </Container>

      <section className="body_donation">
        <div className="container_donation">
          <h1>
            Making the <code>&lt;details&gt;</code> element look and behave like
            a modal
          </h1>
          <p>
            By nesting a modal inside a details element it is automaticly shown
            when the details is opened. And by nesting the overlay inside the
            summary element, we can use that to trigger a close.
          </p>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Read More
          </Button>
          <DonationModal show={modalShow} onHide={() => setModalShow(false)} />
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Donation;
