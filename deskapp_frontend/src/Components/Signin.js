import React, { useState } from 'react'
import Navbar from './Navbar'
import '../style/signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        employeeEmail: '',
        password: ''
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users/signin', formData);
            
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response.data);
            setErrorMessage('');
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage('Invalid username or password');
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='main1'>
                        <div className="img1">
                            <img src="https://geodatenkodex.de/fileadmin/_processed_/f/9/csm_T_Systems_White_Background_Square_a49a4ee65c.png" className="image" alt="..." />
                        </div>
                        <form onSubmit={handleSubmit} className='form1'>
                            <h5 className="card-title">SIGN IN</h5>
                            <div className="col-md-12">
                                <input type="email" name="employeeEmail" placeholder='Email Address' className="form-control" id="exampleInputEmail1" 
                                    value={formData.employeeEmail}
                                    onChange={handleChange} />
                            </div>
                            <div className="col-md-12">
                                <input type="password" name="password" placeholder='Password' className="form-control" id="exampleInputPassword1"
                                    value={formData.password}
                                    onChange={handleChange} />
                                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            </div>
                            <div className='col-md-12'>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%'}}>Sign In</button>
                            </div>
                            <div className='text-muted'>
                            <span>Don't have an account?</span> <Link to="/signup"  style={{ textDecoration: 'none', color: '#e20074' }}><span>Signup here</span></Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Signin
