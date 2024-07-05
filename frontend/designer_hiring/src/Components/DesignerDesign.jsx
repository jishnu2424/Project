import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/designdetail.css';
import ApiRequest from '../Lib/ApiRequest';

function DesignerDesign() {
  const [viewDesign, setViewDesign] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("design/view");
      setViewDesign(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="text-center my-4">
        <Link to={'/designerhome/designadd'}>
          <Button className='ddbb1'>Add Art</Button>
        </Link>
      </div>
      <div className="cadbg">
        <Container fluid>
          <Row>
            {viewDesign.map((item, index) => (
              <Col xs={12} sm={6} lg={4} className="mb-4" key={index}>
                <Link to={`/designerhome/designdetail/${item._id}`}>
                  <Card className="lcarrd">
                    <Card.Img
                      variant="top"
                      src={item.design}
                      className="card-img-top"
                    />
                    <Card.Body>
                      <Card.Title>{item.designName}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DesignerDesign;
