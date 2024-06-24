import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/desinerdesigndetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DesignerDesignMain() {
  const { id } = useParams();
  const [viewDesign, setViewDesign] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/design/view");
        const designData = response.data.find((item) => item._id.toString() === id);
        setViewDesign(designData ? [designData] : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const deleteDesign = async () => {
    try {
      await axios.delete(`http://localhost:5000/design/delete/${id}`);
      navigate('/designerhome');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="dddpage">
      <h1 className="ddh1">Design Detail</h1>
      {viewDesign.map((item, index) => (
        <div key={index} className="design-detail">
          <img
            src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
            alt={item.designName}
            width={"800px"}
            height={"500px"}
            className="dddimg"
          />
          <h1 className="dddh11">{item.designName}</h1>
          <p className="dddp">
            {item.designDescription}
          </p>
          <Link to={`/designerhome/designdetail/update/${item._id}`}>
            <Button className="dddbtn">Update</Button>
          </Link>
          <Button className="dbdbtn" onClick={deleteDesign}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default DesignerDesignMain;
