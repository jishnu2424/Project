import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DesignerProfileSetup from '../Components/DesignerProfileSetup'
import DesignerDesign from '../Components/DesignerDesign'
import Chat from '../Components/Chat/Chat'
import ViewHire from '../Components/ViewHire'

function DesignerHomePage() {
  return (
    <>
    <Tabs style={{fontWeight:"bold"}}
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Designs">
       <DesignerDesign/>  
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <DesignerProfileSetup/>
    </Tab>
      <Tab eventKey="longer-tab" title="INBOX">
        <Chat/>
      </Tab>
      <Tab eventKey="hire" title="Hire Info">
        <ViewHire/>
      </Tab>
    </Tabs></>
  )
}

export default DesignerHomePage