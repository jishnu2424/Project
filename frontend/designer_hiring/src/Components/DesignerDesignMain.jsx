import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/desinerdesigndetail.css';
import { useParams } from 'react-router-dom';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'

function DesignerDesignMain() {
  const { id } = useParams();
  const [viewDesign, setViewDesign] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiRequest.get("design/view");
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
        const response = await ApiRequest.delete(`design/delete/${id}`);
        console.log(response);
        setViewDesign((prevDesign) => ({
            ...prevDesign,
            photo: prevDesign.photo.filter((photoUrl) => photoUrl !== id)
        }));
        toast.success('Deleted')
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
            src={item.design}
            alt={item.designName}
            className="dddimg"
          />
          <h2 className="ddh11">Design Name :{item.designName}</h2>
          <h2 className="dddh11">Design Type: {item.designType} </h2>
          <h2 className="dddh11">Designer: {item.designerName} </h2>
          <p className="dddp">
            About Design: {item.designDescription}
          </p>
          <Link to={`/designerhome/designdetail/update/${item._id}`}>
            <Button className="dddbtn">Update</Button>
          </Link>
          <Button className="dbdbtn" onClick={()=>{deleteDesign(item._id)}}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default DesignerDesignMain;
