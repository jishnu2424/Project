import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../Styles/userdash.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'
import { updateUser } from '..//Components/Redux/userSlice'; // Import updateUser action
import { useDispatch, useSelector } from 'react-redux';


function UserDashBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  // const { updateUser, currentUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    number: currentUser?.number || '',
    photo: currentUser?.photo || 'https://i.pinimg.com/564x/97/7e/56/977e568da382e808209b9294e0c0c10a.jpg'
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
      const response = await ApiRequest.patch(`user/update/${currentUser._id}`, formData);
      updateUser(response.data);
      toast.success('Update successful');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      dispatch(updateUser(null)); // Dispatch updateUser action from Redux to update currentUser
      toast.error('logged Out');
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAvatarClick = () => {
    document.getElementById('photo-input').click();
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append('file', image);
    fData.append("upload_preset", "design");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dldyn546r/image/upload", fData);
      setFormData({
        ...formData,
        photo: res.data.secure_url
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <Form className='udform' onSubmit={updateHandler}>
        <Form.Control 
          className='ddf1'
          type="file"
          name="photoFile"
          id='photo-input'
          onChange={(e)=>setImage(e.target.files[0])}
          style={{display:"none"}}
        />
        <img src={formData.photo} className='userimg' width={"150px"} height={"150px"} alt="user profile" onClick={handleAvatarClick} />
        <Button onClick={uploadImage} className='upbtn' >Upload</Button>
        <Button className='logout' onClick={handleLogout}>Logout</Button>
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
              name="number"
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
