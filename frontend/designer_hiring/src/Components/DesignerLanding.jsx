import React from "react";
import "../Styles/designerlanding.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import amazone from "../Assets/logo.png";
import microsoft from "../Assets/logo1.png";
import google from "../Assets/logo2.png";
import uber from "../Assets/logo4.png";
import adobe from "../Assets/logo3.png";
import discord from "../Assets/logo5.png";
import fedex from "../Assets/logo6.png";
import meta from "../Assets/logo7.png";
import { Link} from 'react-router-dom'

function DesignerLanding() {
  return (
    <>
      <div className="sticky-container"/>
        <div className="cadbg">
          <Container fluid="md">
            <Row>
              <Col md={6} lg={4} className="mb-4">
              
              <Link to={'/designer/desdetail'}><Card style={{ width: "401px" }} className="lcarrd" >
                <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
                    width={"401"}
                    height={"290"}
                  /> 
                </Card>
                </Link>
              </Col>
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
              <h2 className="dpn">Designer</h2>
            </div>
            <Button className="dbtn">Hire now</Button>
          </div>
          <div className="experience">
            <div>
              <h3>9+ Years</h3>
              <p>work experience</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>monthly interactions</p>
            </div>
            <div>
              <h3>30+</h3>
              <p>projects completed</p>
            </div>
          </div>
          <div className="about">
            <h2>About</h2>
            <h3>Professional Overview</h3>
            <p>
              I am an accomplished designer with a rich and diverse background
              in the world of design. My journey in this creative field has
              spanned numerous disciplines, from graphic and web design to
              interior and product design. With several years of hands-on
              experience, I've developed a deep-seated passion for turning
              concepts into visually striking and functional designs. This
              passion is fueled by a constant exploration of design principles,
              color theory, and the latest trends in the industry. My work is
              not merely a job; it's a calling that inspires me to push the
              boundaries of creativity, making every project an opportunity to
              deliver innovative, user-centric, and aesthetically pleasing
              solutions. My commitment to both meeting and surpassing client
              objectives is unwavering, and I find immense joy in captivating
              audiences with my unique blend of artistry and a discerning eye
              for visual aesthetics. My design journey is an ongoing adventure,
              and I look forward to every opportunity to create, inspire, and
              bring fresh perspectives to the design world.
            </p>
          </div>
          <div className="skills">
            <h2>Skills And Expertise</h2>
            <div className="skills-list">
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>InDesign</span>
              <span>Adobe XD</span>
              <span>Sketch</span>
              <span>Inkscape</span>
              <span>Canva</span>
              <span>SketchUp</span>
              <span>Blender</span>
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

          <div class="logo-grid">
            <div class="logo-item">
              <img src={amazone} alt="Amazon" />
            </div>
            <div class="logo-item">
              <img src={microsoft} alt="Microsoft" />
            </div>
            <div class="logo-item">
              <img src={google} alt="Google" />
            </div>
            <div class="logo-item">
              <img src={uber} alt="Uber" />
            </div>
            <div class="logo-item">
              <img src={adobe} alt="Adobe" />
            </div>
            <div class="logo-item">
              <img src={discord} alt="Discord" />
            </div>
            <div class="logo-item">
              <img src={fedex} alt="FedEx" />
            </div>
            <div class="logo-item">
              <img src={meta} alt="Meta" />
            </div>
          </div>
          <h1 style={{ fontFamily: "neue machina", textAlign: "center" }}>
            Intractions
          </h1>

          <div className="dint">
            <div style={{display:"flex"}}>
            <h1 style={{fontSize:"100px",marginLeft:"150px",marginTop:"70px"}}>51+</h1>
            <h1 style={{fontSize:"100px",marginLeft:"250px",marginTop:"70px"}}>65+</h1>
            <h1 style={{fontSize:"100px",marginLeft:"250px",marginTop:"70px"}}>70+</h1>
            </div>
            <div style={{display:"flex"}}>
              <h1 style={{marginLeft:"80px"}}>Commissions</h1>
              <h1 style={{marginLeft:"200px"}}>Submissions</h1>
              <h1 style={{marginLeft:"200px"}}>Customers</h1>

            </div>
          </div>
        </div>
    </>
  );
}

export default DesignerLanding;
