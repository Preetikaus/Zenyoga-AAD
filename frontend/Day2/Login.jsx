import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import '../assets/css/Login.css'
import { CircleChevronLeft } from "lucide-react";
import Footer from "../Components/Footer/Footer";
const Login = () => {
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: 'joan@gmail.com',
        email1: 'admin@gmail.com',
        password1: 'admin',
        password: '12345'
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((signin.email) == "joan@gmail.com" && (signin.password)== "12345")  {
            setTimeout(() => {
                navigate('/user/dashboard');
            }, 1500);

        }
        else if ((signin.email1) == "admin@gmail.com" && (signin.password1)== "admin")  {
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1500);

        }
    }

    return (
        <>
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth1-form app-x-shadow' onSubmit={handleSubmit}>
                            <h1 className='auth-heading'>Login</h1>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                        <Link to='/register' className='auth-links'>Register</Link>
                    </div>
                        <Link to='/'><button className='route-btn-1 bg-white'><CircleChevronLeft color="#25db00" /></button></Link>
                </div>
                <Footer />        
        </>
    )
}
export default Login;