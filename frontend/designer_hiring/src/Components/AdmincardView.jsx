import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/admincadview.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AdmincardView() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/viewdesigner");
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
      await axios.delete(`http://localhost:5000/admin/deletedesigner/${id}`);
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
              src="https://i.pinimg.com/736x/41/9c/bb/419cbb0513df24eff5a8243fcdf54c9e.jpg"
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
              <h3>{artist.montlyIntraction}+</h3>
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
              {artist.skill && artist.skill.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdmincardView;
