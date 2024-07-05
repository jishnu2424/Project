import React, { useContext } from 'react'
import AdminCard from '../Components/AdminCard'
import { Button, Tab, Tabs } from 'react-bootstrap'
import AdminUserCard from '../Components/AdminUserCard'
import AdminContactView from '../Components/AdminContactView'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/userAuth'
import '../Styles/adminlogout.css'
import {toast} from 'react-toastify'

function AdminPage() {
  const { updateUser } = useContext(AuthContext);
  const navigate =useNavigate()

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('Logout successful');
      updateUser(null);
      toast.error('Logged Out')
      navigate("/");
    } catch (err) {
      console.log('Error during logout:', err);
    }
  };
  return (
    <>
    <Button className='adminlogout' onClick={handleLogout}>LogOut</Button>

      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      style={{fontWeight:"bold"}}
      >
        <Tab eventKey="home" title="Users">
          <AdminUserCard/>
        </Tab>
        <Tab eventKey="profile" title="Designers">
        <AdminCard/>
        </Tab>
        <Tab eventKey="longer-tab" title="Contact View">
          <AdminContactView/>
        </Tab>
      </Tabs>
    </>
  )
}

export default AdminPage