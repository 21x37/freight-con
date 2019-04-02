import React from 'react';
import Header from '../Header';
import QuoteForm from './QuoteForm';
import QuoteText from './QuoteText';

const Quote = () => {
    return (
        <div>
            <Header />
            <QuoteText />
            <QuoteForm />
        </div>
    );
};

export default Quote;

