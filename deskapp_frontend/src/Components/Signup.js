import React, { useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import '../style/signup.css';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        employeeName: '',
        employeeEmail: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        } else {
            setErrorMessage('');
        }
        try {
            const response = await axios.post('http://localhost:4000/users/signup', formData);
            console.log(response.data);
            navigate("/signin");
            alert('user created');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="main1">
                    <div className='img1'>
                        <img src="https://geodatenkodex.de/fileadmin/_processed_/f/9/csm_T_Systems_White_Background_Square_a49a4ee65c.png" className="image" alt="..." />
                    </div>

                    <form onSubmit={handleSubmit} className='form1'>
                        <h5 className="card-title">SIGN UP</h5>
                        <div className="col-md-12">
                            <input type="name" name="employeeName" placeholder='Employee Name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp"
                                onChange={handleChange}
                                value={formData.employeeName} />
                        </div>
                        <div className="col-md-12">
                            <input type="email" name="employeeEmail" placeholder='Email Address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={handleChange}
                                value={formData.employeeEmail} />
                        </div>
                        <div className="col-md-12">
                            <input type="password" name="password" placeholder='Password' className="form-control" id="exampleInputPassword1"
                                onChange={handleChange}
                                value={formData.password} />
                        </div>
                        <div className="col-md-12">

                            <input type="password" name="confirmPassword" placeholder='Confirm Password' className="form-control" id="exampleInputPassword2"
                                onChange={handleChange}
                                value={formData.confirmPassword} />
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        </div>
                        <div className='col-md-12'>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%'}}>Sign Up</button>
                        </div>
                        <div className='text-muted'>
                            <span>Already have an account?</span> <Link to="/signin"  style={{ textDecoration: 'none', color: '#e20074' }}><span>Signin here</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default Signup
