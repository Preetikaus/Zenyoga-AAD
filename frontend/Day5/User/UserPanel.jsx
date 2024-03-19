import UserLeftbar from './UserLeftbar';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import '../../assets/css/User.css'

const UserPanel = () => {
    const navigate = useNavigate();
    const coursesRoute = () => {
        navigate('/courses')
    }
    const contactRoute = () => {
        navigate('/contact')
    }
    let uname = localStorage.getItem('xuserName');

    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        let greeting = '';
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good morning ';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Good afternoon ';
        } else {
            greeting = 'Good evening ';
        }

        setTimeOfDay(greeting);
    }, []);

    return (
        <>
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Dashboard
                </div>
                <div className='user-data-display'>
                    <div className='user-profile-container'>
                        <div className='user-profile-left-container'>
                        <div className='user-profile-box'>
                            <p>
                            <h3>{timeOfDay} {uname},</h3>
                            Welcome to your Dashboard!
                            <br/>
                            We are very happy to have you as a part of our family.
                            <br/>
                            Do check out our newly add courses.
                            <br/>
                            <button onClick={coursesRoute} className='btn '>Courses</button>
                            </p>
                        </div>
                            <div className='smaller-containers'>
                            <h3>100+ <p>Loyal customers</p></h3>
                            </div>
                            <div className='smaller-containers'>
                            <h3>10+ <p>Courses</p></h3>
                            </div>
                            <div className='smaller-containers'>
                            <h3>100% <p>Satisfaction rate</p></h3>
                            </div>
                        </div>
                        <div className='user-profile-right-container'>
                            <div className='socials-container'>
                                <p>
                                Visit our about page to know more about us.
                                <br/>
                                <button onClick={contactRoute} className='btn '>click here</button>
                                </p>
                                
                            </div>
                            <div className='socials-container'>
                                <p>
                               Thought for the day:
                               <br/>
                               The road to success is always under meditation.
                               </p>
                            </div>
                            <div className='socials-container'>
                                <p>
                                <Link to='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk1NjY5ODAyLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D'><FaFacebook size={50} style={{color:"#fff",marginRight:"5rem"}} /></Link>
                                <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><FaTwitter size={50} style={{color:"#fff",marginRight:"4rem"}} /></Link>
                                <Link to='https://www.instagram.com/'><FaInstagram size={50} style={{color:"#fff",marginRight:"5rem"}} /></Link>
                                <Link to ='https://www.youtube.com/'><FaYoutube size={50} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                                </p>
                            </div>
                            </div>


                
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserPanel;