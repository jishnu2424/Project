import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'
function UpdateDesign() {
  const navigate =useNavigate()
  const [imageFiles, setImageFiles] = useState([]);
  const { id } = useParams(); // Assuming you're using react-router to get the design ID from the URL
  const [design, setDesign] = useState({
    designName: '',
    designerName: '',
    designDescription: '',
    designType: '',
    design: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiRequest.get("design/view");
        const designData = response.data.find((item) => item._id.toString() === id);
        setDesign(designData ? [designData] : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesign((prevDesign) => ({
      ...prevDesign,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiRequest.patch(`design/update/${id}`, design);
      toast.success('Design updated successfully');
      navigate('/designerhome')
    } catch (error) {
      console.error('Error updating design:', error);
      toast.error('Failed to update design');
    }
  };

  const uploadImage = async () => {
    if (imageFiles.length === 0) return;

    const uploadedUrls = [];
    for (let file of imageFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'design');

      try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dldyn546r/image/upload', formData);
        uploadedUrls.push(res.data.secure_url);
      } catch (error) {
        console.log(error);
      }
    }

    setDesign(prevDesign => ({
      ...prevDesign,
      design: uploadedUrls
    }));

    console.log('Uploaded URLs:', uploadedUrls);
  };


  return (
    <>
      <Form className='daform' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='daff1'>Update Design</Form.Label>
          <Form.Control className='dadf2' type="file" placeholder="ADD DESIGN" id='photo-input' multiple onChange={(e)=> setImageFiles([...e.target.files])} />
          <Button type="button" id="uploadButton" className="dab1" onClick={uploadImage}>Upload</Button>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
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

          <Form.Group as={Col} controlId="formGridPassword">
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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className='daff1'>Design Description</Form.Label>
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
          <Form.Group as={Col} controlId="formGridEmail">
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

        <Button variant="primary" className='dab1' type="submit">
          Update Design
        </Button>
        <Link to={'/designerhome'}>
          <Button variant="primary" className='dab1'>
            Back To Home
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default UpdateDesign;
