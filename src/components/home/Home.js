import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    slideOut() {
        // const nav = document.querySelector('.animated');
        // nav.classList.add('slideInLeft');
        // setTimeout(() => {

        // }, 3000)
        // console.log('slide')
    }
    render() {
        return (
            <div>
                <ImageCarousel />
                <div className='homepage-container'>
                <p>Serving all of North America</p> 
                <p>Freight Brokerage and Third Party Logistics Coordination</p>
                <p>Where most brokers' jobs end at getting you a truck, our work is just beginning. We can handle the very complex to the very simple, and we do it in the same way.</p>
                <p>We commit to uncovering all the details and tracking freight while communicating personally with customers throughout the entire process.</p>
                <Link to='/quote'><button className='button'>Get a Quote</button></Link>
                </div>
            </div>
        )
    }
}

    //    <Link to='/contact'><button onClick={this.slideOut} id='contact-btn'>Contact</button></Link>
    //    <Link to='/quote'><button onClick={this.slideOut} id='quote-btn'>Quote</button></Link>
export default Home;

