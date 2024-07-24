import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/adminuser.css';
import ApiRequest from '../Lib/ApiRequest';
import { toast } from 'react-toastify';

function AdminUserCard() {
  const [viewUser, setViewUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get("admin/view");
      const users = response.data.filter(user => user.role === "user");
      setViewUser(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await ApiRequest.delete(`admin/delete/${id}`);
        fetchData();
        toast.error('Deleted User');
      } catch (error) {
        console.log("Delete Error", error);
      }
    }
  };

  return (
    <>     
      <div style={{width:"100%",height:"auto",fontFamily:"neue machina"}}>
        {viewUser.map((item, index) => (
          <div className='aucad1' key={index}>
            <img src={item.photo} alt="" className='admupic'/>
            <h4 className='admuh3'> {item.username}</h4>
            <h5 className='admuh4'>Email : {item.email}</h5>
            <h5 className='admuh4'>Contact :  {item.number}</h5>
            <Button className='admudlt' onClick={() => deleteData(item._id)}>Delete</Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminUserCard;
