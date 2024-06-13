import React from 'react'
import '../Styles/admincard.css'
import prof from '../Assets/Profile Picture Image.jpeg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminCard() {
  return (
    <>
    <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        <h1 className='admh1'>Designers</h1>
        <div className='acad1'>
            <img src={prof}  alt=""  width={'100px'} height={"100px"} className='admpic'/>
            <h3 className='admh3'>Designer Name</h3>
            <Link to={'/admin/admincadview'}><Button className='admview'>View Designer</Button></Link>
            <Button className='admdlt'>Delete</Button>
        </div>
    </div>
    </>

  )
}

export default AdminCard