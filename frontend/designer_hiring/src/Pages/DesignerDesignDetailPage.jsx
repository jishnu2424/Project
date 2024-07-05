import React, { useEffect, useState } from "react";
import "../Styles/designerdesdetail.css";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ApiRequest from "../Lib/ApiRequest";
import {toast} from 'react-toastify'

function DesignerDesignDetailPage() {
  const { id } = useParams();
  const [viewDesign, setViewDesign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiRequest.get(`/design/viewbyid/${id}`);
        setViewDesign(response.data);
      } catch (error) {
        setError("Error fetching data.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!viewDesign) {
    return <div>No design found.</div>;
  }


  const addToFavorites = async () => {
    try {
        const response = await ApiRequest.post(`/user/favs/${id}`);
        toast.success("Added To Favourite")
    } catch (error) {
        console.error(error);
    }
    console.log(id);
};


  return (
    <div className="ddpage">
      <h1 className="ddh1">Design Detail</h1>
      <div className="design-detail">
        <img
          src={viewDesign.design}
          alt={viewDesign.designName}
          width={"800px"}
          height={"500px"}
          className="ddimg"
        />
        <h1 className="ddh11">Design Name: {viewDesign.designName}</h1>
        <h2 className="dddh11">Design Type: {viewDesign.designType}</h2>
        <h2 className="dddh12">Designer: {viewDesign.designerName} </h2>
        <p className="ddp">About Design: {viewDesign.designDescription}</p>
        <Button className="ddbtn" onClick={addToFavorites}>Add to Fav</Button>
        <Link to={'/'}><Button className="ddbtn">Back To Home</Button></Link>
      </div>
    </div>
  );
}

export default DesignerDesignDetailPage;
