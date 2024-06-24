import React from 'react'
import AdminCard from '../Components/AdminCard'
import { Tab, Tabs } from 'react-bootstrap'
import AdminUserCard from '../Components/AdminUserCard'
import AdminContactView from '../Components/AdminContactView'

function AdminPage() {
  return (
    <>
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