import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import '../Styles/lcard.css';
import { useNavigate } from 'react-router-dom';
import ApiRequest from '../Lib/ApiRequest';

function CardsLanding() {
  const navigate =useNavigate()
  const [viewDesign, setViewDesign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("design/viewall");
      setViewDesign(response.data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <Container fluid="md">
      <Row>
        {viewDesign.map((item, index) => (
          <Col key={index} md={6} lg={4} className="mb-2">
              <Card className='Lcard' onClick={()=>{localStorage.token?navigate(`/desdetail/${item._id}`):navigate('/login')}}>
                <Card.Img 
                  variant="top" 
                  src={item.design}
                  className="card-img-top" 
                />
                <Card.Body className="card-body-hover">
                  <Card.Title>Art Name :{item.designName}</Card.Title>
                  <Card.Text>
                    Design Type: {item.designType} <br />
                    Designer: {item.designerName}
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsLanding;
