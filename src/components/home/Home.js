import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    slideOut() {
        const nav = document.querySelector('.animated');
        nav.classList.add('slideInLeft');
        setTimeout(() => {

        }, 3000)
        console.log('slide')
    }
    render() {
        return (
            <div>
                <ImageCarousel />
               <p>Serving all of North America</p> 
               <p>Freight Brokerage and Third Party Logistics Coordination</p>

            </div>
        )
    }
}

    //    <Link to='/contact'><button onClick={this.slideOut} id='contact-btn'>Contact</button></Link>
    //    <Link to='/quote'><button onClick={this.slideOut} id='quote-btn'>Quote</button></Link>
export default Home;