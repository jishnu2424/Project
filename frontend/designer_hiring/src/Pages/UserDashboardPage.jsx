import React from 'react'
import UserDashBoard from '../Components/UserDashBoard'
import { Tab, Tabs } from 'react-bootstrap'
import UserFavCard from '../Components/UserFavCard'

function UserDashboardPage() {
  return (
    <>

<Tabs style={{fontWeight:"bold"}}
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Favorates">
       <UserFavCard/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <UserDashBoard/>  
    </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
    </>
  )
}

export default UserDashboardPage