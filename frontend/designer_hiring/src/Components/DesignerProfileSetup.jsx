import React, { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import '../Styles/designerprofile.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiRequest from '../Lib/ApiRequest';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '..//Components/Redux/userSlice'; // Import updateUser action

function DesignerProfileSetup() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    number: currentUser?.number || '',
    workExperience: currentUser?.workExperience || '',
    projectCompleted: currentUser?.projectCompleted || '',
    aboutMe: currentUser?.aboutMe || '',
    monthlyInteraction: currentUser?.monthlyInteraction || '',
    skills: currentUser?.skills || '',
    photo: currentUser?.photo || 'https://i.pinimg.com/564x/97/7e/56/977e568da382e808209b9294e0c0c10a.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      // Validate phone number: only allow digits and limit to 10 characters
      if (!/^\d{0,10}$/.test(value)) {
        toast.error('Phone number must be 10 digits.');
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiRequest.patch(`designer/update/${currentUser._id}`, formData);
      console.log('Response from API:', response.data);
      dispatch(updateUser(response.data)); // Dispatch updateUser action
      toast.success('Update successful');
      setFormData(response.data);
    } catch (err) {
      toast.error('Error in updation');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.error('Logged Out');
      dispatch(updateUser(null)); // Dispatch updateUser action from Redux to update currentUser
      navigate('/');
    } catch (err) {
      console.log('Error during logout:', err);
    }
  };

  const handleAvatarClick = () => {
    document.getElementById('photo-input').click();
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append('file', image);
    fData.append('upload_preset', 'design');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dldyn546r/image/upload', fData);
      console.log(res);
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
      <Form className='ddform' onSubmit={updateHandler}>
        <Form.Control
          className='ddf1'
          type='file'
          name='photoFile'
          id='photo-input'
          onChange={(e) => setImage(e.target.files[0])}
          style={{ display: 'none' }}
        />

        <img src={formData.photo} className='dserimg' width={'150px'} height={'150px'} alt='user profile' onClick={handleAvatarClick} />
        <Button onClick={uploadImage} className='upbtn'>Upload</Button>
        <Button className='dlogout' onClick={handleLogout}>LogOut</Button>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label className='ddff1'>Name</Form.Label>
            <Form.Control
              className='ddf1'
              type='text'
              name='username'
              placeholder='Enter Name'
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPhone'>
            <Form.Label className='ddff1'>Phone No</Form.Label>
            <Form.Control
              className='ddf2'
              type='text'
              name='number'
              placeholder='Phone No'
              value={formData.number}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridWorkExperience'>
            <Form.Label className='ddff1'>Work Experience</Form.Label>
            <Form.Control
              className='ddf1'
              type='number'
              name='workExperience'
              placeholder='Experience'
              value={formData.workExperience}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridProjectCompleted'>
            <Form.Label className='ddff1'>Projects Completed</Form.Label>
            <Form.Control
              className='ddf2'
              type='number'
              name='projectCompleted'
              placeholder='Project Count'
              value={formData.projectCompleted}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridAboutMe'>
            <Form.Label className='ddff1'>About Me</Form.Label>
            <Form.Control
              as='textarea'
              name='aboutMe'
              placeholder='Type Something'
              className='ddfa'
              rows={3}
              value={formData.aboutMe}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridMonthlyInteraction'>
            <Form.Label className='ddff1'>Monthly Interactions</Form.Label>
            <Form.Control
              className='ddf1'
              type='number'
              name='monthlyInteraction'
              placeholder='Interaction Count'
              value={formData.monthlyInteraction}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='Skills'>
            <Form.Label className='ddff1'>Skills And Expertise</Form.Label>
            <Form.Control
              as='textarea'
              name='skills'
              placeholder='Type Something'
              className='ddfa'
              rows={3}
              value={formData.skills}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button className='ddb1' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DesignerProfileSetup;
