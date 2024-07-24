import React from "react";
import "../Styles/aboutus.css";
import getint from '../Assets/grow wit us.png';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
      <div className="abt">
        <h1 className="ah1">About Us</h1>
        <p className="ap">
          At [ Freelance Business Name], we're passionate about the power of social media.
          We believe that in today's digital age, social media is more than just a platform;
          it's a dynamic tool for businesses and individuals to connect, engage, and grow.
        </p>
      </div>
      <div className="acnt">
        <div className="mission">
          <h3 className="amh3">Our Mission</h3>
          <p className="amp">
            To bring Employers and Freelancers together from around the globe to get work done.
          </p>
        </div>
        <div className="line1" />
        <div className="line2" />
        <div className="vision">
          <h3 className="amh3">Our Vision</h3>
          <p className="amp">
            To help build a better world that's interconnected for prosperity and wired for peace.
          </p>
        </div>
        <div className="line3" />
        <div className="line4" />
        <div className="Proposition">
          <h3 className="amh3">Our Proposition</h3>
          <p className="amp">
            Connect, collaborate, and get work done in a safe and flexible online environment.
          </p>
        </div>
      </div>

      <div className="sucss1">
        <div className="asb">
          <h2 className="ash2">Client Success Stories</h2>
          <p className="asp">
            Increased their Instagram following by 40% in just three months.
          </p>
          <p className="asp1">
            Boosted engagement rates on Twitter, Instagram, Facebook resulting in higher customer satisfaction and loyalty.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/b0/33/34/b033343565505d29d2d41522bdf256f2.jpg"
          alt=""
          style={{ width: '100%', maxWidth: '800px', margin: '50px 0', position: 'relative', zIndex: '1' }}
        />
      </div>

      <div className="ourservice">
        <h1>Our Service</h1>
        <p>
          Discover top-tier freelance designers for your creative projects. We connect you with a curated community of talented designers, skilled in graphic design, web design, and more. Find the perfect design professional to bring your vision to life, no strings attached.
        </p>
      </div>

      <div className="getint">
        <img src={getint} alt="" style={{ width: '100%', maxWidth: '400px', margin: '50px 0' }} />
        <h1 className="gh1">Grow with us</h1>
        <p className="gp">
          We’re shaping the future of work, with new products to discover, connect and manage any project. We’ve already empowered millions of people worldwide to become freelancers and connected 1 million clients to freelancers.
        </p>
        <Link to="/contact"><button className="gb">Get in Touch</button></Link>
      </div>
    </>
  );
}

export default AboutUs;
