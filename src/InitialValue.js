import React from 'react';
import './InitialValue.css';

const InitialValue = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        const initalValue = event.target[0].value === '' ? 0 : event.target[0].value;
        props.setInitialValue(initalValue);
    }
    return (
            <form onSubmit={submitHandler}>
                <label>Enter the initial value and submit, else 0 will be taken as default :</label>
                <input className="initial-value" type="number" id="click-counter"/>
                <button className="form-submit" type='submit'>Submit</button>
            </form>
    )
}

export default InitialValue;