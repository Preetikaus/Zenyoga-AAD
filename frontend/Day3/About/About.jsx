import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT ZENYOGA</h3>
        <h2>Empowering Your Journey to Balance</h2>
        <p>Discover Balance with ZenYoga. Our programs seamlessly integrate ancient wisdom with contemporary techniques, empowering you to explore the depths of your potential. Tailored for both personal growth and professional development, we offer a journey towards holistic well-being.</p>
        <p>Our curriculum is crafted to inspire. From foundational practices to advanced techniques and philosophies, ZenYoga prepares you to thrive in your personal journey and as a guide for others. Embrace the transformative power of yoga with us and find your inner harmony.</p>
        <p>Join ZenYoga and embark on a path of discovery and balance. Whether deepening your practice or aspiring to teach, our community supports your aspirations towards a healthier, more balanced life. Start your journey today and unfold the best version of yourself.</p>
      </div>
    </div>
  )
}

export default About