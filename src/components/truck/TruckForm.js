import React from 'react';
import SelectUSState from 'react-select-us-states';
import sendForm from '../../utils/sendForm';
import validator from '../../utils/validator';


class TruckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            dbaName: '',
            mc: '',
            number: '',
            carrier: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            signature: '',
            signedContract: '',
            namedInsurance: '',
            w9: ''
        };
        this.baseState = {
            name: '',
            email: '',
            dbaName: '',
            mc: '',                 // Base state for resetting state ons submit.
            number: '',
            carrier: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            signature: '',
            signedContract: '',
            namedInsurance: '',
            w9: ''
        };
        this.required = ['name', 'email', 'dbaName', 'mc', 'number', 'carrier', 'address', 'city', 'state', 'zip', 'signature', 'signedContract', 'namedInsurance', 'w9'];

        this.getBase64 = this.getBase64.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    };
    async getBase64(file, type) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            this.setState(() => {
                return {
                    [type]: btoa(reader.result)
                }
            })
        };

        reader.onerror = () => {
            console.log('Something went wrong.');
        };
    };
    async onChange(event) {
        const formType = event.target.getAttribute('name');
        const formValue = event.target.value;
        await this.setState({
            [formType]: formValue
        });
    };
    async onFileUpload(event) {
        const formType = event.target.getAttribute('name');
        const formValue = event.target.files[0];


        this.getBase64(formValue, formType);

    };
    handleCheckbox(e) {
        const checked = e.target.checked;
        // Boolean to either show or hide e-sign input.
        this.setState({ checked });
    }
    async onStateChange(event) {
        this.setState({ state: event })
    };
    onSubmit(event) {
        event.preventDefault();

        if (validator(this.state, this.required)) {
            sendForm(this.state)
            .then(() => {
                // Clear forms, state, error, set response
                this.setState(this.baseState)
                this.setState({ error: '', response: 'Sent!' });
                document.querySelectorAll('input').forEach((input) => input.value = '');
            });
        } else {
            this.setState({ error: 'Please fill out the form completely.', response: ''})
        }

    };
    render() {
        return (
            <div>
                <p>{this.state.response}</p>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    Name: <input name='name' type='text' onChange={this.onChange}/>
                    Email: <input name='email' type='text' onChange={this.onChange}/>
                    Doing Business As: <input name='dbaName' type='text' onChange={this.onChange}/>
                    MC or CA: <select name='mc' defaultValue='' onChange={this.onChange}>
                        <option disabled></option>
                        <option>MC</option>
                        <option>CA</option>
                    </select>
                    <input name='number' type='text' onChange={this.onChange}/>
                    Carrier Type: <select defaultValue='' name='carrier' onChange={this.onChange}>
                        <option disabled></option>
                        <option>Contract</option>
                        <option>Carrier</option>
                    </select>
                    Address: <input  name='address' type='text' onChange={this.onChange}/>
                    City: <input name='city' type='text' onChange={this.onChange}/>
                    <SelectUSState onChange={this.onStateChange} />
                    Zip: <input name='zip' type='text' onChange={this.onChange}/>
                    Represenative: <input name='represenative' type='text' onChange={this.onChange}/>
                    E Sign: <input name='e-sign-contact' type='checkbox' onChange={this.handleCheckbox}/>
                    {this.state.checked && <div><span>Type your name to sign: </span><input name='signature' type='text' onChange={this.onChange}/></div>}
                    Signed Contract: <input name='signedContract' onChange={this.onFileUpload} type='file'/>
                    Named Insurance: <input name='namedInsurance' onChange={this.onFileUpload} type='file'/>
                    W9: <input name='w9' onChange={this.onFileUpload} type='file'/>
                    <button>Print Contract</button>
                    <button>Send Documents</button>
                </form>
            </div>
        );
    };
};

export default TruckForm;