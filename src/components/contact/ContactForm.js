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
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        // Error Handling
        // Send Email
        // Show received on screen
    };
    render() {
        return (
            <div>
                <h2>Send us a message!</h2>
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