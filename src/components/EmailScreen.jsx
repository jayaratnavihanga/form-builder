import React from 'react';
import './EmailScreen.css';

const EmailScreen = ({ email, setEmail, contactMessage, setContactMessage, additionalInfo, setAdditionalInfo }) => {
    return (
        <div className="email-screen">
            <div className="editable-text" contentEditable={true} suppressContentEditableWarning={true}
                 onInput={(e) => setEmail(e.target.innerText)} placeholder="Enter your email">
                {email || "Enter your email"}
            </div>
            <div className="editable-text" contentEditable={true} suppressContentEditableWarning={true}
                 onInput={(e) => setContactMessage(e.target.innerText)} placeholder="This will be used to contact you for the next steps">
                {contactMessage || "This will be used to contact you for the next steps"}
            </div>
            <div className="editable-text" contentEditable={true} suppressContentEditableWarning={true}
                 onInput={(e) => setAdditionalInfo(e.target.innerText)} placeholder="Type here...">
                {additionalInfo || "Type here..."}
            </div>
        </div>
    );
};

export default EmailScreen;
