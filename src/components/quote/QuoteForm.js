import React from 'react';
import sendQuoteForm from '../../utils/sendQuoteForm';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onChange(event) {
        const formType = event.target.getAttribute('name');
        const formValue = event.target.value;
        await this.setState({
            [formType]: formValue
        });
    }
    async onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        sendQuoteForm(this.state);

        // Error handling
        // Call to send email to dispatcher
        // Show recevied on screen

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Name: <input name='name' type='text' onChange={this.onChange} /><br/>
                    Email: <input name='email' type='text' onChange={this.onChange} /><br/>
                    Pickup City: <input name='pickupCity' type='text' onChange={this.onChange} /><br/>
                    Delivery City: <input name='deliveryCity' type='text' onChange={this.onChange} /><br/>

                    Company: <input name='company' type='text' onChange={this.onChange} /><br/>
                    Phone: <input name='phone' type='text' onChange={this.onChange} /><br/>
                    Pickup State: <input name='pickupState' type='text' onChange={this.onChange} /><br/>
                    Delivery State: <input name='deliveryState' type='text' onChange={this.onChange} /><br/>
                    <button>Get Quote!</button>
                </form>
            </div>
        );
    };
};

export default QuoteForm;