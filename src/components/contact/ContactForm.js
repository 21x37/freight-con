import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        const formType = event.target.getAttribute('name');
        const formValue = event.target.value;

        this.setState({
            [formType]: formValue
        });
    };
    onSubmit() {
        console.log(this.state);

        // Error Handling
        // Send Email
        // Show received on screen
    };
    render() {
        return (
            <div>
                <h2>Send us a message!</h2>
                <form>
                    Name: <input name='name' type='text'/>
                    Email: <input name='email' type='text'/>
                    Company: <input name='company' type='text'/>
                    Phone: <input name='phone' type='text'/>
                    Message: <textarea name='message'></textarea>
                    <button>Send</button>
                </form>
            </div>
        );
    };
};

export default ContactForm