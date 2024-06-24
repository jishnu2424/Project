import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import prof from '../Assets/Profile Picture Image.jpeg'
import '../Styles/adminuser.css'
import axios from 'axios'

function AdminUserCard() {
  const [viewUser, setViewUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/view");
      const users = response.data.filter(user => user.role === "user");
      setViewUser(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const deleteData =async (id)=>{
    try {
      await axios.delete(`http://localhost:5000/admin/delete/${id}`)
      fetchData()
      
    } catch (error) {
      console.log("Delete Error",error);
    }
  }
  return (
    <>     
         <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        <h1 className='admuh1'>Users Details</h1>
        {viewUser.map((item)=>(
        <div className='aucad1'>
            <img src={prof}  alt=""  width={'100px'} height={"100px"} className='admupic'/>
            <h4 className='admuh3'> {item.username}</h4>
            <h5 className='admuh4'>Email : {item.email}</h5>
            <h5 className='admuh4'>Contact :  {item.number}</h5>
            <Button className='admudlt'  onClick={()=>deleteData(item._id)}>Delete</Button>
        </div>))}
    </div>

    </>
  )
}

export default AdminUserCard