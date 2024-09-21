// src/App.jsx
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Sidebar from './components/Sidebar';
import './App.css'; // Import additional CSS if needed

const App = () => {
    const [heading, setHeading] = useState('Welcome to our form');
    const [description, setDescription] = useState('This is a description of the form');
    const [buttonText, setButtonText] = useState('Start');
    const [image, setImage] = useState('');

    return (
        <div className="app">
            <Sidebar
                heading={heading}
                setHeading={setHeading}
                description={description}
                setDescription={setDescription}
                buttonText={buttonText}
                setButtonText={setButtonText}
                image={image}
                setImage={setImage}
            />
            <div className="main-content">
                <WelcomeScreen
                    heading={heading}
                    setHeading={setHeading}
                    description={description}
                    setDescription={setDescription}
                    buttonText={buttonText}
                    image={image}
                />
            </div>
        </div>
    );
};

export default App;
