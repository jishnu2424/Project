import React, { useEffect, useState } from "react";
import "../Styles/landingdesigner.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'

function LandingDesigner() {
  const [Viewdesigner, setViewdesigner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/viewdesigner");
      const designer = response.data.filter(user => user.role === "designer");

      setViewdesigner(designer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="ld1">
        <h1 className="ldh1">Our Designers Are Here .....</h1>
        <Container fluid="md">
          <Row style={{marginLeft:"50px"}}>
          {Viewdesigner.map((item)=>(            <Col md={6} lg={3} className="mb-4">
            
             <Link to={`/designer/${item._id}`} > <img
                src="https://i.pinimg.com/564x/07/fc/c0/07fcc05c16899d6545cf153515f1603e.jpg"width={"200px"}height={"200px"} className="ldimg"
                alt=""
              /></Link>
              <h1 className="ldimgh1">{item.username}</h1>
            </Col>))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingDesigner;
