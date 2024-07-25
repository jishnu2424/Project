import React from 'react';
import '../Styles/landingimpact.css';
import p1 from '../Assets/Frame 59.png';
import { IoBulbOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbTargetArrow } from "react-icons/tb";

function LandingImpact() {
  return (
    <>
      <div className="container">
        <h1 className='li1'>Join us and <br /> give a boost to <br /> your business</h1>
        <div className="icons">
          <button className="icon"><IoBulbOutline /> Creative Excellence</button>
          <button className="icon"><LiaUserFriendsSolid /> Tailored Solutions</button>
          <button className="icon"><TbTargetArrow /> Impactful Results</button>
        </div>
      </div>
      <img src={p1} className='imgs' alt="" />
    </>
  )
}

export default LandingImpact;
