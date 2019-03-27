import React from 'react';
import SelectUSState from 'react-select-us-states';

class TruckForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type='text'/>
                <input type='text'/>
                <select>
                    <option>MC</option>
                    <option>CA</option>
                </select><input type='text'/>
                <select>
                    <option>Contract</option>
                    <option>Carrier</option>
                </select>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <SelectUSState/>
                <input type='text'/>
                <input type='text'/>
                <input type='checkbox'/>
                <input type='checkbox'/>
                <input type='text'/>
                <input type='file'/>
                <input type='file'/>
                <input type='file'/>
                <button>Print Contract</button>
                <button>Send Documents</button>
                <p>Truck form</p>
            </div>
        );
    };
};

export default TruckForm;