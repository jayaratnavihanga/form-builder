// src/components/StepsSidebar.jsx
import React from 'react';
import { FiList, FiArrowRight } from 'react-icons/fi'; // Import any necessary icons
import './StepsSidebar.css'; // Import the CSS file

const StepsSidebar = ({ onWelcomeScreenClick }) => {
    return (
        <div className="steps-sidebar">
            <div className="steps-header">
                <FiList className="steps-icon" />
                <span>Steps</span>
            </div>
            <p className="steps-description">The steps users will take to complete the form</p>
            <button className="welcome-screen-button" onClick={onWelcomeScreenClick}>
                <FiArrowRight className="arrow-icon" /> Welcome Screen
            </button>
        </div>
    );
};

export default StepsSidebar;
