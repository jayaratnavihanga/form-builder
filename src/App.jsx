// src/App.jsx
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Sidebar from './components/Sidebar';
import StepsSidebar from './components/StepsSidebar'; // Import the new StepsSidebar
import './App.css'; // Import additional CSS if needed

const App = () => {
    const [title, setTitle] = useState('Welcome to our form');
    const [description, setDescription] = useState('This is a description of the form');
    const [buttonText, setButtonText] = useState('Start');
    const [image, setImage] = useState('src/assets/shapes.png'); // Default image
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(false); // State to manage which sidebar to show

    const handleWelcomeScreenClick = () => {
        setShowWelcomeScreen(true);
    };

    const handleCloseClick = () => {
        setShowWelcomeScreen(false);
    };

    return (
        <div className="app">
            {showWelcomeScreen ? (
                <Sidebar
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    image={image}
                    setImage={setImage}
                    onCloseClick={handleCloseClick} // Pass the close click handler
                />
            ) : (
                <StepsSidebar onWelcomeScreenClick={handleWelcomeScreenClick} />
            )}
            <div className="main-content">
                <WelcomeScreen
                    title={title}
                    setTitle={setTitle}
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
