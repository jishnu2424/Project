import React from 'react'
import { Button } from 'react-bootstrap'
import prof from '../Assets/Profile Picture Image.jpeg'
import '../Styles/adminuser.css'

function AdminUserCard() {
  return (
    <>
         <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        <h1 className='admuh1'>Users Details</h1>
        <div className='aucad1'>
            <img src={prof}  alt=""  width={'100px'} height={"100px"} className='admupic'/>
            <h3 className='admuh3'>User Name</h3>
            <h4 className='admuh4'>Email :User@gmail.com</h4>
            <h4 className='admuh4'>Contact : 987654321</h4>
            <Button className='admudlt'>Delete</Button>
        </div>
    </div>

    </>
  )
}

export default AdminUserCard