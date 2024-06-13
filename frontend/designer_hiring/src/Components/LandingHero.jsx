import React from "react";
import l1 from "../Assets/l1.png";
import "../Styles/landingh1.css";
import lh from "../Assets/lh1.png";
import cpannel from "../Assets/CPanel.png";
import ibm from "../Assets/IBM.png";
import google from '../Assets/Google.png'
import { Link } from 'react-router-dom'

function LandingHero() {
  return (
    <>
      <div className="lh">
        <h1 className="lh1">
          YOUR WORK <br />
          PEPOLE ARE HERE
        </h1>
        <img src={l1} alt="" className="imglh" />
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Link to={'/user'}><button className="lb1">Register As User </button></Link>
        <Link to={'/designerreg'}><button className="lb1">Register As Designer </button></Link>
        <div className="lhr1" />
      </div>
      <img src={lh} alt="" className="lhimg" />
      <div style={{ marginTop: "50px", backgroundColor: "black" }}>
        <div className="marquee1">
          <marquee behavior="alternate" direction="right" className="mark">
            <img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> . <img src={cpannel} alt="" /> . <img src={ibm} alt="" />{" "}
            .<img src={google} alt="" /> .{" "}
          </marquee>
        </div>
      </div>
    </>
  );
}

export default LandingHero;
