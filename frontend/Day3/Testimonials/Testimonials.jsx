import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Nivedhitha</h3>
                            <span>ZenYoga Academy, India</span>
                        </div>
                    </div>
                    <p>Choosing ZenYoga Academy was a pivotal moment for me. The vibrant community, world-class amenities, and unwavering pursuit of excellence have reshaped my educational path for the better.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Joan Grace</h3>
                            <span>ZenYoga Academy, India</span>
                        </div>
                    </div>
                    <p>Choosing ZenYoga Academy has been an exceptional decision. The supportive community, top-notch facilities, and commitment to excellence have surpassed my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Priyanka</h3>
                            <span>ZenYoga Academy, India</span>
                        </div>
                    </div>
                    <p>Enrolling at ZenYoga Academy was a game-changer for me. The unparalleled support, cutting-edge resources, and unwavering dedication to excellence have truly transformed my educational journey.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Preetika</h3>
                            <span>ZenYoga Academy, India</span>
                        </div>
                    </div>
                    <p>ZenYoga Academy has truly been a beacon of excellence in my educational journey. The nurturing community, innovative resources, and relentless pursuit of greatness have elevated my learning experience beyond measure.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
