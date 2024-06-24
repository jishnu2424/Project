import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DesignerProfileSetup from '../Components/DesignerProfileSetup'
import DesignerDesign from '../Components/DesignerDesign'

function DesignerHomePage() {
  return (
    <>
    <Tabs style={{fontWeight:"bold"}}
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Designs">
       <DesignerDesign/>  
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <DesignerProfileSetup/>
    </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs></>
  )
}

export default DesignerHomePage