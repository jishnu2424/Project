import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import '../Styles/lcard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardsLanding() {
  const [viewDesign, setViewDesign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/design/view");
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
          <Col key={index} md={6} lg={4} className="mb-4">
            <Link to={`/desdetail/${item._id}`}>
              <Card className='Lcard'>
                <Card.Img 
                  variant="top" 
                  src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg" 
                  className="card-img-top" 
                />
                <Card.Body className="card-body-hover">
                  <Card.Title>{item.designName}</Card.Title>
                  <Card.Text>
                    Design Type: {item.designType} <br />
                    Design Description: {item.designDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsLanding;
