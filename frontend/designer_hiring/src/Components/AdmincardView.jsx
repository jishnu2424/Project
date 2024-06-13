import React from 'react'
import { Button } from 'react-bootstrap'
import '../Styles/admincadview.css'
import { Link } from 'react-router-dom'

function AdmincardView() {
  return (
    <>
         <div className="profile-card">
          <div className="header">
            <img
              src="https://i.pinimg.com/736x/41/9c/bb/419cbb0513df24eff5a8243fcdf54c9e.jpg"
              alt="Profile"
              className="dpic"
            />
            <div className="header-text">
              <h2 className="dpn">Designer</h2>
            </div>
           <Link to={'/admin'}> <Button className="dbtn1">Back to Profile</Button></Link>
            <Button className="dbtn">Delete now</Button>
          </div>
          <div className="experience">
            <div>
              <h3>9+ Years</h3>
              <p>work experience</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>monthly interactions</p>
            </div>
            <div>
              <h3>30+</h3>
              <p>projects completed</p>
            </div>
          </div>
          <div className="about">
            <h2>About</h2>
            <h3>Professional Overview</h3>
            <p>
              I am an accomplished designer with a rich and diverse background
              in the world of design. My journey in this creative field has
              spanned numerous disciplines, from graphic and web design to
              interior and product design. With several years of hands-on
              experience, I've developed a deep-seated passion for turning
              concepts into visually striking and functional designs. This
              passion is fueled by a constant exploration of design principles,
              color theory, and the latest trends in the industry. My work is
              not merely a job; it's a calling that inspires me to push the
              boundaries of creativity, making every project an opportunity to
              deliver innovative, user-centric, and aesthetically pleasing
              solutions. My commitment to both meeting and surpassing client
              objectives is unwavering, and I find immense joy in captivating
              audiences with my unique blend of artistry and a discerning eye
              for visual aesthetics. My design journey is an ongoing adventure,
              and I look forward to every opportunity to create, inspire, and
              bring fresh perspectives to the design world.
            </p>
          </div>
          <div className="skills">
            <h2>Skills And Expertise</h2>
            <div className="skills-list">
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>InDesign</span>
              <span>Adobe XD</span>
              <span>Sketch</span>
              <span>Inkscape</span>
              <span>Canva</span>
              <span>SketchUp</span>
              <span>Blender</span>
            </div>
          </div>
         </div>
    </>
  )
}

export default AdmincardView