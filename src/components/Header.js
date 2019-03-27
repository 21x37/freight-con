import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Freight Broker</h1>
            <Link to='/'>Home</Link>
            <Link id='contact-nav' to='/contact'>Contact</Link>
            <Link id='quote-nav' to='/quote'>Quote</Link>
            <Link id='truck-nav' to='/truck'>Truck Setup</Link>
            <Link id='blog-nav' to='/blog'>Blog</Link>
        </div>
    )
};

export default Header;