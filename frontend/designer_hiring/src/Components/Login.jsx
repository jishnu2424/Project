import React from 'react'
import '../Styles/login.css'
import login from '../Assets/loginimg.png'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Login() {
  return (
    <>
    <div style={{backgroundColor:"black" ,fontFamily:"neue machina", color:"white",width:"100%",height:"800px"}}>
        <img src={login} alt=""  style={{marginLeft:"750px",marginTop:"250px"}} />  
        <h1 className='llh1'>Login to your account</h1>
        <form action="" className='loginform'>
            <label htmlFor="" className='ll1'>Email </label>
            <input type="email" placeholder='Email' className='logininput' />
            <label htmlFor="" className='ll1'>Password</label>
            <input type="password"  placeholder='password' className='logininput'/>
            <br /><br />
            <Button className='loginbtn'>Login </Button>
            <br />
            <h3>New User</h3>
            <br />
           <Link to={'/user'} ><Button className='reg-user' >Reg as User</Button></Link> 
           <Link to={'/designerreg'}> <Button className='reg-des'>Reg as Designer</Button></Link>

        </form>
    </div>

    </>
  )
}

export default Login