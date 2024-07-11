import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/header.css'
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch from Redux



function Header() {
  const currentUser = useSelector(state => state.auth.currentUser); // Access currentUser from Redux store
  const dispatch = useDispatch();
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
    <div>
      <Navbar
        bg="light"
        data-bs-theme="light"
        style={{ fontFamily: "Neue machina", height: "100px" }}
      >
        <Link to={'/'}><Nav.Link
          href="#home"
          style={{ fontWeight: "bolder", fontSize: "25px", marginLeft: "50px",textDecoration:"none" }}
        >
          Home
        </Nav.Link></Link>
        <Nav
          className="me-auto"
          style={{ fontWeight: "bolder", fontSize: "25px", marginLeft: "15px" }}>
          <Link to={'/aboutus'}><Nav.Link href="#about">About Us</Nav.Link></Link>
          <Link to={'/contact'}><Nav.Link href="#contact">Contact Us</Nav.Link></Link>
          


        </Nav>
        <Nav.Link href="#pricing" className="justify-content-end">
        <Button href="#login" onClick={handleLoginClick} className="logbtn">{currentUser ? currentUser.username : 'Login'}</Button>
        {currentUser && (
         <img
            src={currentUser.photo ||"data:image/jpeg;base64,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"}
            style={{ borderRadius: "50%",marginRight:"50px" }}
            width={"50px"}
            height={"50px"}
            alt=""
          />)}

        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;
