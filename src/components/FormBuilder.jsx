import React from 'react';
import './FormBuilder.css';

const FormBuilder = ({ onGetStarted }) => {
    return (
        <div className="form-builder">
            <h1>Form Builder</h1>
            <p>Welcome to the Form Builder! Click below to get started.</p>
            <button onClick={onGetStarted}>Get Started</button>
        </div>
    );
};

export default FormBuilder;
