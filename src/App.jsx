// src/App.jsx
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Sidebar from './components/Sidebar';
import './App.css'; // Import additional CSS if needed

const App = () => {
    const [title, setTitle] = useState('Welcome to our form');
    const [description, setDescription] = useState('This is a description of the form');
    const [buttonText, setButtonText] = useState('Start');
    const [image, setImage] = useState('src/assets/shapes.png');

    return (
        <div className="app">
            <Sidebar
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                buttonText={buttonText}
                setButtonText={setButtonText}
                image={image}
                setImage={setImage}
            />
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
