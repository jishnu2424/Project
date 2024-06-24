import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import '../Styles/designadd.css'
import { Link } from 'react-router-dom';

function DesignAdd() {
  const [design, setDesign] = useState({
    designType: "",
    designerName: "",
    designName: "",
    designDescription: ""
  });

  const addHandler = async () => {
    try {
      const add = await axios.post('http://localhost:5000/design/add', design);
      console.log(add);
      setDesign({
        designType: "",
        designerName: "",
        designName: "",
        designDescription: ""
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesign(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <Form className='daform'>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label className='daff1'>Add Design</Form.Label>
          <Form.Control className='dadf2' type="file" placeholder="ADD DESIGN" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDesignName">
            <Form.Label className='daff1'>Design Name</Form.Label>
            <Form.Control
              className='daf2'
              type="text"
              placeholder="Design Name"
              name="designName"
              value={design.designName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formDesignerName">
            <Form.Label className='daff1'>Designer Name</Form.Label>
            <Form.Control
              className='daf2'
              type="text"
              placeholder="Designer Name"
              name="designerName"
              value={design.designerName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDesignDescription">
            <Form.Label className='ddaff1'>Design Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder='Description'
              className='ddfa'
              rows={3}
              name="designDescription"
              value={design.designDescription}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDesignType">
            <Form.Label className='daff1'>Design Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className='daf2'
              name="designType"
              value={design.designType}
              onChange={handleChange}
            >
              <option>Select Type</option>
              <option value="Painting">Painting</option>
              <option value="Electronic Art">Electronic Art</option>
              <option value="Drawing">Drawing</option>
              <option value="Wall Painting">Wall Painting</option>
              <option value="AI Arts">AI Arts</option>
              <option value="Contemporary Art">Contemporary Art</option>
              <option value="Pencil Drawing">Pencil Drawing</option>
              <option value="Modern Art">Modern Art</option>
              <option value="Others">Others</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" className='dab1' type="button" onClick={addHandler}>
          Add Design
        </Button>
        <Link to={'/designerhome'}><Button className='dab1'>Back to Home</Button></Link>
      </Form>
    </>
  )
}

export default DesignAdd
