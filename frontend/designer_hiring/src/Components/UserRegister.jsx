import React from 'react'
import reg from '../Assets/register.png'
import '../Styles/userreg.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserRegister() {
  return (
    <>
    <div style={{backgroundColor:"black" ,height:"800px"}}>
        <img src={reg} alt=""  style={{marginLeft:"800px",marginTop:"200px"}}/>
        <h1 className='uh1' >Create your account as user</h1>
        <form className='userreg'>
        <label htmlFor="" className='ul1'>UserName</label>
        <input type="text"  placeholder='UserName' className='uinp'/>
        <label htmlFor=""className='ul1'>Email</label>
        <input type="email"  placeholder='Email' className='uinp'/>
        <label htmlFor=""className='ul1'>Password</label>
        <input type="password"  placeholder='Password' className='uinp'/>
        <label htmlFor=""className='ul1'>Confirm Password</label>
        <input type="Password"  placeholder='Confirm Password' className='uinp'/>
        <br /><br />
        <Link to={'/login'}><Button className='ub1' >Register</Button></Link>
        </form>
    </div>
   

    </>
  )
}

export default UserRegister