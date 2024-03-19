import { useNavigate } from "react-router-dom"
import '../../assets/css/Style.css';
import { useState } from "react"
const Navbar1= () => {
    const navigate =useNavigate()
    const homeRoute = () => {
        navigate('/')
    }
    const contactRoute = () => {
        navigate('/contact')
    }
    const coursesRoute = () => {
        navigate('/courses')
    }
    const admissionRoute = () => {
        navigate('/admission')
    }
    const loginRoute = () => {
        navigate('/login')
    }
    const [color,setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  
  window.addEventListener("scroll",changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
        <div className="navbar-container">
            <div className="navbar-l">
               <h1 onClick={homeRoute}>ZenYoga</h1>
            </div>
            <div className="navbar-r">
                <div className="navbar-b" onClick={coursesRoute} >
                    Courses
                </div>
                <div className="navbar-b" onClick={admissionRoute}>
                    Admissions
                </div>
                <div className="navbar-b" onClick={contactRoute}>
                    Contact Us
                </div>
                <div className="navbar-b" onClick={loginRoute}>
                    Dashboard
                </div>
            </div>

        </div>
        </div>
    )
}
export default Navbar1