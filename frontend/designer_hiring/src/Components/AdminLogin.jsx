import React, { useState } from 'react'
import login from '../Assets/loginimg.png'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {
    
    const [email,Setemail] = useState("")
   const [password,Setpassword] = useState('')

   const navigate = useNavigate()
   const handlEmail =(e)=>{
    Setemail(e.target.value)
   }
   const handlePassword =(e)=>{
     Setpassword(e.target.value)
   
   }
  
    const handleLogin =()=>{
        if(email == "admin@gmail.com" && password =="admin"){
            console.log(email,password);
            navigate('/admin')
        }
        else{
            alert("Enter Valid Details")
        }
    }


  return (
    <>
    <div style={{backgroundColor:"black" ,fontFamily:"neue machina", color:"white",width:"100%",height:"800px"}}>
        <img src={login} alt=""  style={{marginLeft:"750px",marginTop:"250px"}} />  
        <h1 className='llh1'>Login As Admin</h1>


        <form action=""  className='loginform' >
            <label htmlFor="" className='ll1'>Email </label>
            <input type="email" placeholder='Email' className='logininput'onChange={handlEmail}/>
            <label htmlFor="" className='ll1'>Password</label>
            <input type="password"  placeholder='password' className='logininput'onChange={handlePassword}/>
            <br /><br />
            <Button className='loginbtn'onClick={handleLogin}>Login </Button>
            
        </form>
    </div>
    
    </>
  )
}

export default AdminLogin