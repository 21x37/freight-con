import React from 'react';
import sendForm from '../../utils/sendForm';
import validator from '../../utils/validator';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
        };
        this.baseState = {
            name: '',                //Base state for resetting on submit.
            email: '',
            company: '',
            phone: '',
            message: ''
        };
        this.required = ['name', 'email', 'company', 'phone', 'message'];

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        const formType = event.target.getAttribute('name');
        const formValue = event.target.value;

        // Setting state with name attribute of the input - [formType]
        // Setting state with value of input - formValue

        this.setState({
            [formType]: formValue
        });
    };

    onSubmit(event) {
        event.preventDefault();

        // Validator checks state to see if it matches the requirements.
        const boolean = validator(this.state, this.required);

        if (boolean) {
            // Sending post request to backend to send email
            sendForm(this.state)
            .then(() => {
                this.setState(this.baseState);
                this.setState({ error: '', response: 'Sent!' });
                document.querySelectorAll('input').forEach((input) => input.value = '');
                document.querySelector('textarea').value = '';
            });
        } else {
            this.setState({ error: 'Please fill out all of the fields.', response: '' })
        }

    };
    render() {
        return (
            <div>
                <div className='contact-form-container'>
                    <h2 className='form-text'>Send us a message!</h2>
                    <p className='error'>{this.state.error}</p>
                    <p>{this.state.response}</p>
                    <form onSubmit={this.onSubmit}>
                        <input className='input contact-input' name='name' type='text' placeholder='Name' onChange={this.onChange}/>
                        <input className='input contact-input' name='email' type='text' placeholder='Email' onChange={this.onChange}/>
                        <input className='input contact-input' name='company' type='text' placeholder='Company' onChange={this.onChange}/>
                        <input className='input contact-input' name='phone' type='text' placeholder='Phone' onChange={this.onChange}/>
                        <textarea className='input' name='message' placeholder='Message' onChange={this.onChange}></textarea>
                        <button className='button button__contact'>Send</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default ContactForm