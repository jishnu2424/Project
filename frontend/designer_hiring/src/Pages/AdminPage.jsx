import React, { useContext } from 'react'
import AdminCard from '../Components/AdminCard'
import { Button, Tab, Tabs } from 'react-bootstrap'
import AdminUserCard from '../Components/AdminUserCard'
import AdminContactView from '../Components/AdminContactView'
import { useNavigate } from 'react-router-dom'
import '../Styles/adminlogout.css'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { updateUser } from '..//Components/Redux/userSlice'; // Import updateUser action
import ViewHireAdmin from '../Components/ViewHireAdmin'


function AdminPage() {
  const navigate =useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('Logout successful');
      dispatch(updateUser(null)); // Dispatch updateUser action from Redux to update currentUser
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
        <Tab eventKey="longer-b" title="Hire Info View">
          <ViewHireAdmin/>
        </Tab>
      </Tabs>
    </>
  )
}

export default AdminPage