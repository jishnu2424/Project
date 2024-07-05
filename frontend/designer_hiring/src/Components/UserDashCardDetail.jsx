import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiRequest from '../Lib/ApiRequest'

function UserDashCardDetail() {  
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
      try {
          const response = await ApiRequest.get('/design/fav');
          console.log(response);
          setFavorites(response.data); // Assuming response.data contains the array of favorites
      } catch (error) {
          console.log('Error fetching favorites:', error);
      }
  };

  const deletehandle = async (id) => {
    try {
        const response = await ApiRequest.delete(`/user/favdelete/${id}`);
        console.log(response);
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item._id !== id));
    } catch (error) {
        console.log('Error deleting favorite:', error);
    }
};
  
  useEffect(() => {
    fetchData();
}, []);


  return (
    <>
    <div className="ddpage">
        <h1 className="ddh1"> Design Detail</h1>
        {favorites.map((item)=>(
        <div>
        <img
          src={item.design}
          alt=""
          width={"800px"}
          height={"500px"}
          className="ddimg"
        />
        <h1 className="ddh11"> Art Name : {item.designName}</h1>
        <h2>Artist Name :{item.designerName}</h2>
        <h3>Design Type :{item.designType}</h3>
        <p className="ddp">
          {item.designDescription}
        </p>
        <Button className="ddbtn" onClick={() => deletehandle(item._id)}>Remove Fav</Button>
        <Link to={'/userdash'}><Button className="ddbtn">Back To Home</Button></Link>

        </div>
        ))}
      </div>
    </>
  )
}

export default UserDashCardDetail