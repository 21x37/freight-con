import React from 'react';
import SelectUSState from 'react-select-us-states';
import sendForm from '../../utils/sendForm';
import validator from '../../utils/validator';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            email: '',
            phone: '',
            pickupCity: '',
            pickupState: '',
            deliveryCity: '',
            deliveryState: ''

        };
        this.baseState = {
            name: '',               // Base state for resetting on sumbit.
            company: '',
            email: '',
            phone: '',
            pickupCity: '',
            pickupState: '',
            deliveryCity: '',
            deliveryState: ''

        };
        this.required = ['name', 'email', 'pickupCity', 'deliveryCity', 'company', 'phone', 'pickupState', 'deliveryState'];

        this.onChange = this.onChange.bind(this);
        this.validator = this.validator.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onChange(event) {
        // Updates state when input values change.

        const formType = event.target.getAttribute('name');
        const formValue = event.target.value;
        await this.setState({
            [formType]: formValue
        });
    }
    validator() {

    };
    async onSubmit(e) {
        e.preventDefault();

        // Validator checks state to see if it matches the requirements.
        const boolean = validator(this.state, this.required);

        if (boolean) {
            sendForm(this.state)
            .then(() => {
                // Clear fields on submit
                this.setState(this.baseState);
                this.setState({ error: '', response: 'Sent!' });
                document.querySelectorAll('input').forEach((input) => input.value = '');
            });
        } else {
            this.setState({ error: 'Please fill out all of the fields.', response: ''})
        };

    };
    render() {
        return (
            <div>
                <p>{this.state.response}</p>
                <p>{this.state.error}</p>
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