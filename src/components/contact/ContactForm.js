import React from 'react';
import sendContactForm from '../../utils/sendContactForm';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

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

        // Sending post request to backend to send email
        sendContactForm(this.state)
        .then((res) => {
            this.setState(() => {
                // Either spreading out error object or data object.
                return {
                    ...res
                };
            });
        });

    };
    render() {
        return (
            <div>
                <h2>Send us a message!</h2>
                <p>{this.state.error || this.state.data}</p>
                <form onSubmit={this.onSubmit}>
                    Name: <input name='name' type='text' onChange={this.onChange}/>
                    Email: <input name='email' type='text' onChange={this.onChange}/>
                    Company: <input name='company' type='text' onChange={this.onChange}/>
                    Phone: <input name='phone' type='text' onChange={this.onChange}/>
                    Message: <textarea name='message' onChange={this.onChange}></textarea>
                    <button>Send</button>
                </form>
            </div>
        );
    };
};

export default ContactForm