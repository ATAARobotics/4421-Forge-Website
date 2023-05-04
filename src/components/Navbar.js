import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* <Link to='/' className='home-link'>
            <img src={require('../assets/logo-large.png')} alt='Home' className='home-link-img'/>
        </Link> */}
        <ul className='nav-items'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/robots' className='nav-link'>Robots</Link>
            </li>
            <li className='nav-item'>
                <Link to='/events' className='nav-link'>Events</Link>
            </li>
            <li className='nav-item'>
                <Link to='/sponsors' className='nav-link'>Sponsors</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;