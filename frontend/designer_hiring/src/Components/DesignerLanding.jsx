import React, { useEffect, useState } from "react";
import "../Styles/designerlanding.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// Importing images
import amazone from "../Assets/logo.png";
import microsoft from "../Assets/logo1.png";
import google from "../Assets/logo2.png";
import uber from "../Assets/logo4.png";
import adobe from "../Assets/logo3.png";
import discord from "../Assets/logo5.png";
import fedex from "../Assets/logo6.png";
import meta from "../Assets/logo7.png";

function DesignerLanding() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
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



  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await axios.get("http://localhost:5000/designer/view");
        const artistData = res.data.find((item) => item._id.toString() === id);
        setArtist(artistData || {});
      } catch (err) {
        console.log(err);
      }
    };

    fetchArtist();
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="sticky-container" />
      <div className="cadbg">
        <Container fluid="md">
          <Row>
            {viewDesign.map((item)=>(
            <Col md={6} lg={4} className="mb-4">
              <Link to={`/designer/desdetail/${item._id}`}>
                <Card style={{ width: "401px" }} className="lcarrd">
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
                    alt={item.designName}
                    width={"401"}
                    height={"290"}
                    
                  />
                  <h2 style={{fontFamily:"neue machina"}}>{item.designName}</h2>
                </Card>
              </Link>
            </Col>))}
          </Row>
        </Container>
      </div>

      <div className="profile-card">
        <div className="header">
          <img
            src="https://i.pinimg.com/736x/41/9c/bb/419cbb0513df24eff5a8243fcdf54c9e.jpg"
            alt="Profile"
            className="dpic"
          />
          <div className="header-text">
            <h2 className="dpn">{artist.username}</h2>
          </div>
          <Button className="dsbtn">Hire now</Button>
        </div>
        
        <div className="experience">
          <div>
            <h3>{artist.workExperience} Years</h3>
            <p>work experience</p>
          </div>
          <div>
            <h3>{artist.monthlyInteraction}+</h3>
            <p>monthly interactions</p>
          </div>
          <div>
            <h3>{artist.projectCompleted}+</h3>
            <p>projects completed</p>
          </div>
        </div>

        <div className="about">
          <h2>About</h2>
          <h3>Professional Overview</h3>
          <p>
            {artist.aboutMe}
          </p>
        </div>

        <div className="skills">
          <h2>Skills And Expertise</h2>
          <div className="skills-list">
          {artist.skills}
          </div>
        </div>
      </div>

      <div className="dtc">
        <h1
          style={{
            fontFamily: "neue machina",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Top Clients
        </h1>

        <div className="logo-grid">
          <div className="logo-item">
            <img src={amazone} alt="Amazon" />
          </div>
          <div className="logo-item">
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div className="logo-item">
            <img src={google} alt="Google" />
          </div>
          <div className="logo-item">
            <img src={uber} alt="Uber" />
          </div>
          <div className="logo-item">
            <img src={adobe} alt="Adobe" />
          </div>
          <div className="logo-item">
            <img src={discord} alt="Discord" />
          </div>
          <div className="logo-item">
            <img src={fedex} alt="FedEx" />
          </div>
          <div className="logo-item">
            <img src={meta} alt="Meta" />
          </div>
        </div>

        <h1 style={{ fontFamily: "neue machina", textAlign: "center" }}>
          Interactions
        </h1>

        <div className="dint">
          <div style={{ display: "flex" }}>
            <h1 style={{ fontSize: "100px", marginLeft: "150px", marginTop: "70px" }}>51+</h1>
            <h1 style={{ fontSize: "100px", marginLeft: "250px", marginTop: "70px" }}>65+</h1>
            <h1 style={{ fontSize: "100px", marginLeft: "250px", marginTop: "70px" }}>70+</h1>
          </div>
          <div style={{ display: "flex" }}>
            <h1 style={{ marginLeft: "80px" }}>Commissions</h1>
            <h1 style={{ marginLeft: "200px" }}>Submissions</h1>
            <h1 style={{ marginLeft: "200px" }}>Customers</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerLanding;
