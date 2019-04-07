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
                <div className='truck-form-container'>
                    <h2 className='form-text'>Truck Setup</h2>
                    <p>{this.state.response}</p>
                    <p>{this.state.error}</p>
                    <form onSubmit={this.onSubmit}>
                        <input className='input truck-input' placeholder='Name' name='name' type='text' onChange={this.onChange}/>
                        <input className='input truck-input' placeholder='Email' name='email' type='text' onChange={this.onChange}/>
                        <input className='input truck-input' placeholder='Doing Business As' name='dbaName' type='text' onChange={this.onChange}/>
                        <br/>
                        <select name='mc' defaultValue='' onChange={this.onChange}>
                            <option disabled></option>
                            <option>MC</option>
                            <option>CA</option>
                        </select>
                        <br/>
                        <input className='input truck-input' placeholder='Number' name='number' type='text' onChange={this.onChange}/>
                        <br/>
                        <select defaultValue='' name='carrier' onChange={this.onChange}>
                            <option disabled></option>
                            <option>Contract</option>
                            <option>Carrier</option>
                        </select>
                        <br/>
                        <input className='input truck-input' placeholder='Address'  name='address' type='text' onChange={this.onChange}/>
                        <input className='input truck-input' placeholder='City' name='city' type='text' onChange={this.onChange}/>
                        <input className='input truck-input' placeholder='State' name='state' type='text' onChange={this.onChange}/>
                        <input className='input truck-input' placeholder='Zip' name='zip' type='text' onChange={this.onChange}/>
                        <input className='input' placeholder='Represenative' name='represenative' type='text' onChange={this.onChange}/>
                        <br/>
                        <input className='input truck-input' placeholder='E Sign' name='e-sign-contact' type='checkbox' onChange={this.handleCheckbox}/>
                        <br/>
                        {this.state.checked && <div><p>Type your name to sign</p><input className='input truck-input' name='signature' type='text' onChange={this.onChange}/></div>}

                        <input id='namedInsurance' style={{display: 'none'}} name='namedInsurance' onChange={this.onFileUpload} type='file'/>
                        <button className='truck-button' type='button'><label htmlFor='namedInsurance'>Upload Named</label></button>
                        <br/>
                        <input id='w9' style={{display: 'none'}} name='w9' onChange={this.onFileUpload} type='file'/>
                        <button className='truck-button' type='button'><label htmlFor='w9'>Upload W9</label></button>
                        <br/>
                        <br/>
                        <button className='button'>Send Documents</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default TruckForm;


// <input id='signedContract' name='signedContract' style={{display: 'none'}} onChange={this.onFileUpload} type='file'/>
// <button type='button'><label htmlFor='signedContract'>Upload Signed</label></button>
// <br/>