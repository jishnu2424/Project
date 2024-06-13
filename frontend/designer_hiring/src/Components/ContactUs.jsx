import React from 'react'
import '../Styles/contactus.css'
import { Button, Col, Form, Row } from 'react-bootstrap'

function ContactUs() {
  return (
    <>

    <div className='talktous'>
        <h1 style={{fontWeight:"bold",textAlign:"center" ,marginTop:"50px"}}>Talk To Us...</h1>
        <div style={{width:"1400px" ,marginLeft:"70px",marginTop:"50px"}}> 
        <Form action="">
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter LastName" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" wu />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
        </div>

    </div>
    <div className="contact-container">
      <div className="contact-left">
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
      </div>
      <div className="contact-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.2221152189345!2d75.82387821480146!3d11.25648799202847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ab7f54ec4fd%3A0xb7b536e2e51621de!2sHiLITE%20Business%20Park%2C%20Calicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1628170535154!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title='abc'
        ></iframe>
      </div>
    </div>
    </>
  )
}

export default ContactUs