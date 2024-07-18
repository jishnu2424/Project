import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Pagination } from 'react-bootstrap';
import '../Styles/landingcategory.css';
import { useNavigate } from 'react-router-dom';
import ApiRequest from '../Lib/ApiRequest';

function LandingCategory() {
    const [viewDesign, setViewDesign] = useState([]);
    const [filteredArts, setFilteredArts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredArts(viewDesign);
    }, [viewDesign]);

    const fetchData = async () => {
        try {
            const response = await ApiRequest.get("design/viewall");
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
        setCurrentPage(1); 
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredArts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const renderPagination = () => {
        let items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                    {number}
                </Pagination.Item>
            );
        }
        return <Pagination>{items}</Pagination>;
    };

    return (
        <div className='category'>
            <h1 className='cath1'>Design Category</h1>
            <div className="button-group">
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
                <Container>
                    <Row>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <Col xs={12} sm={6} md={4} lg={4} className="mb-4" key={item._id}>
                                    <Card className="catcard" onClick={() => { localStorage.token ? navigate(`/designer/desdetail/${item._id}`) : navigate('/login') }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.design}
                                            alt={item.designName}
                                            className="catcard-img"
                                        />
                                        <div className="overlay">
                                            <div className="text">{item.designType}</div>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <h1 className="no-arts">No Arts Available</h1>
                        )}
                    </Row>
                    <div className="pagination-container">
                        {renderPagination()}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default LandingCategory;
