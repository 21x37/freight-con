import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
    return (
        <div className='desktop-nav-container'>
            <ul>
                <li><Link style={{textDecoration: 'none', color: '#FFF'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#FFF'}} id='contact-nav' to='/contact'>Contact</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#FFF'}} id='quote-nav' to='/quote'>Quote</Link></li>
                <li><Link style={{textDecoration: 'none', color: '#FFF'}} id='truck-nav' to='/truck'>Truck Setup</Link></li>
            </ul>
        </div>
    );
};

export default DesktopNav;