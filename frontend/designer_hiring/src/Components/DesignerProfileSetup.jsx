import React, { useContext, useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import '../Styles/designerprofile.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/userAuth';
import axios from 'axios';

function DesignerProfileSetup() {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    number: currentUser?.number || '',
    workExperience: currentUser?.workExperience || '',
    projectCompleted: currentUser?.projectCompleted || '',
    aboutMe: currentUser?.aboutMe || '',
    monthlyInteraction: currentUser?.monthlyInteraction || '',
    skills:currentUser?.skills || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/designer/update/${currentUser._id}`, formData);
      updateUser(response.data);
      console.log('Update successful');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('logout');
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form className='ddform' onSubmit={updateHandler}>
        <img src="https://i.pinimg.com/564x/97/7e/56/977e568da382e808209b9294e0c0c10a.jpg" className='dserimg' width={"150px"} height={"150px"} alt="user profile" />
        <Button className='dlogout' onClick={handleLogout}>LogOut</Button>
        <Button className='ddelete'>Delete</Button>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className='ddff1'>Name</Form.Label>
            <Form.Control 
              className='ddf1'
              type="text"
              name="username"
              placeholder="Enter Name"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label className='ddff1'>Phone No</Form.Label>
            <Form.Control 
              className='ddf2'
              type="text"
              name="number"
              placeholder="Phone No"
              value={formData.number}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWorkExperience">
            <Form.Label className='ddff1'>Work Experience</Form.Label>
            <Form.Control 
              className='ddf1'
              type="number"
              name="workExperience"
              placeholder="Experience"
              value={formData.workExperience}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridProjectCompleted">
            <Form.Label className='ddff1'>Projects Completed</Form.Label>
            <Form.Control 
              className='ddf2'
              type="number"
              name="projectCompleted"
              placeholder="Project Count"
              value={formData.projectCompleted}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAboutMe">
            <Form.Label className='ddff1'>About Me</Form.Label>
            <Form.Control 
              as="textarea"
              name="aboutMe"
              placeholder='Type Something'
              className='ddfa'
              rows={3}
              value={formData.aboutMe}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMonthlyInteraction">
            <Form.Label className='ddff1'>Monthly Interactions</Form.Label>
            <Form.Control 
              className='ddf1'
              type="number"
              name="monthlyInteraction"
              placeholder="Interaction Count"
              value={formData.monthlyInteraction}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="Skills">
            <Form.Label className='ddff1'>Skills And Expertise</Form.Label>
            <Form.Control 
              as="textarea"
              name="skills"
              placeholder='Type Something'
              className='ddfa'
              rows={3}
              value={formData.skills}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button className='ddb1' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DesignerProfileSetup;
