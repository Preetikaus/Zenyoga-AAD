import { useNavigate } from 'react-router-dom'

function UserLeftbar() {
    
    const navigate = useNavigate();

    const orderHandler = () => {
        navigate('/user/courses')
    }
    const settingsHandler = () => {
        navigate('/user/settings')
    }
    const instituitionHandler = () =>
    {
        navigate('/user/instituitions')
    }
    const homeHandler = () => {
        navigate('/')
    }
    const logoutHandler = () => {
            navigate('/login');
    }
    return (
                <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={orderHandler}>
                        Courses
                    </button>
                    <button className='left-bar-button nav-btn' onClick={instituitionHandler}>
                        Institutions
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        Settings
                    </button>
                    <button className='left-bar-button nav-btn' onClick={homeHandler}>
                        Home
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
    )
}

export default UserLeftbar