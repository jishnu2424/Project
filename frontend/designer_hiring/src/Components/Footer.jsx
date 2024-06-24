import React from 'react'
import "../Styles/footer.css"
import footerimg from "../Assets/footerimg.jpg"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='marquee'>

    <div className='marquee1'>
        <marquee behavior="alternate" direction="right" className="mark" >THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .THRIVE . INSPIRE . CONNECT .</marquee>
    </div>
    </div>
    <div className='footer'>
      <div className='text'>
        <h1 className='h1'>
          Elevate <br /> your brand <br /> with Us.
        </h1>
      </div>
      <div className='image'>
        <img
          src={footerimg}
          height="495px"
          width="450px"
          className='footimg'
          alt=""
        />
      </div>
    </div>
    <div className='footb'>
    <Link to={'/'}><button className='bcktop'>Back To Home</button></Link>
    <Link to={'/privacy'}><h2 className='h2'>Privacy policy</h2></Link>
    <Link to={'/terms'}><h2 className='h2'>Terms & Conditions</h2></Link>
{/* useref */}
    </div>

    </>
  )
}

export default Footer