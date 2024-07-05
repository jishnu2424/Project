import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/userfav.css';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'

function UserFavCard() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get('/design/fav');
      console.log(response);
      setFavorites(response.data); // Assuming response.data contains the array of favorites
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
