import React from 'react';
import { Link } from 'react-router-dom';

class MobileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            navSlidOut: false,
            disabled: false
        }
        this.onClick = this.onClick.bind(this);
    };
    onClick() {
        const navSlidOut = this.state.navSlidOut;
        if (navSlidOut) {
            const nav = document.querySelector('.animated');
            this.setState({ disabled: true });
            this.setState({ navSlidOut: false });
            nav.addEventListener('animationend', () => {
                this.setState({ isVisible: false });
                this.setState({ disabled: false })
            })
        } else {
            const nav = document.querySelector('.animated');
            this.setState({ disabled: true })
            this.setState({ navSlidOut: true });
            nav.addEventListener('animationend', () => {

            })
                this.setState({ isVisible: true });
                this.setState({ disabled: false })
        }
    };
    render() {
        return (
            <div>
                <div className='nav-button-mobile-wrapper' onClick={() => {
                    if (!this.state.disabled) {
                        this.onClick();
                    }
                }}>
                <div className='contact-link'>
                    <Link style={{textDecoration: 'none', color: '#FFF'}}  to='/contact'>Contact</Link>
                </div>

                    {!this.state.navSlidOut && <div className='nav-button'>
                        <div className='nav-line'></div>
                        <div className='nav-line'></div>
                        <div className='nav-line'></div>
                    </div>}

                    {this.state.navSlidOut && <div className='nav-button nav-button-x'>
                        <div className='nav-line nav-line-1'></div>
                        <div className='nav-line nav-line-2'></div>
                    </div>}

                </div>
                <div className={`animated ${this.state.navSlidOut ? 'slideInLeft' : 'slideOutLeft'}`}>
                    <div className={`mobile-nav-wrapper ${this.state.isVisible ? '' : ''}`}>
                        <div className='mobile-nav-container'>
                            <ul className='mobile-nav'>
                                <li><Link style={{color: '#000', textDecoration: 'none'}} to='/'>Home</Link></li>
                                <li><Link style={{color: '#000', textDecoration: 'none'}} id='contact-nav' to='/contact'>Contact</Link></li>
                                <li><Link style={{color: '#000', textDecoration: 'none'}} id='quote-nav' to='/quote'>Quote</Link></li>
                                <li><Link style={{color: '#000', textDecoration: 'none'}} id='truck-nav' to='/truck'>Truck Setup</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        );
    };
};

export default MobileNav;

// <li><Link style={{color: '#000', textDecoration: 'none'}} id='blog-nav' to='/blog'>Blog</Link></li>
