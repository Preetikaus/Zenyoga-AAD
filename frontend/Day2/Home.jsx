import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Admission from '../Components/Admission/Admission'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Campus from '../Components/Gallery/Gallery'
import Testimonials from '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer'

const Home = () =>
{
    const [playState, setPlayState] = useState(false);
    return(
        <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Admission/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title="Student's Gallery "/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
     </div>
    )
}
export default Home;