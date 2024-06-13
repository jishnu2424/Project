import React from 'react'
import "../Styles/testimonial.css"
import timg from '../Assets/testimonial.png'
import { Carousel } from 'react-bootstrap'


function LandingTestimonial() {
  return (
    <>
    <div>
        <img src={timg} alt="" width={'100%'} style={{marginTop:"50px"}} />
        <Carousel style={{backgroundColor:"#1A1A1A",height:"400px",fontFamily:"neue machina"}}>
      <Carousel.Item interval={1000}>
        <img src="https://i.pinimg.com/564x/46/7c/34/467c34eec205f8df292393e62c035e66.jpg" width={294}height={311} alt="" style={{marginLeft:"200px" ,marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"280px",textAlign:"left"}}>
          <h2>Vincent van Gogh</h2>
          <p>"A post-impressionist master known for his bold, emotive use of color and dramatic brushstrokes. <br /> His works like "Starry Night" and "Sunflowers" express deep emotional and psychological themes."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://i.pinimg.com/564x/4f/1a/b6/4f1ab6744b8025dfa62ecc559d005e06.jpg" width={294}height={311} alt="" style={{marginLeft:"200px",marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"285px",textAlign:"left"}}>
          <h2>Leonardo da Vinci</h2>
          <p>"A Renaissance genius whose masterpieces like "Mona Lisa" and "The Last Supper" showcase his mastery of realism and anatomical precision. <br /> Da Vinci's works are renowned for their detail, composition, and innovative techniques."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.pinimg.com/564x/c4/7a/94/c47a94f6f788816ece6210b29f2f5dc5.jpg" width={294}height={311} alt="" style={{marginLeft:"200px",marginTop:"20px"}} />
        <Carousel.Caption style={{marginLeft:"285px",textAlign:"left"}}>
          <h2>Pablo Picasso</h2>
          <p>
          "A pioneer of Cubism, Picasso's revolutionary approach to form and perspective changed the course of modern art. <br /> His prolific career spanned various styles, from the Blue Period to Surrealism.""
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    </div>
    </>
  )
}

export default LandingTestimonial