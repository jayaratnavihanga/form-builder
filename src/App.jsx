import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Sidebar from './components/Sidebar';
import StepsSidebar from './components/StepsSidebar';
import EmailSidebar from './components/EmailSidebar';
import EmailScreen from './components/EmailScreen';
import FormBuilder from './components/FormBuilder';
import shapeImage from './assets/shapes.png';
import './App.css';

const App = () => {
    const [title, setTitle] = useState('Welcome to our form');
    const [description, setDescription] = useState('This is a description of the form');
    const [buttonText, setButtonText] = useState('Start');
    const [image, setImage] = useState(shapeImage);
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
    const [showEmailSidebar, setShowEmailSidebar] = useState(false);
    const [showFormBuilder, setShowFormBuilder] = useState(true);
    const [email, setEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleWelcomeScreenClick = () => {
        setShowWelcomeScreen(true);
        setShowEmailSidebar(false);
        setShowFormBuilder(false);
    };

    const handleEmailClick = () => {
        setShowWelcomeScreen(false);
        setShowEmailSidebar(true);
        setShowFormBuilder(false);
    };

    const handleCloseClick = () => {
        setShowWelcomeScreen(false);
        setShowEmailSidebar(false);
        setShowFormBuilder(true);
    };

    const handleGetStarted = () => {
        setShowFormBuilder(false);
        setShowWelcomeScreen(true);
    };

    return (
        <div className="app">
            {showWelcomeScreen || showEmailSidebar ? (
                <Sidebar
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    image={image}
                    setImage={setImage}
                    onCloseClick={handleCloseClick}
                />
            ) : (
                <StepsSidebar
                    onWelcomeScreenClick={handleWelcomeScreenClick}
                    onEmailClick={handleEmailClick}
                />
            )}

            <div className="main-content">
                {showFormBuilder && (
                    <FormBuilder onGetStarted={handleGetStarted} />
                )}
                {showWelcomeScreen && (
                    <WelcomeScreen
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        buttonText={buttonText}
                        image={image}
                    />
                )}
                {showEmailSidebar && (
                    <>
                        <EmailSidebar
                            email={email}
                            setEmail={setEmail}
                            contactMessage={contactMessage}
                            setContactMessage={setContactMessage}
                            additionalInfo={additionalInfo}
                            setAdditionalInfo={setAdditionalInfo}
                            onCloseClick={handleCloseClick}
                        />
                        <EmailScreen
                            email={email}
                            setEmail={setEmail}
                            contactMessage={contactMessage}
                            setContactMessage={setContactMessage}
                            additionalInfo={additionalInfo}
                            setAdditionalInfo={setAdditionalInfo}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
