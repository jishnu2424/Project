import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/userfav.css';
import ApiRequest from '../Lib/ApiRequest';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';

function UserFavCard() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get('/design/fav');
      const DesignWithRating = response.data.map(design => {
        const totalRatings = design.ratings ? design.ratings.length : 0;
        const averageRating = totalRatings > 0 ? design.ratings.reduce((sum, rating) => sum + rating.star, 0) / totalRatings : 0;
        return { ...design, averageRating, totalRatings };
      });
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
      toast.error('Removed From Favourite');
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
          style={{ width: '25px', height: '25px' }}
        />
      );
    }
    return stars;
  };

  return (
    <Container fluid="md" style={{ fontFamily: 'neue machina' }}>
      <Row>
        {favorites.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="ucard">
              <Card.Img
                className="uimg"
                variant="top"
                src={item.design}
                alt={item.designName}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="ut">Art Name: {item.designName}</Card.Title>
                  <Card.Title>Artist Name: {item.designerName}</Card.Title>
                  <h3>Design Type: {item.designType}</h3>
                  <div className="new-property-rating">
                    <h3>Total Rating</h3>
                    {renderStars(item.averageRating)}
                    <span> ({isNaN(item.averageRating) ? '0.0' : item.averageRating.toFixed(1)})</span>
                  </div>
                </div>
                <Button className="ub" onClick={() => deletehandle(item._id)}>Remove Fav</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserFavCard;
