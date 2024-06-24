import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../Styles/userdash.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/userAuth';
import axios from 'axios';

function UserDashBoard() {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  
  // Create a state to hold form data
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    number: currentUser?.number || ''
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
      const response = await axios.patch(`http://localhost:5000/user/update/${currentUser._id}`, formData);
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
      updateUser(null);
      console.log('logout');
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form className='udform' onSubmit={updateHandler}>
        <img src="https://i.pinimg.com/564x/97/7e/56/977e568da382e808209b9294e0c0c10a.jpg" className='userimg' width={"150px"} height={"150px"} alt="user profile" />
        <Button className='logout' onClick={handleLogout}>Logout</Button>
        <Button className='udelete'>Delete</Button>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className='udff1'>Name</Form.Label>
            <Form.Control
              className='udf1'
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className='udff1'>Email</Form.Label>
            <Form.Control
              className='udf2'
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label className='udff1'>Phone No</Form.Label>
            <Form.Control
              className='udf1'
              type="number"
              name="number"  // <-- Corrected to match formData key
              placeholder="Enter Number"
              value={formData.number}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button className='udb1' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UserDashBoard;
