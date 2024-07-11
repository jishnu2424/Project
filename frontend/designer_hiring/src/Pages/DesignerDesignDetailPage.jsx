import React, { useEffect, useState } from "react";
import "../Styles/designerdesdetail.css";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ApiRequest from "../Lib/ApiRequest";
import {toast} from 'react-toastify'
import RatePost from "../Components/RatePost";
import { FaStar } from "react-icons/fa";

function DesignerDesignDetailPage() {
  const { id } = useParams();
  const [viewDesign, setViewDesign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiRequest.get(`/design/viewbyid/${id}`);
        const totalRatings = response.data.ratings ? response.data.ratings.length : 0;
            const averageRating = totalRatings > 0
                ? response.data.ratings.reduce((sum, rating) => sum + rating.star, 0) / totalRatings
                : 0;
            setViewDesign({ ...response.data, averageRating, totalRatings });

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


const renderStars = (averageRating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
      stars.push(
          <FaStar
              key={i}
              color={i <= averageRating ? '#ffc107' : '#e4e5e9'}
              style={{width:"50px",height:"50px"}}
          />

      );
  }
  return stars;
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

        <RatePost postId={id} />
        <div style={{marginLeft:"350px"}}>
          <div className="new-property-rating" >
            <h3>Total Rating </h3>
            {renderStars(viewDesign.averageRating)}
              <span> ({isNaN(viewDesign.averageRating) ? '0.0' : viewDesign.averageRating.toFixed(1)})</span>
          </div>
          <br />
        </div>
        <Button className="ddbtn" onClick={addToFavorites}>Add to Fav</Button>
        <Link to={'/'}><Button className="ddbtn">Back To Home</Button></Link>
      </div>
    </div>
  );
}

export default DesignerDesignDetailPage;
