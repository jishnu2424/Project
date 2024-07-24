import React from 'react'
import UserDashBoard from '../Components/UserDashBoard'
import { Tab, Tabs } from 'react-bootstrap'
import UserFavCard from '../Components/UserFavCard'
import Chat from '../Components/Chat/Chat'

function UserDashboardPage() {
  return (
    <>

<Tabs style={{fontWeight:"bold"}}
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Favorates">
       <UserFavCard/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <UserDashBoard/>  
    </Tab>
      <Tab eventKey="longer-tab" title="INBOX">
        <Chat/>
      </Tab>
    </Tabs>
    </>
  )
}

export default UserDashboardPage