import React, { useContext, useState } from 'react';
import '../Styles/login.css';
import loginimg from '../Assets/loginimg.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'; 
import { login } from '../Components/Redux/userSlice'; 
import ApiRequest from '../Lib/ApiRequest'

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error,setError]=useState('');
  const dispatch =useDispatch()


  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await ApiRequest.post("auth/login/user",loginData);
      const token =response.data.token;
      const userData = response.data.data;

      localStorage.setItem('token',token)
      localStorage.setItem('user', JSON.stringify(userData));

      dispatch(login(userData));


      const role =userData.role;
      toast.success("Logged In")
      if (role === 'user') {
        navigate('/userdash');
      } else if (role === 'designer') {
        navigate('/designerhome');
      } else {
        navigate('/admin')
      }
    } catch (err) {
      console.error(err);
      setError('invalid email or passsword')
    }
  };

  
  return (
    <div style={{ backgroundColor: "black", fontFamily: "neue machina", color: "white", width: "100%", height: "800px" }}>
      <img src={loginimg} alt="login" style={{ marginLeft: "750px", marginTop: "250px" }} />
      <h1 className='llh1'>Login to your account</h1>

      <form onSubmit={handleLogin} className='loginform'>
        <label htmlFor="email" className='ll1'>Email</label>
        <input type="email" placeholder='Email' className='logininput' value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
        <label htmlFor="password" className='ll1'>Password</label>
        <input type="password" placeholder='Password' className='logininput' value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
        <br /><br />
        <Button className='loginbtn' type='submit'>Login</Button>
        <br />
        {error && <p className="error-message">{error}</p>}
        <h3>New User</h3>
        <br />
        <Link to={'/user'}><Button className='reg-user'>Register as User</Button></Link>
        <Link to={'/designerreg'}><Button className='reg-des'>Register as Designer</Button></Link>
      </form>
    </div>
  );
}



export default Login;