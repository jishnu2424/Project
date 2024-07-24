import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/admincadview.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApiRequest from '../Lib/ApiRequest';
import {toast} from 'react-toastify'

function AdmincardView() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await ApiRequest.get("admin/viewdesigner");
        const artistData = res.data.find((item) => item._id.toString() === id);
        setArtist(artistData || {});
      } catch (err) {
        console.log(err);
      }
    };

    fetchArtist();
  }, [id]);

  const handleDelete = async () => {
    try {
      await ApiRequest.delete(`admin/deletedesigner/${id}`);
      toast.error('Deleted Designer')
      navigate('/admin');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-card">
      {artist && (
        <>
          <div className="header">
            <img
              src={artist.photo}
              alt="Profile"
              className="dpic"
            />
            <div className="header-text">
              <h2 className="dpn">{artist.username}</h2>
            </div>
            <Link to={'/admin'}>
              <Button className="dbtn1">Back to Home</Button>
            </Link>
            <Button className="dbtn" onClick={handleDelete}>Delete now</Button>
          </div>
          <div className="experience">
            <div>
              <h3>{artist.workExperience} Years</h3>
              <p>work experience</p>
            </div>
            <div>
              <h3>{artist.monthlyInteraction}+</h3>
              <p>monthly interactions</p>
            </div>
            <div>
              <h3>{artist.projectCompleted}+</h3>
              <p>projects completed</p>
            </div>
          </div>
          <div className="about">
            <h2>About</h2>
            <h3>Professional Overview</h3>
            <p>{artist.aboutMe}</p>
          </div>
          <div className="skills">
            <h2>Skills And Expertise</h2>
            <div className="skills-list">
            {artist.skills}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdmincardView;
