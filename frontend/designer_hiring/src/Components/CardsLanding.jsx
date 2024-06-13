import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../Styles/lcard.css'

function CardsLanding() {
  return (
    <>
    <div>CardsLanding</div>
    <Container fluid="md">
        <Row>
            <Col md={6} lg={4} className="mb-4" >
    <Card style={{ width: '18rem' }} className='Lcard'>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg" width={"295"}height={'380'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default CardsLanding