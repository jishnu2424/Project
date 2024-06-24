import React, { useEffect, useState } from 'react'
import '../Styles/admincard.css'
import prof from '../Assets/Profile Picture Image.jpeg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminCard() {
  const [Viewdesigner, setViewdesigner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/viewdesigner");
      const designer = response.data.filter(user => user.role === "designer");

      setViewdesigner(designer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const deleteData =async (id)=>{
    try {
      await axios.delete(`http://localhost:5000/admin/deletedesigner/${id}`)
      fetchData()
      
    } catch (error) {
      console.log("Delete Error",error);
    }
  }
  return (
    <>
    <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        <h1 className='admh1'>Designers</h1>
        {Viewdesigner.map((item)=>(
        <div className='acad1'>
            <img src={prof}  alt=""  width={'100px'} height={"100px"} className='admpic'/>
            <h3 className='admh3'>{item.username}</h3>
            <Link to={`/admin/admincadview/${item._id}`}><Button className='admview'>View Designer</Button></Link>
            <Button className='admdlt' onClick={()=>deleteData(item._id)}>Delete</Button>
        </div>))}
    </div>
    </>

  )
}

export default AdminCard