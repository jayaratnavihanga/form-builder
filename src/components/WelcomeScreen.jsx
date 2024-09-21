// src/components/WelcomeScreen.jsx
import React from 'react';
import './WelcomeScreen.css'; // Import the CSS file


const WelcomeScreen = ({ title, setTitle, description, setDescription, buttonText, image }) => {
    return (
        <div className="welcome-screen">
            <div className="text-container">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-box heading-box"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-box description-box"
                />
                <button className="start-button">{buttonText}</button>
            </div>
            {image && (
                <img
                    src={image}
                    alt="Uploaded"
                    className="uploaded-image"
                />
            )}
        </div>
    );
};

export default WelcomeScreen;
