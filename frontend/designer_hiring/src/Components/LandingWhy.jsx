import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../Styles/landingwhy.css'

function LandingWhy() {
  return (
    <>
    <div style={{backgroundColor:"#1A1A1A",height:"750px"}}>
    <Accordion defaultActiveKey="0" className='lwhy'style={{border:"none"}}>
    <Accordion.Item eventKey="0" className='lwhy' style={{marginLeft:"100px",marginRight:"100px"}} >
      <Accordion.Header className='lwhy'>Why social media and why us?</Accordion.Header>
      <Accordion.Body className='lwhy '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={{border:"none",marginLeft:"100px",marginRight:"100px",marginTop:"20px"}}>
      <Accordion.Header className='lwhy'>Broad Reach</Accordion.Header>
      <Accordion.Body className='lwhy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
   
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2"style={{border:"none",marginLeft:"100px",marginRight:"100px",marginTop:"20px"}}>
      <Accordion.Header className='lwhy'>Targeted Precision</Accordion.Header>
      <Accordion.Body className='lwhy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
   
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" style={{border:"none",marginLeft:"100px",marginRight:"100px",marginTop:"20px"}}>
      <Accordion.Header className='lwhy'>Cost-Effective</Accordion.Header>
      <Accordion.Body className='lwhy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
   
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4" style={{border:"none",marginLeft:"100px",marginRight:"100px",marginTop:"10px"}}>
      <Accordion.Header className='lwhy'>Real-Time Analytics</Accordion.Header>
      <Accordion.Body className='lwhy'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

    </div>

    </>
  )
}

export default LandingWhy