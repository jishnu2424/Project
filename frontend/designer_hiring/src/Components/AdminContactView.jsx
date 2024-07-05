import React, { useEffect, useState } from 'react';
import '../Styles/admincontactview.css';
import { Card } from 'react-bootstrap';
import ApiRequest from '../Lib/ApiRequest';

function AdminContactView() {
  const [view, setView] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("contact/view");
      setView(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1 className='admmh1'>Messages</h1>
      {view.length === 0 ? (
        <h2 style={{fontFamily:"neue machina",textAlign:"center",marginTop:"50px"}}>NO ENQUIRIES</h2>
      ) : (
        view.map((item) => (
          <div className='admmdiv1' key={item._id}>
            <Card className='admconview'>
              <Card.Body>
                <Card.Title className='admch2'>Name: {item.name}</Card.Title>
                <h3 style={{ marginLeft: "50px" }}>Phone: {item.phone}</h3>
                <h3 style={{ marginLeft: "50px" }}>Email: {item.email}</h3>
                <Card.Text style={{ marginLeft: "50px", fontSize: "25px", marginBottom: "20px" }}>
                  Message: {item.message}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </>
  );
}

export default AdminContactView;
