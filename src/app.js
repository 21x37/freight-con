import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv/config';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';


console.log(process.env.SENDGRID_API_KEY)


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
