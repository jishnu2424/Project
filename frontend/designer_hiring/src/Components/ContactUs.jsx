import React, { useState } from 'react';
import '../Styles/contactus.css';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function ContactUs() {
  const [Contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Contact.name === '' || Contact.email === '' || Contact.phone === "" || Contact.message === "") {
      alert("Complete the form");
      console.log(Contact);
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/contact/add", Contact);
      console.log(response);
      setContact({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container className='talktous'>
        <h1 style={{ fontWeight: "bold", textAlign: "center", marginTop: "50px" }}>Talk To Us...</h1>
        <div style={{ marginTop: "50px" }}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={Contact.name}
                  onChange={(e) => setContact({ ...Contact, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Number"
                  value={Contact.phone}
                  onChange={(e) => setContact({ ...Contact, phone: e.target.value })}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={Contact.email}
                  onChange={(e) => setContact({ ...Contact, email: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder='Type Something'
                rows={3}
                value={Contact.message}
                onChange={(e) => setContact({ ...Contact, message: e.target.value })}
              />
            </Form.Group>
            <Button className="conbtn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>

      <Container fluid className="contact-container">
        <Row>
          <Col md={6} className="contact-left">
            <h1>Contact Us</h1>
            <div className="contact-details">
              <div className="contact-item">
                <span role="img" aria-label="location">📍</span>
                <p>
                  AlphaDesigns <br />
                  #12/13 <br />
                  Calicut Olavanna  <br />
                  Calicut, Kerala
                </p>
              </div>
              <div className="contact-item">
                <span role="img" aria-label="phone">📞</span>
                <p>+91 987654321</p>
              </div>
              <div className="contact-item">
                <span role="img" aria-label="email">✉️</span>
                <p>alphadesigns2424@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.2221152189345!2d75.82387821480146!3d11.25648799202847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ab7f54ec4fd%3A0xb7b536e2e51621de!2sHiLITE%20Business%20Park%2C%20Calicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1628170535154!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="location"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
