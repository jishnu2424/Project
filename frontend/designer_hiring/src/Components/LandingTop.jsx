import React from 'react'
import '../Styles/landingtop.css'
import amazone from "../Assets/logo.png";
import microsoft from "../Assets/logo1.png";
import google from "../Assets/logo2.png";
import uber from "../Assets/logo4.png";
import adobe from "../Assets/logo3.png";
import discord from "../Assets/logo5.png";
import fedex from "../Assets/logo6.png";
import meta from "../Assets/logo7.png";

function LandingTop() {
  return (
    <>
      <div style={{height:"700px",backgroundColor:"white"}}>
        <div className="dtc">
          <h1 className="title">Top Clients</h1>
          <div className="logo-grid">
            <div className="logo-item">
              <img src={amazone} alt="Amazon" />
            </div>
            <div className="logo-item">
              <img src={microsoft} alt="Microsoft" />
            </div>
            <div className="logo-item">
              <img src={google} alt="Google" />
            </div>
            <div className="logo-item">
              <img src={uber} alt="Uber" />
            </div>
            <div className="logo-item">
              <img src={adobe} alt="Adobe" />
            </div>
            <div className="logo-item">
              <img src={discord} alt="Discord" />
            </div>
            <div className="logo-item">
              <img src={fedex} alt="FedEx" />
            </div>
            <div className="logo-item">
              <img src={meta} alt="Meta" />
            </div>
          </div>

          <h1 className="title">Interactions</h1>
          <div className="dint">
            <div className="interaction-numbers">
              <h1 className="interaction-number">51+</h1>
              <h1 className="interaction-number">65+</h1>
              <h1 className="interaction-number">70+</h1>
            </div>
            <div className="interaction-labels">
              <h1 className="interaction-label">Commissions</h1>
              <h1 className="interaction-label">Submissions</h1>
              <h1 className="interaction-label">Customers</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingTop
