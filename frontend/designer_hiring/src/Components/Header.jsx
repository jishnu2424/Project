import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/header.css'
import { useSelector } from 'react-redux'; // Import useSelector from Redux

function Header() {
  const currentUser = useSelector(state => state.auth.currentUser); // Access currentUser from Redux store
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (currentUser) {
      switch (currentUser.role) {
        case 'designer':
          navigate('/designerhome');
          break;
        case 'user':
          navigate('/userdash');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar bg="light" data-bs-theme="light" className="navbar">
      <Link to={'/'}>
        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
      </Link>
      <Nav className="me-auto">
        <Link to={'/aboutus'}>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Link>
        <Link to={'/contact'}>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Link>
      </Nav>
      <Nav.Link href="#login" className="justify-content-end">
        <Button onClick={handleLoginClick} className="logbtn">
          {currentUser ? currentUser.username : 'Login'}
        </Button>
        {currentUser && (
          <img
            src={currentUser.photo || "data:image/jpeg;base64,..."} // Truncated for brevity
            className="user-photo"
            alt=""
          />
        )}
      </Nav.Link>
    </Navbar>
  );
}

export default Header;
