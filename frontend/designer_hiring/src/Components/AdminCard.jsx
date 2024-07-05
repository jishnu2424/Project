import React, { useContext, useEffect, useState } from 'react'
import '../Styles/admincard.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/userAuth'
import ApiRequest from '../Lib/ApiRequest'
import {toast} from 'react-toastify'

function AdminCard() {
  const [Viewdesigner, setViewdesigner] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("admin/viewdesigner");
      const designer = response.data.filter(user => user.role === "designer");

      setViewdesigner(designer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const deleteData =async (id)=>{
    try {
      await ApiRequest.delete(`admin/deletedesigner/${id}`)
      fetchData()
      toast.error("Deleted Designer")
      
    } catch (error) {
      console.log("Delete Error",error);
    }
  }

  
  return (
    <>
    <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        <h1 className='admh1'>Designers</h1>
        {Viewdesigner.map((item,index)=>(
        <div className='acad1' key={index}>
            <img src={item.photo}  alt=""  width={'100px'} height={"100px"} className='admpic'/>
            <h3 className='admh3'>{item.username}</h3>
            <Link to={`/admin/admincadview/${item._id}`}><Button className='admview'>View Designer</Button></Link>
            <Button className='admdlt' onClick={()=>deleteData(item._id)}>Delete</Button>
        </div>))}
    </div>
    </>

  )
}

export default AdminCard