import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  localStorage.removeItem('user');
  const navigate = useNavigate();
  const start = () => {
    navigate('/signin');
  }
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='main'>
            <div className='head-text'>
              <h2 className='heading1'>DESK SHARING APPLICATION<br /></h2>
              <h3>
                <small className="text-muted">Platform to Reserve Your Desk in Advance!</small>
              </h3>
              <div className='desk-btn'>
                <button className='btn btn-primary' onClick={start}>Book Your Desk</button>
              </div>
            </div>
          
          <div className='img'>
            <img src='https://static.vecteezy.com/system/resources/previews/004/578/699/non_2x/man-working-with-computer-with-app-in-isometric-illustration-free-vector.jpg' height="450" alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
