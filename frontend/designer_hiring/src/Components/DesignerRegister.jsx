import React from 'react'
import '../Styles/designerreg.css'
import reg from '../Assets/register.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DesignerRegister() {
  return (
    <>
    <div style={{backgroundColor:"black" ,height:"800px"}}>
        <img src={reg} alt=""  style={{marginLeft:"800px",marginTop:"200px"}}/>
        <h1 className='dh1' >Create your account as Designer</h1>
        <form className='dserreg'>
        <label htmlFor="" className='dl1'>UserName</label>
        <input type="text"  placeholder='UserName' className='uinp'/>
        <label htmlFor=""className='dl1'>Email</label>
        <input type="email"  placeholder='Email' className='uinp'/>
        <label htmlFor=""className='dl1'>Password</label>
        <input type="password"  placeholder='Password' className='uinp'/>
        <label htmlFor=""className='dl1'>Confirm Password</label>
        <input type="Password"  placeholder='Confirm Password' className='uinp'/>
        <br /><br />
        <Link to={'/login'}><Button className='db1' >Register</Button></Link>
        </form>
    </div>
   

    </>
  )
}

export default DesignerRegister