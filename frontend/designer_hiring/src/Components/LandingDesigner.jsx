import React from "react";
import "../Styles/landingdesigner.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingDesigner() {
  return (
    <>
      <div className="ld1">
        <h1 className="ldh1">Our Designers Are Here .....</h1>
        <Container fluid="md">
          <Row>
            <Col md={6} lg={4} className="mb-4">
             <Link to={'/designer'} > <img
                src="https://i.pinimg.com/564x/07/fc/c0/07fcc05c16899d6545cf153515f1603e.jpg"width={"200px"}height={"200px"} className="ldimg"
                alt=""
              /></Link>
              <h1 className="ldimgh1">Name</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingDesigner;
