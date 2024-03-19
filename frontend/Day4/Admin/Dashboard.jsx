import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import '../../assets/css/User.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  let fdc = 10;
  const contactRoute = () => {
        navigate('/contact')
    }
  const serviceRoute = () => {
        navigate('/admin/products/view')
    }
    const getCount = async () => {
    try {
      const [productsData, userData, ordersData] = await Promise.all([
        // getProductCount(),
        // getUserCount(),
        // getOrderCount()
        // getFeedbacktCount(),
      ]);
      setProducts(productsData.data)
      setUsers(userData.data)
      setOrders(ordersData.data)

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCount()
  }, [])

  return (
    <>
      <Layout />
      <div className='mainx'>
                <div className='titlebar'>
                    Dashboard
                </div>
                <div className='user-data-display'>
                    <div className='user-profile-container'>
                        <div className='user-profile-left-container'>
                        <div className='user-profile-box'>
                            <p>
                            <h3> Greetings Admin,</h3>
                            Welcome to your Dashboard!
                            <br/>
                            Check out your stats below.
                            <br/>
                            Would like to add new services?
                            <br/>
                            <button onClick={serviceRoute} className='btn '>click here</button>
                            </p>
                        </div>
                            <div className='smaller-containers'>
                            <h3>{users.count-2}<p>Users</p></h3>
                            </div>
                            <div className='smaller-containers'>
                            <h3>{products.count} <p>Services</p></h3>
                            </div>
                            <div className='smaller-containers'>
                            <h3>{orders.count} <p>Orders</p></h3>
                            </div>
                        </div>
                        <div className='user-profile-right-container'>
                            <div className='socials-container'>
                                <p>
                                Having trouble with your account? Write to us at
                                <br/>
                                <button onClick={contactRoute} className='btn '>click here</button>
                                </p>
                                
                            </div>
                            <div className='socials-container'>
                                <p>
                               Feedback Count:
                               <br/>
                               {fdc}
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
  )
}
export default Dashboard;