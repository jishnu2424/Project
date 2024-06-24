import React from 'react'
import LandingHero from '../Components/LandingHero'
import CardsLanding from '../Components/CardsLanding'
import LandingWhy from '../Components/LandingWhy'
import LandingTestimonial from '../Components/LandingTestimonial'
import LandingImpact from '../Components/LandingImpact'
import LandingDesigner from '../Components/LandingDesigner'
import LandingCategory from '../Components/LandingCategory'

function LandingPage() {
  return (
    <>
    <LandingHero/>
    <CardsLanding/>
    <LandingWhy/>
    <LandingImpact/>
    <LandingDesigner/>
    <LandingTestimonial/>
    <LandingCategory/>   
    </>
  )
}

export default LandingPage