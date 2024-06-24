import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/auth/logout");
      localStorage.removeItem("user");
      Cookies.remove('token');
      console.log('logout');
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Button className='logout' onClick={handleLogout}>Logout</Button>
  );
}

export default LogOut;
