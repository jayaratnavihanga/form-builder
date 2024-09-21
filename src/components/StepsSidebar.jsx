import React from 'react';
import { FiList, FiArrowRight } from 'react-icons/fi';
import './StepsSidebar.css';

const StepsSidebar = ({ onWelcomeScreenClick, onEmailClick }) => {
    return (
        <div className="steps-sidebar">
            <div className="steps-header">
                <FiList className="steps-icon"/>
                <span>Steps</span>
            </div>
            <p className="steps-description">The steps users will take to complete the form</p>
            <button className="welcome-screen-button" onClick={onWelcomeScreenClick}>
                <FiArrowRight className="arrow-icon"/> Welcome Screen
            </button>
            <button className="email-button" onClick={onEmailClick}>
                <FiArrowRight className="arrow-icon"/> Email
            </button>
        </div>
    );
};

export default StepsSidebar;
