import React, { useState, useEffect } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/RatePost.css'
import { FaStar } from 'react-icons/fa';
import ApiRequest from '../Lib/ApiRequest';


const RatePost = ({ postId, token }) => {
    const [star, setStar] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);

    const fetchRatings = async () => {
        try {
            const response = await ApiRequest.get(`/design/view/${postId}`);
            const ratings = response.data.ratings;
            const total = ratings.length;
            const sum = ratings.reduce((accumulator, current) => accumulator + current.star, 0);
            const average = total > 0 ? sum / total : 0;
            setAverageRating(average);
            setTotalRatings(total);
        } catch (error) {
            console.error("Failed to fetch ratings", error);
        }
    };

    useEffect(() => {
        fetchRatings();
    }, []);

    const handleRating = async (rating) => {
        try {
            const response = await ApiRequest.put('/design/rating', 
            {
                star: rating,
                postId
            });
            toast.success("Rating submitted successfully!");
            fetchRatings(); // Update the ratings after submission
            setStar(rating); // Update the local state of star to reflect current user rating
        } catch (error) {
            console.error("Error submitting rating", error);
            toast.error("Error submitting rating.");
        }
    };

    // Function to render star icons for rating selection
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    onClick={() => handleRating(i)}
                    style={{
                        width:"30px",
                        height:"30px",
                        cursor: 'pointer',
                        color: i <= star ? '#ffc107' : '#e4e5e9', // Highlight stars up to the selected rating
                    }}
                />
            );
        }
        return stars;
    };
    
  return (
    <div style={{marginLeft:"350px"}}>
            <h3>Rate Me</h3>
            <div>
                {renderStars()}
            </div>
            <div>
                {/* <p>Average Rating: {averageRating.toFixed(1)} ({totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'})</p> */}
            </div>
            <br />
        </div>
  )
}

export default RatePost