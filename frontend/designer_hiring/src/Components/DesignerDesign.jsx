import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/designdetail.css'
import axios from 'axios';

function DesignerDesign() {
  const [viewDesign, setViewDesign] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/design/view");
      setViewDesign(response.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
    <div>
      <Link to={'/designerhome/designadd'}><Button className='ddbb1'>Add Art</Button></Link>
      </div>
    <div className="cadbg">
          <Container fluid="md">
            <Row>
              {viewDesign.map((item)=>(
              <Col md={6} lg={4} className="mb-4">
              
              <Link to={`/designerhome/designdetail/${item._id}`}><Card style={{ width: "401px" }} className="lcarrd" >
                <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
                    width={"401"}
                    height={"290"}
                  /> 
                  <h2>{item.designName}</h2>
                </Card>
                </Link>
              </Col>))}
            </Row>
          </Container>
         </div>

    </>
  )
}

export default DesignerDesign