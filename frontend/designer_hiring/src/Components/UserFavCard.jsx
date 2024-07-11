import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/userfav.css';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'
import { FaStar } from 'react-icons/fa';

function UserFavCard() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get('/design/fav');
      const DesignWithRating = response.data.map(design=>{
        const totalRatings =design.ratings ? design.ratings.length:0;
        const averageRating =totalRatings> 0 ?design.ratings.reduce((sum,rating)=> sum + rating.star,0)/totalRatings :0;
        return {...design,averageRating,totalRatings}
      })
      console.log(response);
      setFavorites(DesignWithRating); // Assuming response.data contains the array of favorites
    } catch (error) {
      console.log('Error fetching favorites:', error);
    }
  };

  const deletehandle = async (id) => {
    try {
      const response = await ApiRequest.delete(`/user/favdelete/${id}`);
      console.log(response);
      setFavorites((prevFavorites) => prevFavorites.filter((item) => item._id !== id));
      toast.error('Removed From Favourite')
    } catch (error) {
      console.log('Error deleting favorite:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const renderStars = (averageRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FaStar
                key={i}
                color={i <= averageRating ? '#ffc107' : '#e4e5e9'}
                style={{width:"50px",height:"50px"}}
            />
  
        );
    }
    return stars;
  };
  return (
    <Container fluid="md" style={{ fontFamily: "neue machina" }}>
             {favorites.map((item, index) => (
 <Row>
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="ucard">
              <div className="d-flex">
                <Card.Img
                  className='uimg'
                  variant="left"
                  src={item.design}
                  width={"295"}
                  height={'380'}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className='ut'>Art Name: {item.designName}</Card.Title>
                    <Card.Title>Artist Name: {item.designerName}</Card.Title>
                    <h3>Design Type: {item.designType}</h3>
                    <div className="new-property-rating" >
            <h3>Total Rating </h3>
            {renderStars(item.averageRating)}
              <span> ({isNaN(item.averageRating) ? '0.0' : item.averageRating.toFixed(1)})</span>
          </div>
          <br />
                  </div>
                  <Button className="ub" onClick={() => deletehandle(item._id)}>Remove Fav</Button>
                </Card.Body>
              </div>
            </Card>
          </Col>
      </Row>        ))}

    </Container>
  );
}

export default UserFavCard;
