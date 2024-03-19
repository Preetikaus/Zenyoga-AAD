import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to ZenYoga Academy's Online Admission Portal</h1>
        <p>Our cutting-edge curriculum is meticulously crafted to empower students with the knowledge, skills, and experiences necessary to excel in the dynamic and enriching field of yoga. With a blend of ancient wisdom and contemporary practices, we are committed to guiding our students on a transformative journey towards personal and professional mastery in yoga.</p>
        <Link to ='/login'><button className='btn'>Explore more <img src={dark_arrow} alt="" /></button></Link>
      </div>
    </div>
  )
}

export default Hero