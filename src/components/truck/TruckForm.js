import React from 'react';
import SelectUSState from 'react-select-us-states';

class TruckForm extends React.Component {
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
    };
    async onFileUpload(event) {
        console.log(event.target.files[0]);
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Name <input name='name' type='text' onChange={this.onChange}/>
                    Email <input name='email' type='text' onChange={this.onChange}/>
                    Doing Business As<input name='dbaName' type='text' onChange={this.onChange}/>
                    MC or CA<select name='mc' defaultValue='' onChange={this.onChange}>
                        <option disabled></option>
                        <option>MC</option>
                        <option>CA</option>
                    </select>
                    <input name='number' type='text' onChange={this.onChange}/>
                    Carrier Type <select defaultValue='' name='carrier' onChange={this.onChange}>
                        <option disabled></option>
                        <option>Contract</option>
                        <option>Carrier</option>
                    </select>
                    Address <input  name='address' type='text' onChange={this.onChange}/>
                    City <input name='city' type='text' onChange={this.onChange}/>
                    State <input name='state' type='text' onChange={this.onChange}/>
                    <SelectUSState/>
                    Zip <input name='zip' type='text' onChange={this.onChange}/>
                    Represnative <input name='represenative' type='text' onChange={this.onChange}/>
                    E Sign<input name='e-sign-contact' type='checkbox' onChange={this.onChange}/>
                    Print Contact<input name='print-contract' type='checkbox' onChange={this.onChange}/>
                    <input onChange={this.onFileUpload} type='file'/>
                    <input onChange={this.onFileUpload} type='file'/>
                    <input onChange={this.onFileUpload} type='file'/>
                    <button>Print Contract</button>
                    <button>Send Documents</button>
                    <p>Truck form</p>
                </form>
            </div>
        );
    };
};

export default TruckForm;