
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/Login.css'
import { CircleChevronLeft } from 'lucide-react';
import Footer from '../Components/Footer/Footer';


export default function Register() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address:'',
        role:'customer'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        }
    return (
        <> 
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth1-form app-x-shadow' onSubmit={handleSubmit}>
                            <h1 className='auth-heading'>Register</h1>
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required />
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required />
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Register </button>
                        </form>
                        <Link to='/login' className='auth-links'>Login</Link>
                    </div>
                    <Link to='/'><button className='route-btn-1 bg-white'><CircleChevronLeft color="#25db00" /></button></Link>
                </div>
                <Footer />
        </>
    )
}