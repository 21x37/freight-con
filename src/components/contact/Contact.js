import React from 'react';
import Header from '../Header';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <Header />
            <ContactText />
            <div className='contact-page-form-wrapper'>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;