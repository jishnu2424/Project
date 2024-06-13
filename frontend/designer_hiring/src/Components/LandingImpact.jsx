import React from 'react'
import '../Styles/landingimpact.css'
import p1 from '../Assets/Frame 59.png'



function LandingImpact() {
  return (
    <>
     <div className="container">
        <h1 className='li1'>Join us and <br /> give a boost to <br /> your business</h1>
        <div className="icons">
            <button className="icon">💡 Creative Excellence</button>
            <button className="icon">👥 Tailored Solutions</button>
            <button className="icon">🎯 Impactful Results</button>
        </div></div>

      <img src={p1} style={{marginLeft:"150px"}} alt="" />
    
    </>
  )
}

export default LandingImpact