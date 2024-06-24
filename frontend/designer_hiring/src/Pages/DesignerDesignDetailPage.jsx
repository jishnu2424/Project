import React, { useEffect, useState } from "react";
import "../Styles/designerdesdetail.css";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function DesignerDesignDetailPage() {
  const { id } = useParams();
  const [viewDesign, setViewDesign] = useState([]);

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

  return (
    <div className="ddpage">
      <h1 className="ddh1">Design Detail</h1>
      {viewDesign.map((item) => (
        <div key={item._id} className="design-detail">
          <img
            src="https://i.pinimg.com/564x/31/f0/c7/31f0c7cf0e4984e6aa6484149b748840.jpg"
            alt={item.designName}
            width={"800px"}
            height={"500px"}
            className="ddimg"
          />
          <h1 className="ddh11">{item.designName}</h1>
          <p className="ddp">{item.designDescription}</p>
          <Button className="ddbtn">Add to Fav</Button>
          <Link to={'/'}><Button className="ddbtn">Back To Home</Button></Link>
        </div>
      ))}
    </div>
  );
}

export default DesignerDesignDetailPage;
