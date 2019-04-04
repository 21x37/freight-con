import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';



const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <div className='header-title-wrapper'>
                    <h1 className='header-title'><Link style={{color: '#FFF', textDecoration: 'none'}} to='/'>Freight Inc</Link></h1>
                </div>
                <div className='desktop-nav-wrapper'>
                    <DesktopNav />
                </div>
                <MobileNav />
            </div>
        </div>
    )
};

export default Header;