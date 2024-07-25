import React, { useEffect, useState } from "react";
import "../Styles/landingdesigner.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ApiRequest from "../Lib/ApiRequest";

function LandingDesigner() {
  const [Viewdesigner, setViewdesigner] = useState([]);
  const navigate =useNavigate()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("designer/view");
      const designer = response.data.filter(user => user.role === "designer");

      setViewdesigner(designer);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="ld1">
        <h1 className="ldh1">Our Designers Are Here .....</h1>
        <Container fluid="md">
          <Row style={{marginLeft:"50px"}}>
          {Viewdesigner.map((item)=>(            <Col md={6} lg={3} className="mb-4">
            
             <img
                src={item.photo}width={"200px"}height={"200px"} className="ldimg"
                alt=""
                onClick={()=>{localStorage.token?navigate(`/designer/${item._id}`):navigate('/login')}}
              />
              <h1 className="ldimgh1">{item.username}</h1>
            </Col>))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingDesigner;
