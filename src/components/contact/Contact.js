import React from 'react';
import Header from '../Header';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <Header />
            <ContactText />
            <ContactForm />
            <p>Contact page</p>
        </div>
    );
};

export default Contact;