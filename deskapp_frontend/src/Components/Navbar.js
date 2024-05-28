import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <nav className='navbar navbar-dark'>
            <div className='container-fluid'>
                <img className="navbar-img" src="https://geodatenkodex.de/fileadmin/_processed_/f/9/csm_T_Systems_White_Background_Square_a49a4ee65c.png" alt="logo" style={{ cursor: 'pointer' }}></img>
                <h2 className="centered">DTCS</h2>
                <ul className='navbar-nav'>
                    {user ? (
                        <>
                        <li className='nav-item'>
                            <Link className='nav-link active' to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active' to='/'>Logout</Link>
                        </li>
                        </>)
                        : (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/signup'>SignUp</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/signin'>SignIn</Link>
                                </li></>
                        )
                    }
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
