import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <p>Serving all of North America</p> 
           <p>Freight Brokerage and Third Party Logistics Coordination</p>
           <p>Contact </p>
           <Link to='/contact'><button id='contact-btn'>Contact</button></Link>
           <Link to='/quote'><button id='quote-btn'>Quote</button></Link>
        </div>
    )
}

export default Home;