import React, { useEffect, useState } from "react";
import "../Styles/designerlanding.css";
import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApiRequest from "../Lib/ApiRequest";
import { toast } from 'react-toastify'

// Importing images


function DesignerLanding() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [viewDesign, setViewDesign] = useState([]);
  const navigate =useNavigate()


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get(`design/viewdes/${id}`);
      setViewDesign(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await ApiRequest.get("designer/view");
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



  const createChat = async (id) =>{
    try {
     const res = await ApiRequest.post(`chat/add`,{receiverId:id})
     navigate(`/chat/${res.data._id}`)
     console.log(res);
    } catch (error) {
     console.log(error);
    }
   }


   const addHire = async()=>{
    try{
      const res =await ApiRequest.post(`/hire/add/${id}`)
      toast.success("Designer Hired")
      return res.data 
    }catch(err){
      console.log(err);
    }
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
                    src={item.design}
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
            src={artist.photo}
            alt="Profile"
            className="dpic"
          />
          <div className="header-text">
            <h2 className="dpn">{artist.username}</h2>
          </div>
          <Button className="dsbtn" onClick={addHire}>Hire now</Button>
          <Button className="dsbtn" onClick={()=>createChat(artist._id)}>Message now</Button>
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
    </>
  );
}

export default DesignerLanding;
