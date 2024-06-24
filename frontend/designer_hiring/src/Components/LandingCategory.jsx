import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/landingcategory.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LandingCategory() {
    const [viewDesign, setViewDesign] = useState([]);
    const [filteredArts, setFilteredArts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredArts(viewDesign);
    }, [viewDesign]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/design/view");
            setViewDesign(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filterResult = (designType) => {
        if (designType === "All") {
            setFilteredArts(viewDesign);
        } else {
            const filtered = viewDesign.filter(item => item.designType === designType);
            setFilteredArts(filtered);
        }
    };

    return (
        <div className='category'>
            <h1 className='cath1'>Design Category</h1>
            <div style={{ display: "flex" }}>
                <Button className='catb' onClick={() => filterResult('All')}>All</Button>
                <Button className='catb' onClick={() => filterResult('Electronic Art')}>Electronic Art</Button>
                <Button className='catb' onClick={() => filterResult('Drawing')}>Drawing</Button>
                <Button className='catb' onClick={() => filterResult('Wall Painting')}>Wall Painting</Button>
                <Button className='catb' onClick={() => filterResult('AI Arts')}>AI Arts</Button>
                <Button className='catb' onClick={() => filterResult('Contemporary Art')}>Contemporary Art</Button>
                <Button className='catb' onClick={() => filterResult('Pencil Drawing')}>Pencil Drawing</Button>
                <Button className='catb' onClick={() => filterResult('Modern Art')}>Modern Art</Button>
                <Button className='catb' onClick={() => filterResult('Painting')}>Painting</Button>
            </div>

            <div className="catcad">
                <Container fluid="md">
                    <Row>
                        {filteredArts.length > 0 ? (
                            filteredArts.map((item) => (
                                <Col md={6} lg={4} className="mb-4" key={item._id}>
                                    <Link to={`/designer/desdetail/${item._id}`}>
                                        <Card style={{ width: "401px" }} className="catcard">
                                            <Card.Img
                                                variant="top"
                                                src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
                                                alt={item.designName}
                                                width={"401"}
                                                height={"290"}
                                            />
                                            <div className="overlay">
                                                <div className="text">{item.designType}</div>
                                            </div>
                                            <h2 style={{ fontFamily: "neue machina" }}>{item.designName}</h2>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        ) : (
                        
                                <h1 style={{color:"black", fontWeight:"bold"}}>No Arts Available</h1>
                            
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingCategory;
